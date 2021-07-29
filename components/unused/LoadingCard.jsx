const LoadingCard = () => {
  return (
    <>
      <div className="h-10"></div>
      <div className="bg-white w-100 m-auto rounded-xl shadow-2xl p-4 max-w-sm w-full mx-auto">
        <div className="rounded-full bg-blue-400 h-12 w-12 p-12"></div>
      </div>
      <div className="h-10"></div>
      <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100 p-10">
        <div className="border border-light-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="flex space-x-4 animate-pulse">
            <div className="rounded-full bg-blue-400 h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-blue-400 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-blue-400 rounded"></div>
                <div className="h-4 bg-blue-400 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingCard;
