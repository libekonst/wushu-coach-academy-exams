const { v4: uuidv4 } = require("uuid");

function parseCourse(courseData) {
  const trimmedData = courseData.trim();

  const [title, ...questionsData] = trimmedData.split("\n\n");
  const questions = questionsData.map((questionData) => {
    const [text, ...optionsData] = questionData.split("\n");
    const options = optionsData.map((optionData) => {
      const isCorrect = optionData.startsWith("+");
      const text = optionData.replace(/^[-+]\s*/, "");

      return { id: uuidv4(), text, isCorrect };
    });
    return { id: uuidv4(), text, options };
  });
  return { title, id: uuidv4(), questions };
}

module.exports.parseCourse = parseCourse;
