import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header>
      <nav className={styles.prison}>
        <a href="/">
          <img src="/imgs/nav_logo.png" />
        </a>
        <div className={styles.dropdown}>
          <button>=</button>
          <ul>
            <li>
              <a href="/veitingahus">Veitingahús</a>
            </li>
            <li>
              <a href="/vidburdir">Viðburðir</a>
            </li>
            <li>
              <a href="/salir">Salir</a>
            </li>
            <li>
              <a href="/hannesarholt">Hannesarholt</a>
            </li>
            <li>
              <a href="/heimili">Heimili Heimsmarkmiðana</a>
            </li>
            <li>
              <a href="/frettir">Fréttir</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
