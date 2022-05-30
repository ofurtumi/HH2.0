import { FormEvent, useState } from "react";

const Form = () => {
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
    console.log('content --> ', content)
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nafn</label>
        <input
          placeholder="Þitt nafn"
          value={name}
          type="text"
          name="name"
          id="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="message">Skilaboð</label>
        <textarea
          placeholder="Þín skilaboð"
          value={message}
          name="message"
          id="message"
          required
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Senda Skilaboð</button>
      </form>
    </main>
  );
};

export default Form;
