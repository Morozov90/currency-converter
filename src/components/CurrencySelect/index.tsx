import {
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    CircularProgress,
    SelectChangeEvent,
} from '@mui/material';
import { useCurrencies } from '../../hooks';

interface CurrencySelectProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

export const CurrencySelect = (props: CurrencySelectProps) => {
    const { label, value, onChange } = props;
    const { data, isLoading, isError } = useCurrencies();

    const handleCurrencyChange = (event: SelectChangeEvent) => {
        const value = event.target.value;
        onChange(value);
    };
    if (isLoading || !data?.length) {
        return <CircularProgress />;
    }

    if (isError) {
        return <CircularProgress />;
    }

    return (
        <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel>{label}</InputLabel>
            <Select value={value} onChange={handleCurrencyChange} label={label}>
                <MenuItem value="">
                    <em>Select currency</em>
                </MenuItem>
                {(data || []).map((currency) => (
                    <MenuItem key={currency.id} value={currency.short_code}>
                        <b>{currency.short_code}</b>: {currency.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
