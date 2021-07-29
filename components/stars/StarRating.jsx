import { Outline, Inline } from './Stars';
import { useMemo } from 'react';

const getStars = rating => {
  let retArr = [];

  for (let i = 1; i <= 5; i++) {
    retArr.push(i <= rating + 0.3 ? <Inline key={i} /> : <Outline key={i} />);
  }

  return <div className="h-6">{retArr}</div>;
};

const StarRating = ({ rating }) => {
  const stars = useMemo(() => getStars(rating), [rating]);

  return <div className="mx-auto">{stars}</div>;
};

export default StarRating;
