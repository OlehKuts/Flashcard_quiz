import { v4 as uuidv4 } from "uuid";

export const questions = [
  {
    id: uuidv4(),
    question: "7+4?",
    correct: "11",
    options: ["10", "12", "13", "11"],
  },
  {
    id: uuidv4(),
    question: "5+5?",
    correct: "10",
    options: ["11", "9", "55", "10"],
  },
];
