/* eslint-disable @next/next/no-img-element */
import { Combobox as HeadlessCombobox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Combobox({
  className,
  label,
  fullWidth,
  displayValue,
  defaultValue,
  loading,
  filterFunction,
  options,
  optionKeyField,
  optionThumbnailField,
  optionDisplayField,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (defaultValue !== undefined) {
      setSelectedOption(defaultValue);
    }
  }, [defaultValue]);

  const filteredOptions =
    query === '' ? options : options?.filter((collection) => filterFunction(collection, query));

  return (
    <HeadlessCombobox
      className={fullWidth ? twMerge('w-full', className) : className}
      as="div"
      value={selectedOption}
      onChange={setSelectedOption}
    >
      {label && (
        <HeadlessCombobox.Label className="block text-sm font-medium text-gray-100">
          {label}
        </HeadlessCombobox.Label>
      )}
      <div className="relative mt-1">
        <HeadlessCombobox.Input
          className={
            'w-full rounded-md py-4 block border-2 border-secondary focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-highlight-100 bg-dark text-gray-100 pr-4'
          }
          onChange={(e) => setQuery(e.target.value)}
          disabled={loading}
          displayValue={loading ? () => 'Loading...' : displayValue}
        />
        <HeadlessCombobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </HeadlessCombobox.Button>

        {filteredOptions.length > 0 && (
          <HeadlessCombobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-dark py-1 text-base shadow-lg focus:outline-none sm:text-sm">
            {filteredOptions.map((option, index) => (
              <HeadlessCombobox.Option
                key={`${option[optionKeyField]}.${index}`}
                value={option}
                className={({ active }) =>
                  twMerge(
                    'relative cursor-default select-none py-2 pl-3 pr-9 text-gray-100',
                    active ? 'bg-highlight-100' : ''
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      {optionThumbnailField && (
                        <img
                          src={option[optionThumbnailField]}
                          alt="thumbnail"
                          className="h-6 w-6 flex-shrink-0 rounded-full"
                        />
                      )}
                      <span className={twMerge('ml-3 truncate', selected && 'font-semibold')}>
                        {option[optionDisplayField]}
                      </span>
                    </div>
                    {selected && (
                      <span
                        className={twMerge(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </HeadlessCombobox.Option>
            ))}
          </HeadlessCombobox.Options>
        )}
      </div>
    </HeadlessCombobox>
  );
}
