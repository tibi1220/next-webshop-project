const AddReview = ({ foo }) => {
  return (
    <div>
      <div className="container mx-auto flex justify-center">
        <form
          action=""
          className="w-full bg-green-50 p-5 sm:p-10 m-5 rounded-xl shadow-inner flex flex-col space-y-6 md:space-y-12 divide-y-2 divide-gray-800"
        >
          <div>
            <h1 className="sm:mx-auto text-3xl">Write a review</h1>
          </div>
          <div>
            <button
              type="submit"
              className="bg-gray-800 text-green-100 rounded-xl text-2xl shadow-md p-2 mr-auto sm:ml-auto"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;

export const getServerSideProps = context => {
  return {
    props: {
      foo: 'bar',
    },
  };
};
