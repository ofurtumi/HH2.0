import React, { FormEvent, useState } from "react";
import { PrismicRichText } from "@prismicio/react";

const IndexForm = ({ slice }: { slice: any }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // * skilgreining á data strúktúr, sjúklega flókin ég veit
    const data = {
      name,
      message,
    };

    // * kall í apann
    console.log("data --> ", data);

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const content = await response.json();

    // alert(content.data.tableRange)
    console.log("content --> ", content);
  };
  return (
    <section>
      <form onSubmit={slice.primary.Endpoint}></form>
    </section>
  );
};

export default IndexForm;
