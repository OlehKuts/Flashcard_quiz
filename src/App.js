import React, { useState } from "react";
import { FlashcardList } from "./flashcardList";
import "./styles.css";
import { questions } from "./questions";

export const App = () => {
  const allQuestions = questions;
  return (
    <>
      <FlashcardList flashcards={questions} />
    </>
  );
};
