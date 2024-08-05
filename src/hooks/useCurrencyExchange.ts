import { useState, ChangeEvent } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchConversion } from '../api';
import { useDebounce } from 'use-debounce';

export interface CurrencyExchangeResult {
    fromCurrency: string;
    handleSetFromCurrency: (value: string) => void;
    toCurrency: string;
    handleSetToCurrency: (value: string) => void;
    amount: number;
    handleAmountChange: (e: ChangeEvent<HTMLInputElement>) => void;
    convertedAmount: number;
    isLoadingConversion: boolean;
    error: unknown;
}

export const useCurrencyExchange = (): CurrencyExchangeResult => {
    const [fromCurrency, setFromCurrency] = useState<string>('');
    const [toCurrency, setToCurrency] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [debouncedAmount] = useDebounce(amount, 500);

    const {
        data: conversionData,
        isLoading: isLoadingConversion,
        error,
    } = useQuery({
        queryKey: ['conversion', fromCurrency, toCurrency, debouncedAmount],
        enabled: !!fromCurrency && !!toCurrency && debouncedAmount > 0,
        retry: false,
        queryFn: async () =>
            fetchConversion({
                from: fromCurrency,
                to: toCurrency,
                amount: debouncedAmount,
            }),
    });

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setAmount(value);
    };

    const handleSetFromCurrency = (value: string) => {
        setFromCurrency(value);
    };

    const handleSetToCurrency = (value: string) => {
        setToCurrency(value);
    };

    return {
        fromCurrency,
        handleSetFromCurrency,
        toCurrency,
        handleSetToCurrency,
        amount,
        handleAmountChange,
        convertedAmount: conversionData || 0,
        isLoadingConversion,
        error,
    };
};
