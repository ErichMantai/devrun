import { useState } from 'react';
import {api} from '../services/api';

interface IDataDeveloper {
  id: string;
  nome: string;
  idade: number;
  hobby: string;
  sexo: string;
  datanascimento: Date
}

export default function useDevelopers(pageLimit: number) {
  const [devs, setDevs] = useState<IDataDeveloper[]>([]);

  async function fetchDevelopers(page: number) {
    const virtualPage = ((page - 1) * pageLimit) <= 0
      ? 0
      : ((page - 1) * pageLimit);

    const response = await api.get('/developers', { params: { init: virtualPage, limit: pageLimit } });

    setDevs(response.data);
  }

  return {
    fetchDevelopers,
    devs,
  };
}