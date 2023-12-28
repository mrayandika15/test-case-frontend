import { AxiosError, AxiosResponse } from 'axios';
import { Planet } from 'types/planets';
import { planetParams } from 'types/request';
import { SwapiResponse } from 'types/response';
import axiosInstance from 'utils/axiosInstance';

const getListOfPlanets = async ({ created, page }: planetParams) => {
  try {
    const repsonse: AxiosResponse<SwapiResponse<Planet[]>> = await axiosInstance.get('/planets', {
      params: {
        created,
        page
      }
    });

    return repsonse;
  } catch (error) {
    const axiosError = error as AxiosError;

    throw axiosError;
  }
};

const getPlanetById = async (id: string | number | any) => {
  try {
    const repsonse: AxiosResponse<Planet> = await axiosInstance.get(`/planets/${id}`);

    return repsonse;
  } catch (error) {
    const axiosError = error as AxiosError;

    throw axiosError;
  }
};

export { getListOfPlanets, getPlanetById };
