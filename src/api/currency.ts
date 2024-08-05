import apiClient, { API_KEY } from './apiClient';

export interface ConversionParams {
    from: string;
    to: string;
    amount: number;
}

export interface ConversionDTO {
    value: number;
}

export interface CurrencyListItem {
    code: string;
    decimal_mark: string;
    id: string;
    name: string;
    precision: number;
    short_code: string;
    subunit: number;
    symbol: string;
    symbol_first: boolean;
    thousands_separator: string;
}

export type CurrenciesResults = CurrencyListItem[];

export interface CurrenciesDTO {
    response: CurrenciesResults;
}

export const fetchCurrencies = async (): Promise<CurrenciesResults> => {
    const response = await apiClient.get<CurrenciesDTO>('/currencies');
    return response.data.response;
};

export const fetchConversion = async ({ from, to, amount }: ConversionParams): Promise<number> => {
    const response = await apiClient.get<ConversionDTO>('/convert', {
        params: {
            from,
            to,
            amount,
        },
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        },
    });
    return response.data.value;
};
