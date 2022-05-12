import React from "react";
import { PrismicRichText } from "@prismicio/react";

const Titill = ({ slice }: { slice: any }) => {
  return (
    <section>
      <PrismicRichText field={slice.primary.title} />
    </section>
  );
};

export default Titill;
