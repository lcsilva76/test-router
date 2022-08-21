import Styled from 'styled-components';

    const DivHome = Styled.div`
        background-color: #ffb;
        height: 85vh;
        text-align: center;
        h1, p{
            color: orange;
        }    
    `

export default function Home(){

    return(
        <DivHome>
            <h1>Página principal</h1>
            <p>Exemplo da página principal do projeto.</p>
        </DivHome>
    )
}