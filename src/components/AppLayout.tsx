import styled from '@emotion/styled'
import { NavLink, Outlet } from 'react-router-dom'

const Shell = styled.div`
  min-height: 100svh;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border);
`

const Brand = styled.span`
  font-weight: 600;
  color: var(--text-h);
  letter-spacing: -0.02em;
`

const Nav = styled.nav`
  display: flex;
  gap: 0.5rem;
`

const StyledNavLink = styled(NavLink)`
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  color: var(--text);
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    background: var(--code-bg);
    color: var(--text-h);
  }

  &.active {
    color: var(--text-h);
    font-weight: 600;
    background: var(--accent-bg);
  }
`

const Main = styled.main`
  flex: 1;
  padding: 2rem 1.5rem;
  max-width: 72rem;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
`

export function AppLayout() {
  return (
    <Shell>
      <Header>
        <Brand>Portfolio</Brand>
        <Nav>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/about">About</StyledNavLink>
        </Nav>
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Shell>
  )
}
