import { useEffect, useState } from 'react';
import { Inline, Outline } from './Stars';

const ItemRating = ({ rating, count }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    let tmpArr = [];
    for (let i = 1; i <= 5; i++) {
      tmpArr.push(i <= rating + 0.3 ? Inline : Outline);
    }
    setArr(tmpArr);
  }, [rating]);

  return (
    <div className="w-32">
      <div className="text-center">{arr}</div>
      <div className="text-center">
        <span className="text-yellow-400">
          {' '}
          {rating
            ? `${rating.toFixed(2)}, ${count} ${
                count === 1 ? 'rating' : 'ratings'
              }`
            : 'No reviews yet'}
        </span>
      </div>
    </div>
  );
};

export default ItemRating;
