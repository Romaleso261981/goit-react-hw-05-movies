import {Container, Header} from "./Layout.styled";
import {AppBar} from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
 return (
    <Container>
        <Header>
            <AppBar />
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    </Container>
    )
}