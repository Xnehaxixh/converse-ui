import { useQuery } from 'react-query';

import type { TodoEntity } from '@/features/todos/types';
import { axios } from '@/lib';

import type { UseQueryResult } from 'react-query';

const TODOS_QUERY_KEY = ['todos'];

const useTodos = (): UseQueryResult<
  {
    count: number;
    data: TodoEntity[];
  },
  unknown
> => {
  return useQuery<{ count: number; data: TodoEntity[] }>(TODOS_QUERY_KEY, () =>
    axios.get('/todos').then((r) => r.data)
  );
};

export { useTodos };
