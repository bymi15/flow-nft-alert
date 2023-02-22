import FlowIcon from 'components/icons/FlowIcon';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function PriceInput({
  fullWidth,
  label,
  className,
  defaultPriceValue,
  defaultCurrencyValue,
  currencyOptions,
  onPriceChange,
  onCurrencyChange,
}) {
  const [price, setPrice] = useState(defaultPriceValue);
  const [currency, setCurrency] = useState(defaultCurrencyValue);
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && <label className="block text-sm font-medium text-gray-300">{label}</label>}
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          {currency === 'USD' ? (
            <span className="text-lg">$</span>
          ) : currency === 'FLOW' ? (
            <FlowIcon />
          ) : null}
        </div>
        <input
          type="text"
          className={twMerge(
            'pl-10 py-4 block w-full rounded-md border-2 border-secondary focus:outline-none focus:ring-0 focus:border-highlight-100 bg-dark text-gray-100 pr-4',
            className
          )}
          value={price}
          onChange={(e) => {
            // check if the new value is a valid number
            if (isNaN(e.target.value)) return;
            setPrice(e.target.value);
            onPriceChange(e.target.value);
          }}
          placeholder="0.0"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            name="currency"
            className="h-full rounded-md border-transparent border-2 bg-transparent py-0 pl-4 pr-9 text-gray-300 focus:border-highlight-100 focus:ring-0"
            value={currency}
            onChange={(e) => {
              setCurrency(e.target.value);
              onCurrencyChange(e.target.value);
            }}
          >
            {currencyOptions.map((option) => (
              <option className="text-black" key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
