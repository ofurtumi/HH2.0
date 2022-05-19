import { PrismicRichText } from "@prismicio/react";
import styles from "../../styles/Slices.module.css";
import { PrismicLink } from "@prismicio/react";
import Link from "next/link";

const Texti = ({ slice }: { slice: any }) => {
  console.log("slice --> ", slice);
  console.log("variation --> ", slice.variation);
  return (
    <section
      className={styles.textPrison}
      style={{ textAlign: slice.primary.centered ? "center" : "start" }}
    >
      {slice.variation == "link" ? (
        <a href={slice.primary.link}>
          <PrismicRichText field={slice.primary.description} />
        </a>
      ) : (
        <PrismicRichText field={slice.primary.description} />
      )}
    </section>
  );
};

export default Texti;
