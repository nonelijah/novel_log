import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import AppRouters from './router/AppRouters';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <h1 className="a11y-hidden">Novel Log</h1>
            <AppRouters />
        </BrowserRouter>
    );
}

export default App;
