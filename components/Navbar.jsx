import Link from 'next/link';
import { SearchIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = ({ input }) => {
  const router = useRouter();

  const [searchFor, setSearcFor] = useState(input || '');

  const handleSearchSubmit = e => {
    e.preventDefault();
    if (!searchFor) return;
    router.push(`/search/${searchFor}`);
  };

  const handleChange = e => {
    setSearcFor(e.target.value);
  };

  return (
    <div className="bg-gray-800">
      <nav
        className="font-mono grid grid-cols-4 md:grid-cols-8 gap-4  h-32 md:h-16 place-content-around p-4  text-green-100 container mx-auto"
        role="navigation"
      >
        <div className="col-span-1 text-3xl px-2 my-auto ">
          <Link href="/">
            <a className="hover:text-green-300 transition duration-500 ease-in-out">
              NXT
            </a>
          </Link>
        </div>
        <form
          action=""
          onSubmit={handleSearchSubmit}
          className="col-span-4 justify-self-auto place-self-center inline-flex md:justify-center justify-around gap-4 row-start-2 md:row-start-1 col-start-1 md:col-start-2 my-auto px-2"
        >
          <input
            value={searchFor}
            onChange={handleChange}
            className="flex-grow p-2 rounded-lg ring-2 ring-green-100 text-gray-800 focus:outline-none transition duration-500 ease-in-out focus:ring-4 hover:ring-4"
            placeholder="Search for items..."
          />
          <button
            type="submit"
            className="ml-2 w-auto rounded-lg ring-2 ring-green-100 p-2 bg-green-100 transition duration-500 ease-in-out hover:ring-4"
          >
            <SearchIcon className="w-6 h-6 text-gray-800" />
          </button>
        </form>
        <div className="col-span-3 justify-self-end text-lg place-self-center my-auto">
          {/* <Link href="/search">
            <a className="md:mx-3 mx-2 hover:text-green-300 transition duration-500 ease-in-out hover:border-b-2">
              Search
            </a>
          </Link> */}
          <Link href="/add-listing">
            <a className="md:mx-3 mx-2 hover:text-green-300 transition duration-500 ease-in-out">
              Upload
            </a>
          </Link>
          <Link href="/profile">
            <a className="md:mx-3 mx-2 hover:text-green-300 transition duration-500 ease-in-out">
              Profile
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
