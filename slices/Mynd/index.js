import React from "react";

const Mynd = ({ slice }) => (
    // todo : setja inn tékk hvort dót sé myndMeðTexta variation eða ekkii  
      <img src={slice.primary.image.url} alt={slice.primary.image.alt ?? "einhver gleymdi að setja alt texta :/"} />
    )
  }
);

export default Mynd;
