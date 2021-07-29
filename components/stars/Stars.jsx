import { StarIcon as StarOutlineIcon } from '@heroicons/react/outline';
import { StarIcon as StarInlineIcon } from '@heroicons/react/solid';

export const Inline = () => (
  <StarInlineIcon className="w-6 h-6 transform scale-110 text-yellow-400 inline" />
);
export const Outline = () => (
  <StarOutlineIcon className="w-6 h-6 text-yellow-400 inline" />
);
