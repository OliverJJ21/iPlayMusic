import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Intro from '../components/intro'

function Index() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/login');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Intro />
        </>
    );
}

export default Index;