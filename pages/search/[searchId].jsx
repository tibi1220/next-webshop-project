import prisma from '../../lib/prisma';
import DefaultLayout from '../../components/DefaultLayout';
import ItemCard from '../../components/ItemCard';
import { useEffect, useState } from 'react';

const SearchCustom = ({ input, result }) => {
  const [orderBy, setOrderBy] = useState(0);

  const alphabeticalAsc = (a, b) => a.name.localeCompare(b.name);
  const alphabeticalDesc = (a, b) => -a.name.localeCompare(b.name);
  const priceAsc = (a, b) => a.price - b.price;
  const priceDesc = (a, b) => b.price - a.price;
  const mostPopular = (a, b) => b.reviews.length - a.reviews.length;

  const callbacks = [
    alphabeticalAsc,
    alphabeticalDesc,
    priceAsc,
    priceDesc,
    mostPopular,
  ];

  return (
    <DefaultLayout input={input}>
      <div className="bg-gray-100">
        <div className="container mx-auto text-center pt-12 text-5xl 2xl:text-6xl font-mono text-gray-800">
          <h1>Search results for &quot;{input}&quot;...</h1>
        </div>
        <div className="container mx-auto flex justify-between p-4">
          <div className="hidden sm:block sm:w-col-sm text-center flex-col bg-white p-6 rounded-xl shadow-2xl my-10">
            <form action="" className="space-y-2">
              <div>
                <label htmlFor="order" className="text-lg font-semibold">
                  Order by:
                </label>
              </div>
              <div>
                <select
                  name="order"
                  id="order-select"
                  defaultValue="name_asc"
                  onChange={e => setOrderBy(parseInt(e.target.value))}
                >
                  <option value="0">Name Ascending</option>
                  <option value="1">Name Descending</option>
                  <option value="2">Price Ascending</option>
                  <option value="3">Price Descending</option>
                  <option value="4">Most Popular</option>
                </select>
              </div>
            </form>
          </div>
          <div className="w-full sm:w-col-lg inline-flex flex-col space-y-6 bg-white p-6 rounded-xl shadow-2xl my-10">
            {result.length !== 0 ? (
              result
                .sort(callbacks[orderBy])
                .map(e => <ItemCard item={e} key={`i${e.id}`} />)
            ) : (
              <h1>No res</h1>
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SearchCustom;

export const getServerSideProps = async context => {
  const input = context.query.searchId;
  const result = await prisma.item.findMany({
    where: {
      name: {
        contains: input,
        mode: 'insensitive',
      },
    },
    include: {
      reviews: {
        select: {
          stars: true,
        },
      },
    },
  });

  return {
    props: {
      input,
      result,
    },
  };
};
