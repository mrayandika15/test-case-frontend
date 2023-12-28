import React, { useEffect } from 'react';

import { CardWrapper, ListItem, Title, TitleWrapper } from './Card.style';
import { Planet } from 'types/planets';
import { IoIosHeart } from 'react-icons/io';
import { FaRegTrashAlt } from 'react-icons/fa';
import useWishList from 'hooks/useWishList';
import { watch } from 'fs';
import { useRouter } from 'next/router';

const Card = ({
  planet,
  onClick,
  isLoved,
  isWishList = true
}: {
  planet: Planet;
  onClick?: () => void;
  isLoved?: boolean;
  isWishList?: boolean;
}) => {
  const router = useRouter();

  return (
    <CardWrapper>
      <TitleWrapper>
        <Title onClick={() => router.push(`/${planet.id}`)}>{planet.name}</Title>
        {isWishList ? (
          <div>
            <IoIosHeart
              onClick={onClick}
              style={{
                color: isLoved ? 'red' : 'black',
                fontSize: '30px',
                cursor: 'pointer'
              }}
            />
          </div>
        ) : (
          <div>
            <FaRegTrashAlt
              style={{
                cursor: 'pointer'
              }}
              onClick={onClick}
            />
          </div>
        )}
      </TitleWrapper>

      <ul>
        <ListItem>Gravity: {planet.gravity}</ListItem>
        <ListItem>Population: {planet.population}</ListItem>
        <ListItem>Rotation Period: {planet.rotation_period}</ListItem>
        <ListItem>Terain : {planet.terrain}</ListItem>
        <ListItem>Diameter : {planet.diameter}</ListItem>
      </ul>
    </CardWrapper>
  );
};

export default Card;
