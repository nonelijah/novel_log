import { WelcomeContainer, WelcomeExplain, WelcomeTit } from './WelcomeStyled';

function Welcome() {
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
