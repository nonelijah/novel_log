import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import AppRouters from './router/AppRouters';

function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <AppRouters />
        </BrowserRouter>
    );
}

export default App;
