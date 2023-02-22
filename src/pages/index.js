/* eslint-disable @next/next/no-img-element */
import { BellIcon, EnvelopeIcon, HashtagIcon } from '@heroicons/react/24/solid';
import Button from 'components/ui/Button';
import Combobox from 'components/ui/Combobox';
import Input from 'components/ui/Input';
import { useCreateAlertMutation } from 'hooks/api/createAlertMutation';
import { handleInputChange, useNestedState } from 'hooks/common';
import { useNFTCatalogCollectionsQuery } from 'hooks/flow/useNFTCatalogCollectionsQuery';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const [data, setData] = useNestedState({
    email: '',
    collection: '',
    nftID: '',
  });
  const router = useRouter();
  const { email, contractName, contractAddress, nftID } = router.query;
  const createAlertMutation = useCreateAlertMutation();

  const nftCatalogCollectionsQuery = useNFTCatalogCollectionsQuery();

  useEffect(() => {
    setData({
      email: email || '',
      collection: contractName && contractAddress ? contractName + '.' + contractAddress : '',
      nftID: nftID || '',
    });
  }, [email, contractName, contractAddress, nftID, setData]);

  const handleSubmit = async () => {
    try {
      await createAlertMutation.mutateAsync(data);
    } catch (err) {}
  };

  return (
    <>
      <Head>
        <title>Flow NFT Alert</title>
      </Head>
      <main>
        <section className="text-gray-600 body-font">
          <div className="max-w-5xl pt-48 pb-24 px-6 sm:px-2 mx-auto">
            <h1 className="font-sans text-5xl sm:text-7xl text-center font-bold text-white mb-6">
              Flow NFT Alert
            </h1>
            <div className="flex justify-center">
              <h2 className="text-lg sm:text-2xl pb-11 text-gray-400 text-center max-w-[640px]">
                Receive email notifications for new NFT listings for your desired collection in the
                Flow blockchain
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-5 w-full sm:w-[340px]">
                <Input
                  fullWidth
                  className="mb-5"
                  label="Email Address"
                  name="email"
                  icon={<EnvelopeIcon className="w-5 h-5" />}
                  value={data.email}
                  onChange={(e) => handleInputChange(e, setData)}
                />
                <Combobox
                  fullWidth
                  className="mb-5"
                  label="NFT Collection"
                  filterFunction={(collection, query) =>
                    collection.name.toLowerCase().includes(query.toLowerCase())
                  }
                  displayValue={(collection) => collection?.name}
                  defaultValue={
                    contractName && contractAddress
                      ? nftCatalogCollectionsQuery.data?.filter(
                          (collection) =>
                            collection.contractName === contractName &&
                            collection.contractAddress === contractAddress
                        )[0]
                      : undefined
                  }
                  loading={nftCatalogCollectionsQuery.isLoading}
                  options={nftCatalogCollectionsQuery.data || []}
                  optionKeyField="contractName"
                  optionThumbnailField="collectionSquareImage"
                  optionDisplayField="name"
                />
                <Input
                  fullWidth
                  optional
                  className="mb-3"
                  label="NFT ID"
                  name="nftID"
                  icon={<HashtagIcon className="w-5 h-5" />}
                  value={data.nftID}
                  onChange={(e) => handleInputChange(e, setData)}
                />
              </div>
              <Button onClick={handleSubmit} loading={createAlertMutation.isLoading}>
                <div className="flex">
                  Create Alert <BellIcon className="ml-1 w-5 h-5" />
                </div>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
