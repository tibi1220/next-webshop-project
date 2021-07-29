const StarDetailed = ({ rating, count }) => {
  return (
    <div className="text-yellow-400 mx-auto">
      (
      {rating
        ? `${rating.toFixed(2)}, ${count} ${count === 1 ? 'rating' : 'ratings'}`
        : 'No reviews yet'}
      )
    </div>
  );
};

export default StarDetailed;
