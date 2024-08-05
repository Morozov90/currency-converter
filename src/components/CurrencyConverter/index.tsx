import {
    Container,
    Typography,
    TextField,
    CircularProgress,
    Box,
    InputAdornment,
} from '@mui/material';
import { CurrencySelect } from '../CurrencySelect';
import { useCurrencyExchange } from '../../hooks';

export const CurrencyConverter = () => {
    const {
        fromCurrency,
        handleSetFromCurrency,
        toCurrency,
        handleSetToCurrency,
        amount,
        handleAmountChange,
        convertedAmount,
        isLoadingConversion,
    } = useCurrencyExchange();

    return (
        <Container>
            <Box display="flex" justifyContent="space-between" mb={2}>
                <CurrencySelect
                    label="From"
                    value={fromCurrency}
                    onChange={handleSetFromCurrency}
                />
                <CurrencySelect label="To" value={toCurrency} onChange={handleSetToCurrency} />
            </Box>
            <TextField
                label="Amount"
                type="number"
                fullWidth
                variant="outlined"
                value={amount}
                onChange={handleAmountChange}
                margin="normal"
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
            />
            <Box mt={2}>
                <Typography variant="h6">Converted Amount:</Typography>
                {isLoadingConversion ? (
                    <CircularProgress />
                ) : (
                    <Typography variant="body1">{convertedAmount.toFixed(2)}</Typography>
                )}
            </Box>
        </Container>
    );
};
