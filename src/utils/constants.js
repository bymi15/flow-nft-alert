export const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT || 'dev';
export const FCL_ENV = ENVIRONMENT === 'prod' ? 'mainnet' : 'testnet';
export const API_URL = process.env.API_URL || 'http://localhost:5000';
export const PLATFORMURL =
  ENVIRONMENT === 'prod' ? 'https://flow-nft-alert.vercel.app' : 'http://localhost:3000';
export const MAX_PRICE_LIMIT = 2147483647;
