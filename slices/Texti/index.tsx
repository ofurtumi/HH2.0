import { PrismicRichText } from "@prismicio/react";
import styles from "../../styles/Slices.module.css"

const Texti = ({ slice }: { slice: any }) => {
  return (
    <section className={styles.textPrison} style={{textAlign: slice.primary.centered ? 'center' : 'start'}}>
      <PrismicRichText field={slice.primary.description} />
    </section>
  );
};

export default Texti;
