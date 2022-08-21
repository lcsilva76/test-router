import Styled from 'styled-components';
    
    const DivServicos = Styled.div`
        background-color: #bfb;
        height: 85vh;
        text-align: center;
        h1, p{
            color: #7c7;
        }
    `

export default function Servicos(){

    return(
        <DivServicos>
            <h1>Páginas de Serviços</h1>
            <p>Exemplo de página dos Serviços.</p>

        </DivServicos>
    )

}