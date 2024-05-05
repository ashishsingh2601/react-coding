import React from "react";
import { useState } from "react";
import Card from "./Card";

const CardForm = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      cards.some(
        (card) => card.company.trim() === "" || card.job_title.trim() === ""
      )
    ) {
      setSubmissionError(true);
    } else {
      console.log("Submitted: ", cards);
    }
  };

  const handleChange = (index, field, value) => {
    const updatedCards = [...cards];
    updatedCards[index][field] = value;
    setCards(updatedCards);

    if (field === "company" && value !== "") {
      setError(false);
    }

    if (
      cards.every(
        (card) => card.company.trim() !== "" && card.job_title.trim() !== ""
      )
    ) {
      setSubmissionError(false);
    }
  };

  const handleAddCard = () => {
    if (!cards.length) {
      setCards([...cards, { company: "", job_title: "" }]);
    } else {
      if (cards.every((card) => card.company.trim() !== "")) {
        setCards([...cards, { company: "", job_title: "" }]);
      } else {
        setError(true);
      }
    }
  };


  return (
    <main>
      <button onClick={handleAddCard}>Add Card</button>

      <form onSubmit={handleSubmit}>
        {cards &&
          cards.map((card, index) => {
            return (
              <Card
                key={index}
                index={index}
                onChange={handleChange}
                company={card.company}
                jobTitle={card.job_title}
                isError={error && card.company.trim() === ""}
                isSubmissionError={
                  submissionError &&
                  (card.company.trim() === "" || card.job_title.trim() === "")
                }
              />
            );
          })}
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default CardForm;
