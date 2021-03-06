import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className={styles.prison}>
        <Link passHref href="/">
          <img src="/imgs/nav_logo.png" alt="Hannesarholt" className={styles.logo}/>
        </Link>
        {/* <div className={styles.dropdown}> */}
          <button className={styles.dropdownButton}>=</button>
        {/* </div> */}
        <ul className={styles.dropdownContent}>
            <li>
              <Link passHref href="/veitingahus">
                Veitingahús
              </Link>
            </li>
            <li>
              <Link passHref href="/vidburdir/1">
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
      </nav>
    </header>
  );
};

export default Header;
