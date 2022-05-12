import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.prison}>
      <Link href={'/'}><img src="/imgs/footer_logo.png" className={styles.logo} /></Link>
      <p>| Hannersarholt | +(354) 511 1904 | hannesarholt@hannesarholt.is</p>
      <div>
        <ul>
          <li><a href="https://www.facebook.com/hannesarholt"><img src="/svg/facebook.svg" alt="Facebook" /></a></li>
          <li><a href="https://twitter.com/Hannesarholt1"><img src="/svg/twitter.svg" alt="Twitter" /></a></li>
          <li><a href="https://www.instagram.com/hannesarholt_grundarstig10/"><img src="/svg/instagram.svg" alt="Instagram" /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
