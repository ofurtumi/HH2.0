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
            if (item.isContent) {
              return (
                <details key={i}>
                  <summary>
                    {/* <PrismicRichText field={item.title} /> */}
                    {asText(item.title)}
                  </summary>
                  <p>
                    <PrismicRichText field={item.content} />
                  </p>
                </details>
              );
            } else {
              return <p key={i}>{asText(item.title)}</p>;
            }
          })}
        </div>
      );

    case "time":
      return (
        <div className={styles.listPrison}>
          <PrismicRichText field={slice.primary.title} />
          {slice.items.map((item: any, i: number) => {
            let dagur = new Date(item.date).toUTCString().substring(5,16)
            console.log('dagur --> ', dagur)
            if (item.isContent) {
              return (
                <details key={i}>
                  <summary>
                    {/* <PrismicRichText field={item.title} /> */}
                    {asText(item.title)}
                  </summary>
                  <p>{dagur}</p>
                  <p>
                    <PrismicRichText field={item.content} />
                  </p>
                </details>
              );
            } else {
              return (
                <div className={styles.listCell} key={i}>
                  <p>{asText(item.title)}</p><p>{dagur}</p>
                </div>
              );
            }
          })}
        </div>
      );

    default:
      return (
        <p>ass</p>
      )
  }
};

export default Listi;
