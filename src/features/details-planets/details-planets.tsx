import { StyledHeader } from 'features/list-planets/list-planets.style';
import useGetDetailPlanetById from 'hooks/useGetDetaiPlanetById';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { PlanetCard } from './details-planets.styled';
import { Loader } from 'components';

type DetailPlanet = {
  id: string | number;
};

const DetailPlanet: React.FC<DetailPlanet> = ({ id }) => {
  const { data, isLoading } = useGetDetailPlanetById(id);

  return (
    <>
      <StyledHeader>
        <div />
        <h1>{data?.name}</h1>
        <div />
      </StyledHeader>

      <PlanetCard>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <p>Rotation Period: {data?.rotation_period}</p>
            <p>Orbital Period: {data?.orbital_period}</p>
            <p>Diameter: {data?.diameter}</p>
            <p>Climate: {data?.climate}</p>
            <p>Gravity: {data?.gravity}</p>
            <p>Terrain: {data?.terrain}</p>
            <p>Surface Water: {data?.surface_water}</p>
            <p>Population: {data?.population}</p>
          </>
        )}
      </PlanetCard>
    </>
  );
};

export default DetailPlanet;
