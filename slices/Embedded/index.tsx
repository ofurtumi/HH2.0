import React from "react";
import styles from "../../styles/Slices.module.css"

const Embedded = ({ slice }:{slice:any}) => (
  <section className={styles.embedContainer}>
      <div dangerouslySetInnerHTML={{ __html: slice.primary.content.html }} />
  </section>
);

export default Embedded;
