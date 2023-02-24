/* eslint-disable @next/next/no-img-element */
import { CheckIcon } from '@heroicons/react/20/solid';
import { BellIcon, EnvelopeIcon, HashtagIcon, XCircleIcon } from '@heroicons/react/24/solid';
import Button from 'components/ui/Button';
import Combobox from 'components/ui/Combobox';
import ConfirmationModal from 'components/ui/ConfirmationModal';
import Input from 'components/ui/Input';
import PriceInput from 'components/ui/PriceInput';
import Select from 'components/ui/Select';
import { useCreateAlertMutation } from 'hooks/api/createAlertMutation';
import { handleInputChange, useNestedState } from 'hooks/common';
import { useNFTCatalogCollectionsQuery } from 'hooks/flow/useNFTCatalogCollectionsQuery';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUnixExpiry, matchCollectionByQuery } from 'utils/utils';

export default function Home() {
  const [data, setData] = useNestedState({
    email: '',
    alertType: 'FLOOR_PRICE',
    nftID: '',
    expiry: '',
  });
  const [priceData, setPriceData] = useNestedState({
    floorPrice: '0.0',
    currency: 'FLOW',
  });
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [collection, setCollection] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const router = useRouter();
  const { email, contractName, contractAddress, nftID } = router.query;
  const createAlertMutation = useCreateAlertMutation();

  const nftCatalogCollectionsQuery = useNFTCatalogCollectionsQuery();

  useEffect(() => {
    setData({
      email: email || '',
      nftID: nftID || '',
    });
  }, [email, contractName, contractAddress, nftID, setData]);

  const handleSubmit = async () => {
    setErrorMessage('');
    try {
      if (!collection) {
        setErrorMessage('Please select a collection');
        return;
      } else if (data.alertType === 'FLOOR_PRICE' && !priceData.floorPrice) {
        setErrorMessage('Please enter a floor price');
        return;
      } else if (!data.email) {
        setErrorMessage('Please enter your email address');
        return;
      }
      const priceDataObj = data.alertType === 'FLOOR_PRICE' ? priceData : {};
      await createAlertMutation.mutateAsync({
        contractName: collection.contractName,
        contractAddress: collection.contractAddress,
        ...data,
        ...priceDataObj,
      });
      setSuccessModalOpen(true);
    } catch (err) {}
  };

  return (
    <>
      <Head>
        <title>Flow NFT Alert</title>
      </Head>
      <ConfirmationModal
        open={successModalOpen}
        setOpen={setSuccessModalOpen}
        title="Your alert has been created!"
        description={`We will notify you when a new ${collection?.name} NFT is listed for sale${
          data.alertType === 'FLOOR_PRICE'
            ? ` for ${priceData.floorPrice} ${priceData.currency} or lower`
            : ''
        }`}
        icon={
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-highlight-100">
            <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
        }
      />
      <main>
        <section>
          <div className="pt-32">
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
              <div className="mb-5 w-full sm:w-[640px] grid grid-cols-4 gap-6">
                <div className="col-span-4">
                  <Input
                    fullWidth
                    label="Email Address"
                    name="email"
                    icon={<EnvelopeIcon className="w-5 h-5" />}
                    value={data.email}
                    onChange={(e) => handleInputChange(e, setData)}
                  />
                </div>
                <div className="col-span-4 sm:col-span-3">
                  <Combobox
                    fullWidth
                    label="NFT Collection"
                    onSelect={(collection) => {
                      setCollection(collection);
                      setErrorMessage('');
                    }}
                    filterFunction={matchCollectionByQuery}
                    placeholder="Search for a collection"
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
                </div>
                <div className="col-span-4 sm:col-span-1">
                  <Input
                    fullWidth
                    optional
                    label="NFT ID"
                    name="nftID"
                    icon={<HashtagIcon className="w-5 h-5" />}
                    value={data.nftID}
                    onChange={(e) => handleInputChange(e, setData)}
                  />
                </div>
                <div className="col-span-4 sm:col-span-2">
                  <Select
                    fullWidth
                    label="Alert Type"
                    defaultValue={{ label: 'Floor Price', value: 'FLOOR_PRICE' }}
                    onSelect={(selected) => setData({ alertType: selected.value })}
                    options={[
                      { label: 'New Listing', value: 'NEW_LISTING' },
                      { label: 'Floor Price', value: 'FLOOR_PRICE' },
                    ]}
                  />
                </div>
                {data.alertType === 'FLOOR_PRICE' && (
                  <div className="col-span-4 sm:col-span-2">
                    <PriceInput
                      fullWidth
                      label="Floor Price"
                      defaultPriceValue="0.0"
                      defaultCurrencyValue="FLOW"
                      currencyOptions={['FLOW', 'USD']}
                      onPriceChange={(floorPrice) => setPriceData({ floorPrice })}
                      onCurrencyChange={(currency) => setPriceData({ currency })}
                    />
                  </div>
                )}
                <div className="col-span-4">
                  <Select
                    fullWidth
                    label="Recurrence / Duration"
                    defaultValue={{ label: 'One time', value: undefined }}
                    onSelect={(selected) => setData({ expiry: getUnixExpiry(selected.value) })}
                    options={[
                      { label: 'One time', value: undefined },
                      { label: '7 days', value: '7 days' },
                      { label: '1 month', value: '1 month' },
                      { label: '3 months', value: '3 months' },
                      { label: '6 months', value: '6 months' },
                    ]}
                  />
                </div>
              </div>
              <Button onClick={handleSubmit} loading={createAlertMutation.isLoading}>
                <div className="flex">
                  Create Alert <BellIcon className="ml-1 w-5 h-5" />
                </div>
              </Button>
              <div>
                {(errorMessage || createAlertMutation.isError) && (
                  <div className="rounded-md bg-dark shadow-lg p-4 mt-5">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <XCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-500">
                          There was an error with your submission
                        </h3>
                        <div className="mt-2 text-sm text-red-500">
                          <ul role="list" className="list-disc space-y-1 pl-5">
                            {errorMessage && <li>{errorMessage}</li>}
                            {createAlertMutation.isError && (
                              <li>
                                {createAlertMutation.error.response?.data?.error
                                  ? createAlertMutation.error.response?.data?.error
                                  : createAlertMutation.error.response?.status === 500
                                  ? 'The server is experiencing some issues. Please try again later.'
                                  : JSON.stringify(createAlertMutation.error)}
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
