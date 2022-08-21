import Styled from 'styled-components';
    
    const DivProdutos = Styled.div`
        background-color: #bff;
        height: 85vh;
        text-align: center;
        h1, p{
            color: #7cc;
        }
    `

export default function Produtos(){

    return(
        <DivProdutos>
            <h1>Páginas de Produtos</h1>
            <p>Exemplo de página dos produtos de compra.</p>

        </DivProdutos>
    )

}