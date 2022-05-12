import { PrismicRichText } from "@prismicio/react";
import React from "react";

const Mynd = ({ slice }: { slice: any }) => {
  if (slice.slice_type === "default") {
    return (
      <section>
        <img
          src={slice.primary.image.url}
          alt={
            slice.primary.image.alt ?? "einhver gleymdi að setja alt texta :/"
          }
        />
      </section>
    );
  } else
    return (
      <section>
        <img
          src={slice.primary.image.url}
          alt={
            slice.primary.image.alt ?? "einhver gleymdi að setja alt texta :/"
          }
        />
        <PrismicRichText field={slice.primary.imageText} />
        {/* <p>{slice.primary.imageText}</p> */}
      </section>
    );
};

export default Mynd;
