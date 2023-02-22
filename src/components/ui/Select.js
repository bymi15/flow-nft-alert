import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Select({ className, label, defaultValue, fullWidth, onSelect, options }) {
  const [selected, setSelected] = useState(defaultValue);

  return (
    <Listbox
      value={selected}
      onChange={(value) => {
        setSelected(value);
        onSelect(value);
      }}
    >
      {({ open }) => (
        <div className={fullWidth ? twMerge('w-full', className) : className}>
          {label && (
            <Listbox.Label className="block text-sm font-medium text-gray-300">
              {label}
            </Listbox.Label>
          )}
          <div className="relative mt-1">
            <Listbox.Button className="px-4 relative w-full cursor-default rounded-md py-4 block border-2 border-secondary focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-highlight-100 bg-dark text-gray-100 pr-4">
              <span className="block truncate text-start">{selected?.label}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-dark py-1 text-base shadow-lg focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.label}
                    className={({ active }) =>
                      twMerge(
                        active ? 'bg-highlight-100' : '',
                        'relative cursor-default select-none py-2 pl-3 pr-9 text-gray-100'
                      )
                    }
                    value={option}
                  >
                    <span
                      className={twMerge(
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate'
                      )}
                    >
                      {option.label}
                    </span>
                    {option.value === selected?.value && (
                      <span className={'absolute inset-y-0 right-0 flex items-center pr-4'}>
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}
