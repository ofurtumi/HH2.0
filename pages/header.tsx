import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className={styles.prison}>
        <Link passHref href="/">
          <img src="/imgs/nav_logo.png" alt="Hannesarholt" />
        </Link>
        <div className={styles.dropdown}>
          <button>=</button>
          <ul>
            <li>
              <Link passHref href="/veitingahus">
                Veitingahús
              </Link>
            </li>
            <li>
              <Link passHref href="/vidburdir">
                Viðburðir
              </Link>
            </li>
            <li>
              <Link passHref href="/salir">
                Salir
              </Link>
            </li>
            <li>
              <Link passHref href="/hannesarholt">
                Hannesarholt
              </Link>
            </li>
            <li>
              <Link passHref href="/heimili">
                Heimili Heimsmarkmiðana
              </Link>
            </li>
            <li>
              <Link passHref href="/frettir">
                Fréttir
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
