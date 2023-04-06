import { parseCourse } from "./parseCourse";
import { Course } from "./types";

jest.mock("uuid", () => ({
  v4: jest.fn(() => "mock-uuid"),
  v3: jest.fn(() => "mock-uuid"),
  v2: jest.fn(() => "mock-uuid"),
  v1: jest.fn(() => "mock-uuid"),
}));

describe("parseCourse", () => {
  const courseData = `
Geography

What is the capital of Japan?
- Okinawa
- Kyoto
- Osaka
+ Tokyo

What is the highest mountain in Africa?
+ Kilimanjaro
- Mount Everest
- Mont Blanc
- Mount Kenya

Which country has the longest coastline in the world?
- Russia
- Canada
+ Australia
- United States
`;

  const expectedCourse: Course = {
    title: "Geography",
    id: expect.any(String),
    questions: [
      {
        id: expect.any(String),
        text: "What is the capital of Japan?",
        options: [
          { id: expect.any(String), text: "Okinawa", isCorrect: false },
          { id: expect.any(String), text: "Kyoto", isCorrect: false },
          { id: expect.any(String), text: "Osaka", isCorrect: false },
          { id: expect.any(String), text: "Tokyo", isCorrect: true },
        ],
      },
      {
        id: expect.any(String),
        text: "What is the highest mountain in Africa?",
        options: [
          { id: expect.any(String), text: "Kilimanjaro", isCorrect: true },
          { id: expect.any(String), text: "Mount Everest", isCorrect: false },
          { id: expect.any(String), text: "Mont Blanc", isCorrect: false },
          { id: expect.any(String), text: "Mount Kenya", isCorrect: false },
        ],
      },
      {
        id: expect.any(String),
        text: "Which country has the longest coastline in the world?",
        options: [
          { id: expect.any(String), text: "Russia", isCorrect: false },
          { id: expect.any(String), text: "Canada", isCorrect: false },
          { id: expect.any(String), text: "Australia", isCorrect: true },
          { id: expect.any(String), text: "United States", isCorrect: false },
        ],
      },
    ],
  };

  it("should parse the course data string into a Course object", () => {
    const result = parseCourse(courseData);

    expect(parseCourse(courseData)).toEqual(expectedCourse);
  });
});
