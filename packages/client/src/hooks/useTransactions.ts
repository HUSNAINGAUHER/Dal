import { useQuery, UseQueryResult } from 'react-query';
import { service } from '@/lib';
import { Transaction } from '@dal/common/entity';

export const useTransactions = (): UseQueryResult<Transaction[]> => {
  console.log('sdjsldj');
  return useQuery(['Transactions'], async (): Promise<Transaction[]> => {
    const res = await service.get('/transactions');

    return res.data;
  });
};
