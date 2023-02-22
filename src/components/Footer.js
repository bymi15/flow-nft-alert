import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="pb-4 text-gray-200">
      <div className="max-w-5xl xl:max-w-5xl mx-auto divide-y px-4 sm:px-6 md:px-8">
        <div className="flex flex-col justify-between pt-5 pb-4 sm:flex-row border-none">
          <ul className="flex flex-col space-y-2 sm:mb-0 items-center sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-md text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col mt-8 items-center mb-3 space-y-2 sm:mt-0 sm:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <a
              href="mailto:bymi15@yahoo.com"
              className="text-sm text-gray-200 hover:text-white transition-colors duration-300 hover:text-deep-purple-accent-400 tracking-tight"
            >
              © 2023 Brian Min
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
