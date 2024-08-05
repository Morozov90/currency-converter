import { useQuery } from '@tanstack/react-query';
import { fetchCurrencies } from '../api';

export const useCurrencies = () => {
    return useQuery({
        queryKey: ['currencies'],
        queryFn: fetchCurrencies,
    });
};
