import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import './Home.css'
import '../organ/Liver'

const Home = () => {
    const navigate = useNavigate();

    const handleClick = useCallback ( () => {
        navigate("/organo", {
            state: { userData: { displayName: "Usuario" } },
        });
    }, [navigate]);

    return(
        <div> 
            <h1>Inicio</h1>
            <button onClick = {handleClick}> Enfermedades </button>
        </div>
    );
};

export default Home;