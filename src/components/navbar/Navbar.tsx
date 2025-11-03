import type { INavbar } from "./navbar.types";
import styles from "./navbar.module.css";
import { ROUTES } from "../../constants/route";

const Navbar = (props: INavbar) => {
  const { modules, onRouteChange } = props;

  function handleClick(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: string,
  ) {
    event.preventDefault();
    onRouteChange?.(link);
  }

  return (
    <nav className={styles.navbar}>
      <a
        className={styles.navbar__brand}
        href={ROUTES.ENTRY}
        onClick={(event) => handleClick(event, ROUTES.ENTRY)}
      >
        Shipping Box
      </a>
      <ul className={styles.navbar__links}>
        {modules.map((module) => (
          <li key={module.id}>
            <a
              href={module.link}
              className={styles.navbar__link}
              onClick={(event) => handleClick(event, module.link)}
            >
              {module.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
