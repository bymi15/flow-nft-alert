import * as fcl from '@onflow/fcl';

export const loadFCLConfig = (env = 'testnet') => {
  switch (env) {
    case 'testnet':
      fcl
        .config()
        .put('flow.network', env)
        .put('app.detail.title', 'Flow NFT Alert')
        .put('app.detail.icon', '')
        .put('accessNode.api', 'https://rest-testnet.onflow.org')
        .put('discovery.authn.endpoint', 'https://fcl-discovery.onflow.org/api/testnet/authn')
        .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn')
        .put('0xFungibleToken', '0x9a0766d93b6608b7')
        .put('0xNonFungibleToken', '0x631e88ae7f1d7c20')
        .put('0xMetadataViews', '0x631e88ae7f1d7c20')
        .put('0xNFTStorefrontV2', '0x2d55b98eb200daef')
        .put('0xNFTCatalog', '0x324c34e1c517e4db')
        .put('0xNFTRetrieval', '0x324c34e1c517e4db');
      break;
    case 'mainnet':
      fcl
        .config()
        .put('flow.network', env)
        .put('app.detail.title', 'Flow NFT Alert')
        .put('app.detail.icon', '')
        .put('accessNode.api', 'https://rest-mainnet.onflow.org')
        .put('discovery.authn.endpoint', 'https://fcl-discovery.onflow.org/api/authn')
        .put('discovery.wallet', 'https://fcl-discovery.onflow.org/authn')
        .put('0xFungibleToken', '0xf233dcee88fe0abe')
        .put('0xNonFungibleToken', '0x1d7e57aa55817448')
        .put('0xMetadataViews', '0x1d7e57aa55817448')
        .put('0xNFTStorefrontV2', '0x4eb8a10cb9f87357')
        .put('0xNFTCatalog', '0x49a7cda3a1eecc29')
        .put('0xNFTRetrieval', '0x49a7cda3a1eecc29');
      break;
  }
};
