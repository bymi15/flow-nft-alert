import * as fcl from '@onflow/fcl';
import * as t from '@onflow/types';
import { useQuery } from '@tanstack/react-query';
import { sortCollectionsByName } from 'utils/utils';

const cadenceGetCollections = `
import MetadataViews from 0xMetadataViews
import NFTCatalog from 0xNFTCatalog
import NFTRetrieval from 0xNFTRetrieval

pub struct NFTCollection {
  pub let contractName: String
  pub let contractAddress: String
  pub let storagePath: StoragePath
  pub let publicPath: PublicPath
  pub let privatePath: PrivatePath
  pub let publicLinkedType: Type
  pub let privateLinkedType: Type
  pub let name: String
  pub let description: String
  pub let collectionSquareImage: String
  pub let collectionBannerImage: String

  init(
      contractName: String,
      contractAddress: String,
      storagePath: StoragePath,
      publicPath: PublicPath,
      privatePath: PrivatePath,
      publicLinkedType: Type,
      privateLinkedType: Type,
      name: String,
      description: String,
      collectionSquareImage: String,
      collectionBannerImage: String
  ) {
      self.contractName = contractName
      self.contractAddress = contractAddress
      self.storagePath = storagePath
      self.publicPath = publicPath
      self.privatePath = privatePath
      self.publicLinkedType = publicLinkedType
      self.privateLinkedType = privateLinkedType
      self.name = name
      self.description = description
      self.collectionSquareImage = collectionSquareImage
      self.collectionBannerImage = collectionBannerImage
  }
}

pub fun main(collectionIdentifiers : [String]) : [NFTCollection] {
    var nftCollections: [NFTCollection] = []
    for collectionIdentifier in collectionIdentifiers {
        let value = NFTCatalog.getCatalogEntry(collectionIdentifier: collectionIdentifier)
        if value == nil {
            continue
        }

        let collectionDataView = value!.collectionData
        let collectionDisplayView = value!.collectionDisplay
        
        nftCollections.append(
            NFTCollection(
                contractName: value!.contractName,
                contractAddress: value!.contractAddress.toString(),
                storagePath: collectionDataView!.storagePath,
                publicPath: collectionDataView!.publicPath,
                privatePath: collectionDataView!.privatePath,
                publicLinkedType: collectionDataView!.publicLinkedType,
                privateLinkedType: collectionDataView!.privateLinkedType,
                name: collectionDisplayView!.name,
                description: collectionDisplayView!.description,
                collectionSquareImage: collectionDisplayView!.squareImage.file.uri(),
                collectionBannerImage: collectionDisplayView!.bannerImage.file.uri()
            )
        )
    }
    return nftCollections
}
`;

const cadenceGetIdentifiers = `
import MetadataViews from 0xMetadataViews
import NFTCatalog from 0xNFTCatalog
import NFTRetrieval from 0xNFTRetrieval

pub fun main() : [String] {
    let catalog = NFTCatalog.getCatalog()
    return catalog.keys
}
`;

const CHUNK = 40;
export const getNFTCatalogCollections = async () => {
  const scriptGetIdentifiers = await fcl.send([fcl.script(cadenceGetIdentifiers), fcl.args([])]);
  const collectionIdentifiers = await fcl.decode(scriptGetIdentifiers);
  const catalogBatches = [];
  if (Array.isArray(collectionIdentifiers)) {
    let batch = [];
    let count = 0;
    for (let i = 0; i < collectionIdentifiers.length; i++) {
      if (count >= CHUNK) {
        catalogBatches.push(batch);
        batch = [];
        count = 0;
      }
      if (collectionIdentifiers[i] === 'FLOAT') continue;
      batch.push(collectionIdentifiers[i]);
      count++;
    }
    if (batch.length > 0) catalogBatches.push(batch);
  }
  let collections = [];
  for (let collectionIdentifierBatch of catalogBatches) {
    const scriptGetCollections = await fcl.send([
      fcl.script(cadenceGetCollections),
      fcl.args([fcl.arg(collectionIdentifierBatch, t.Array(t.String))]),
    ]);
    const fetchedCollections = await fcl.decode(scriptGetCollections);
    if (Array.isArray(fetchedCollections)) {
      collections = [...collections, ...fetchedCollections];
    }
  }
  return collections;
};

export const useNFTCatalogCollectionsQuery = () => {
  return useQuery({
    queryKey: ['nftCatalogCollections'],
    queryFn: () => getNFTCatalogCollections(),
    select: (collections) => sortCollectionsByName(collections),
    cacheTime: 30 * 60 * 1000,
    staleTime: 30 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 2,
  });
};
