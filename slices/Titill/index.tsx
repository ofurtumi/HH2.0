import { PrismicRichText } from "@prismicio/react";
import styles from "../../styles/Slices.module.css"

const Titill = ({ slice }: { slice: any }) => {
  return (
    <section className={styles.titlePrison} style={{textAlign: slice.primary.centered ? 'center' : 'start'}}>
      <PrismicRichText field={slice.primary.title} />
    </section>
  );
};

export default Titill;
