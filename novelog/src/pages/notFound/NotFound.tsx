import { useNavigate } from 'react-router-dom';
import { Container, Explain, NotFoundTit } from './NotFoundStyled';
import { Button } from '../../components/button/Button';

function NotFound() {
    const navigate = useNavigate();

    const backHome = () => {
        navigate('/home');
    };

    return (
        <Container>
            <NotFoundTit>NotFound</NotFoundTit>
            <Explain>찾을 수 없는 페이지입니다. :(</Explain>
            <Button label="홈으로 돌아가기" onClick={backHome} />
        </Container>
    );
}

export default NotFound;
