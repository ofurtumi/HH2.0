import React from "react";
import styles from "../../styles/Slices.module.css";

const MargarMyndir = ({ slice }: { slice: any }) => (
  <section className={styles.multiImagePrison}>
    {slice.items.map((item: any, i: number) => (
      <img src={item.image.url} alt={item.image.alt} />
    ))}
  </section>
);

export default MargarMyndir;
