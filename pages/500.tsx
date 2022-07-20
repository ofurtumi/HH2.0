import styles from "../styles/errors.module.css"

const custom500 = () => {
    return (
        <main className={styles.prison}>
          <h1>500</h1>
          <h2>upp kom villa á servernum</h2>
          <p>ef þessi villa heldur áfram að koma upp vinsamlegast láttu vita í pósti til</p>
          <a href="mailto:taeknistjori@hannesarholt.is">taeknistjori@hannesarholt.is</a>
        </main>
      );
}

export default custom500;