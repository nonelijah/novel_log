import { useEffect } from 'react';
import { WelcomeContainer, WelcomeExplain, WelcomeTit } from './WelcomeStyled';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate = useNavigate();
    useEffect(() => {
        const goHome = setTimeout(() => {
            navigate('/home');
        }, 3000);

        return () => clearTimeout(goHome);
    }, []);

    return (
        <WelcomeContainer>
            <h2 className="a11y-hidden">Welcome Page</h2>
            <WelcomeExplain>
                읽고 기록하는
                <br />
                <WelcomeTit>Novel loge</WelcomeTit>
            </WelcomeExplain>
        </WelcomeContainer>
    );
}

export default Welcome;
