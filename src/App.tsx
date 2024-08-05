// mui
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// components
import { CurrencyConverter } from './components';

function App() {
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography variant="h2" align="center">
                Currency Converter
            </Typography>
            <CurrencyConverter />
        </Container>
    );
}

export default App;
