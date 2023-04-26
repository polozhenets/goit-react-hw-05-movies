import s from './AppBar.module.css';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
import { Outlet } from 'react-router-dom';

export default function Appbar() {
  return (
    <header className={s.header}>
      <Container>
        <Navigation />
        <Outlet />
      </Container>
    </header>
  );
}
