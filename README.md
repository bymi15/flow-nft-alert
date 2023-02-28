# Flow NFT Alert

![csreenshot](./Flow%20NFT%20Alert%20Screenshot.png)

Flow NFT Alert aims to bridge the gap between **collectors** and **marketplaces** with a focus on collector experience.

This is a submission for the [Flow 2023 Hackathon](https://hackathon.flow.com/), including the following:

- Backend server: https://github.com/bymi15/flow-nft-alert-server
- Utility smart contract: https://github.com/bymi15/flow-nft-metadata-utility

## Live Demo

https://flow-nft-alert.vercel.app

## Tech Stack

- NextJS
- React
- TailwindCSS
- Cadence
- FCL (Flow Client Library)

## Architecture

![architecture diagram](./Flow%20NFT%20Alert%20Architecture%20Diagram.png)

## Problem

With the continuous growth in the Flow ecosystem, there are currently over 200 NFT projects and over 70 marketplaces.
The sparse distribution of NFTs across the ecosystem makes it difficult for collectors to purchase NFTs at their desired price.

## Solution

Flow NFT Alert addresses this problem by providing a user-friendly web application allowing collectors to search for their favorite Flow NFT collection, add additional details for filtering down the NFT, and set their desired price, to receive email notifications and eliminate the need for collectors to constantly monitor numerous marketplaces.

## Core Features

- Easily search for Flow NFT collections through the NFT Catalog
- Receive email notifications for new listings for your desired collection at your desired price
- Seamless user experience with no registration or login required
- Set alerts for specific NFTs filtered by name, ID, or serial number and configure a price below or above a specified threshold
- Integrated with the latest NFTStorefrontV2 Open Marketplace contract which allows automatic integration with all marketplaces using the contract (e.g. Flowverse NFT)

## Marketplace Integrations

- [Flowverse NFT](https://nft.flowverse.co/)
- [Matrix Market](https://matrixmarket.xyz/en/home)
- [NBA Top Shot](https://nbatopshot.com/)
- [Flowty](https://www.flowty.io/marketplace)
- Any other marketplaces using the NFTStorefront or NFTStorefrontV2 open marketplace contracts (https://github.com/onflow/nft-storefront)

## On-chain Contribution

NFTMetadataUtility smart contract provides utility functions that make it **easy to fetch NFT metadata from marketplace listings**. It fully leverages the composability of Flow blockchain by utilising the NFTCatalog, NFTStorefront, and NFTStorefrontV2 smart contracts.

- Testnet: https://testnet.flowscan.org/contract/A.13757baecc82973b.NFTMetadataUtility
- Mainnet: https://flowscan.org/contract/A.5425d4a12d3b88de.NFTMetadataUtility

## Future Plan

- Adding support for more marketplaces
- Displaying metrics for top collections with the most alerts set
- Implementing basic user authentication to allow users to manage their alerts - view, edit and delete alerts
- Direct integration with marketplaces - providing public APIs and embedded buttons for marketplaces to easily integrate

## Further questions or enquiries

- Please contact bymi15@yahoo.com
