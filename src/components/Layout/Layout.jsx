import {Container, Header} from "./Layout.styled";
import {AppBar} from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
 return (
    <Container>
        <Header>
            <AppBar />
        </Header>
        <Outlet />
    </Container>
    )
}