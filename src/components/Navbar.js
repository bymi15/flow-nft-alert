import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import GithubIcon from './icons/GithubIcon';

export default function Navbar() {
  const router = useRouter();

  // Get QueryClient from the context
  const queryClient = useQueryClient();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [flyer, setFlyer] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full clearNav z-50 transition-color ease-in duration-150">
        <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
          <div className="flex flex-row items-center justify-between p-3 md:p-1">
            <Link href="/" className="font-sans flex text-xl text-white font-medium mb-4 md:mb-0">
              Flow NFT Alert
            </Link>
            <button
              className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
              type="button"
              aria-label="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
          <div
            className={twMerge('md:flex flex-grow items-center', navbarOpen ? 'flex' : 'hidden')}
          >
            <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
              {/* <a className="text-gray-300 hover:text-white font-semibold">Page</a> */}
            </div>
            <a
              href="https://github.com/bymi15/flow-nft-alert"
              rel="noopener noreferrer"
              target="_blank"
              className="pl-7 invisible md:visible"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
