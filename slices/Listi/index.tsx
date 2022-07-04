import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { asText } from "@prismicio/helpers";
import styles from "../../styles/Slices.module.css";

const Listi = ({ slice }: { slice: any }) => {
  const variation: string = slice.variation;

  switch (variation) {
    case "default":
      return (
        <div className={styles.listPrison}>
          <PrismicRichText field={slice.primary.title} />
          {slice.items.map((item: any, i: number) => {
            return (
              <details>
                <summary>
                    {/* <PrismicRichText field={item.title} /> */}
                    {asText(item.title)}
                </summary>
                <p>
                  <PrismicRichText field={item.content} />
                </p>
              </details>
            );
          })}
        </div>
      );

      case "time": 
      return (
        <div className={styles.listPrison}>
          <PrismicRichText field={slice.primary.title} />
          {slice.items.map((item: any, i: number) => {
            return (
              <details>
                <summary>
                    {/* <PrismicRichText field={item.title} /> */}
                    {asText(item.title)}
                </summary>
                <p>{item.date}</p>
                <p>
                  <PrismicRichText field={item.content} />
                </p>
              </details>
            );
          })}
        </div>
      );

    default:
      break;
  }
};

export default Listi;
