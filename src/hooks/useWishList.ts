import React, { useEffect } from 'react';
import { Planet } from 'types/planets';

const useWishList = () => {
  const [wishList, setWishList] = React.useState<Planet[]>([]);

  useEffect(() => {
    // Update local storage whenever the wishlist changes
    localStorage.setItem('wishlist', JSON.stringify(wishList));
  }, [wishList]);

  const addWishList = (planet: Planet) => {
    let newValues = [...wishList, planet];

    if (wishList.find((item) => item.id === planet.id)) {
      newValues = wishList.filter((item) => item.id !== planet.id);
    }

    setWishList(newValues);
  };

  const getWishList = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') as string);

    return wishList;
  };

  return { addWishList, getWishList };
};

export default useWishList;
