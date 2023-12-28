import { Card, Loader } from 'components';
import useGetListPlanets from 'hooks/useGetListPlanets';
import React, { useEffect } from 'react';
import { debounce } from 'utils/debounce';
import {
  ButtonWishListWrapper,
  Container,
  StyledHeader,
  TransparentButton
} from './list-planets.style';
import { IoIosHeart } from 'react-icons/io';
import useWishList from 'hooks/useWishList';
import { Planet } from 'types/planets';
import WishListModal from 'features/wishlist/wishlist-modal';
import { useRouter } from 'next/router';

const ListPlanets = () => {
  const [wishList, setWishList] = React.useState<Planet[]>([]);
  const [modalWishList, setModalWishList] = React.useState<boolean>(false);

  const { data, isLoading, isRevalidate, addData } = useGetListPlanets();

  const debouncedAddData = debounce(() => addData?.(), 1000);

  const { addWishList, getWishList } = useWishList();

  const handleIsLoved = (planet: Planet) => {
    return wishList.some((item) => item.name === planet.name);
  };

  useEffect(() => {
    const wishList = getWishList();
    setWishList(wishList);
  }, [getWishList]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

      if (scrollHeight - scrollTop === clientHeight) {
        debouncedAddData();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [addData]);

  return (
    <div>
      <StyledHeader>
        <div />
        <h1>List Of Planets</h1>
        <ButtonWishListWrapper>
          <TransparentButton onClick={() => setModalWishList(true)}>
            <IoIosHeart />
          </TransparentButton>
          <span>({wishList.length})</span>
        </ButtonWishListWrapper>
      </StyledHeader>

      <div
        style={{
          padding: '20px',
          marginTop: '100px'
        }}
      >
        {isLoading ? (
          <Container>
            <Loader />
          </Container>
        ) : (
          data?.results?.map((planet, index) => (
            <Card
              planet={planet}
              key={index}
              onClick={() => addWishList(planet)}
              isLoved={handleIsLoved(planet)}
            />
          ))
        )}

        {isRevalidate && (
          <Container>
            <Loader />
          </Container>
        )}
      </div>

      <WishListModal
        isOpen={modalWishList}
        onClose={() => setModalWishList(false)}
        wishlist={wishList}
        onRemoveItem={(planet) => addWishList(planet)}
      />
    </div>
  );
};

export default ListPlanets;
