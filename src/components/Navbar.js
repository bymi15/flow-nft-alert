import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from './icons/GithubIcon';

export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 w-full clearNav z-50 transition-color ease-in duration-150">
        <div className="max-w-5xl mx-auto flex flex-wrap p-5 py-2 flex-row">
          <div className="flex flex-row items-center p-1">
            <Link href="/" className="font-sans flex text-xl text-white font-medium">
              <Image src="/android-chrome-192x192.png" width="28" height="28" alt="logo" />
            </Link>
          </div>
          <div className="flex items-center ml-auto">
            <a
              href="https://github.com/bymi15/flow-nft-alert"
              rel="noopener noreferrer"
              target="_blank"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
