import { NavigationLink } from './NavigationLink';

export const Navbar: React.FC = () => (
  <nav
    data-cy="nav"
    className="navbar is-fixed-top has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <NavigationLink link="/" text="Home" />
        <NavigationLink link="/people" text="People" />
      </div>
    </div>
  </nav>
);