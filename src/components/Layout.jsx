import { Outlet } from 'react-router-dom';
import { StyledLink, MenuBox, NavBox } from './App/App.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <header>
        <NavBox>
          <MenuBox>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </MenuBox>
        </NavBox>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};
