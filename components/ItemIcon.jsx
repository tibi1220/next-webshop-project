import {
  CakeIcon,
  PaperClipIcon,
  ShoppingBagIcon,
  DeviceMobileIcon,
  FireIcon,
  HashtagIcon,
  ExclamationIcon,
} from '@heroicons/react/outline';

const ItemIcon = ({ imageId }) => {
  const getImage = id => {
    switch (id) {
      case 1:
        return <CakeIcon />;
      case 2:
        return <PaperClipIcon />;
      case 3:
        return <ShoppingBagIcon />;
      case 4:
        return <DeviceMobileIcon />;
      case 5:
        return <FireIcon />;
      case 6:
        return <HashtagIcon />;
    }
    return <ExclamationIcon />;
  };

  const getImageColor = id => {
    switch (id) {
      case 12:
        return;
    }
    return 'text-gray-800';
  };

  return <div className={getImageColor(imageId)}>{getImage(imageId)}</div>;
};

export default ItemIcon;
