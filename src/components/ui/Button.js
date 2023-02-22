import { twMerge } from 'tailwind-merge';
import Spinner from './Spinner';

export default function Button({ className, loading, onClick, children }) {
  return (
    <div>
      <button
        className={twMerge(
          'transition-all duration-100 ease-in-out bg-highlight hover:bg-highlight-100 px-10 py-3 rounded-md font-sans font-semibold text-sm text-white',
          className
        )}
        onClick={onClick}
        disabled={loading}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <Spinner />
            <span>Processing...</span>
          </div>
        ) : (
          children
        )}
      </button>
    </div>
  );
}
