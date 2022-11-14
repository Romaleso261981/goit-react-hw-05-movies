import {Container, Header} from "./Layout.styled";
import {Navigation} from 'components/Navigation/Navigation ';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
 return (
    <Container>
        <Header>
            <Navigation />
        </Header>
        <Outlet />
    </Container>
    )
}