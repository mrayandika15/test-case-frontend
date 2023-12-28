import { Planet } from 'types/planets';

export const getIds = (planets: Planet[]) => {
  return planets.map((planet) => {
    const id = parseInt(planet.url.split('/').filter(Boolean).pop() || '0', 10);

    return {
      ...planet,
      id
    };
  });
};
