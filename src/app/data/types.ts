type UUID = string;

export type Course = {
  id: UUID;
  title: string;
  // description: string;
  questions: Question[];
};

export type Question = {
  id: UUID;
  text: string;
  options: Option[];
  // answer?: Option;
};

export type Option = {
  id: UUID;
  text: string;
  isCorrect: boolean;
};
