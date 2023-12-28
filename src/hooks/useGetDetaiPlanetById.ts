import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { getPlanetById } from 'services/planets.services';
import { Planet } from 'types/planets';

type IValues = {
  data: Planet | {};
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
};

type IuseGetDetailPlanetById = {
  revalidate?: () => void;
  addData?: () => void;
  data: Planet;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
};

const useGetDetailPlanetById = (id: string | number): IuseGetDetailPlanetById => {
  const [values, setValues] = React.useState<IValues>({
    data: {},
    isLoading: false,
    isError: false,
    errorMessage: ''
  });

  const fetchData = async () => {
    setValues((prevState) => ({
      ...prevState,
      isLoading: true
    }));

    try {
      const response = await getPlanetById(id);

      setValues((prevState) => ({
        ...prevState,
        data: response.data
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
    fetchData();
  }, []);

  return {
    data: values.data as Planet,
    isLoading: values.isLoading,
    isError: values.isError,
    errorMessage: values.errorMessage,
    revalidate: () => fetchData()
  };
};

export default useGetDetailPlanetById;
