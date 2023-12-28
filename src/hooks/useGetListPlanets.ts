import { AxiosError } from 'axios';
import React, { useEffect } from 'react';
import { getListOfPlanets } from 'services/planets.services';
import { Planet } from 'types/planets';
import { planetParams } from 'types/request';
import { SwapiResponse } from 'types/response';
import { getIds } from 'utils/getIds';

type IValues = {
  data: SwapiResponse<Planet[]>;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  isRevalidate?: boolean;
  page: number;
};

type IUseGetListPlanets = {
  revalidate?: ({ created, page }: planetParams) => void;
  addData?: () => void;
  data: SwapiResponse<Planet[]>;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  isRevalidate?: boolean;
};

const useGetListPlanets = (): IUseGetListPlanets => {
  const [values, setValues] = React.useState<IValues>({
    data: { count: 0, next: null, previous: null, results: [] },
    isLoading: false,
    isError: false,
    errorMessage: '',
    isRevalidate: false,
    page: 1
  });

  const addData = async () => {
    setValues((prevState) => ({
      ...prevState,
      isRevalidate: true,
      page: prevState.page + 1
    }));

    try {
      const response = await getListOfPlanets({
        created: new Date(),
        page: values.page
      });

      const transformData: SwapiResponse<Planet[]> = {
        count: response.data.count,
        next: response.data.next,
        previous: response.data.previous,
        results: getIds(response.data.results)
      };

      setValues((prevState) => ({
        ...prevState,
        data: {
          ...prevState.data,
          results: [...prevState.data.results, ...transformData.results]
        }
      }));
    } catch (error) {
      const errorMessage = error as AxiosError;

      setValues((prevState) => ({
        ...prevState,
        isError: true,
        errorMessage: errorMessage.message
      }));
    } finally {
      setValues((prevState) => ({
        ...prevState,
        isRevalidate: false
      }));
    }
  };

  const fetchData = async ({ created, page }: planetParams) => {
    setValues((prevState) => ({
      ...prevState,
      isLoading: true
    }));

    try {
      const response = await getListOfPlanets({
        created,
        page
      });

      const transformData: SwapiResponse<Planet[]> = {
        count: response.data.count,
        next: response.data.next,
        previous: response.data.previous,
        results: getIds(response.data.results)
      };

      setValues((prevState) => ({
        ...prevState,
        data: transformData
      }));
    } catch (error) {
      const errorMessage = error as AxiosError;

      setValues((prevState) => ({
        ...prevState,
        isError: true,
        errorMessage: errorMessage.message
      }));
    } finally {
      setValues((prevState) => ({
        ...prevState,
        isLoading: false
      }));
    }
  };

  useEffect(() => {
    fetchData({
      created: new Date(),
      page: 1
    });
  }, []);

  return {
    data: values.data,
    isLoading: values.isLoading,
    isError: values.isError,
    errorMessage: values.errorMessage,
    isRevalidate: values.isRevalidate,
    revalidate: ({ created, page }: planetParams) => fetchData({ created, page }),
    addData: () => addData()
  };
};

export default useGetListPlanets;
