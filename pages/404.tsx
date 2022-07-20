import styles from "../styles/errors.module.css";

const custom404 = () => {
  return (
    <main className={styles.prison}>
      <h1>404</h1>
      <h2>síðan sem þú ert að reyna að skoða er ekki til</h2>
      <p>ef þú telur þetta vera villu og að síðan eigi að vera hér vinsamlegast láttu vita í pósti til</p>
      <a href="mailto:taeknistjori@hannesarholt.is">taeknistjori@hannesarholt.is</a>
    </main>
  );
};

export default custom404;
