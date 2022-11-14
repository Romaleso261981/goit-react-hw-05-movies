import {Link, Header} from './Navigation.styled'

export function Navigation() {
    return (
        <Header>            
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/movies' >Movies</Link>
            </nav>         
        </Header>
    )
} 