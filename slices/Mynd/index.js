import React from "react";

const Mynd = ({ slice }) => (
  <img src={slice.primary.image.url} alt={slice.primary.image.alt ?? "einhver gleymdi að setja alt texta :/"} />
);

export default Mynd;
