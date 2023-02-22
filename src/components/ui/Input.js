import { twMerge } from 'tailwind-merge';

export default function Input({ className, name, optional, label, icon, fullWidth, ...props }) {
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-300">
          {label}{' '}
          {optional && (
            <span className="text-gray-500 text-xs">
              {'('}optional{')'}
            </span>
          )}
        </label>
      )}
      <div className="relative mt-1 rounded-md shadow-sm">
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {icon}
          </div>
        )}
        <input
          {...props}
          name={name}
          className={twMerge(
            'py-4 block w-full rounded-md border-2 border-secondary focus:outline-none focus:border-highlight-100 bg-dark text-gray-100 pr-4',
            icon ? 'pl-11' : 'pl-4',
            className
          )}
        />
      </div>
    </div>
  );
}
