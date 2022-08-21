import { Link} from 'react-router-dom'
import Styled from 'styled-components'

const DivMenu = Styled.nav`
    background-color: darkblue; height: 15vh;
    display: flex; justify-content: center;

    ul{display:flex;}

    ul li{list-style:none;}

    ul li a{display:inline-block; text-decoration: none;
            padding: 20px; color:#fff; font-size: 1.em;}
`

export default function Menu(){

    return(
        <DivMenu>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/produtos'>Produtos</Link></li>
                <li><Link to='/servicos'>Servicos</Link></li>
            </ul>
        </DivMenu>
    )
}