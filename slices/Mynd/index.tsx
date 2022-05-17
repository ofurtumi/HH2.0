import { PrismicRichText } from "@prismicio/react";
import styles from "../../styles/Slices.module.css";

const Mynd = ({ slice }: { slice: any }) => {
  if (slice.variation === "default") {
    console.log("default --> ");
    return (
      <section className={styles.imgVilla}>
        <img
          src={slice.primary.image.url}
          alt={
            slice.primary.image.alt ?? "einhver gleymdi að setja alt texta :/"
          }
        />
      </section>
    );
  } // * case ef mynd á að hafa texta við hliðiná sér
  else
    return (
      <section className={styles.imgPrison}>
        {slice.primary.position ? (
          <div>
            <PrismicRichText field={slice.primary.imageText} />
          </div>
        ) : null}
        <img
          src={slice.primary.image.url}
          alt={
            slice.primary.image.alt ?? "einhver gleymdi að setja alt texta :/"
          }
        />
        {slice.primary.position ? null : (
          <div>
            <PrismicRichText field={slice.primary.imageText} />
          </div>
        )}
      </section>
    );
};

export default Mynd;
