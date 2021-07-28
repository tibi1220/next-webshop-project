import { Inline, Outline } from './Stars';
import { useEffect, useState, useCallback } from 'react';

const InteractiveRate = () => {
  const [rating, setRating] = useState(0);
  const [stars, setStars] = useState([]);

  const generateStars = () => {
    let retArr = [];

    for (let i = 1; i <= 5; i++) {
      retArr.push(
        <span key={i} onClick={() => setRating(i)} className="cursor-pointer">
          {i <= rating ? Inline : Outline}
        </span>
      );
    }

    return retArr;
  };

  useEffect(() => {
    setStars(generateStars(rating));
  }, [rating]);

  return <>{stars}</>;
};

export default InteractiveRate;
