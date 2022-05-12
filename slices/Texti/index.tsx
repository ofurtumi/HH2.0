import React from "react";
import { PrismicRichText } from "@prismicio/react";

const Texti = ({ slice }: { slice: any }) => {
  return (
    <section>
      <PrismicRichText field={slice.primary.description} />
    </section>
  );
};

export default Texti;
