import { DetailPlanet } from 'features';
import React from 'react';

interface DetailProps {
  query: {
    id: string;
  };
}

const Detail: React.FC<DetailProps> = ({ query }) => {
  return (
    <>
      <DetailPlanet id={query.id} />
    </>
  );
};

export async function getServerSideProps({ query }: { query: { id: string } }) {
  return {
    props: { query }
  };
}

export default Detail;
