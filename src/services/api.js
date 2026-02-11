// src/services/api.js

export const fetchQuiz = async (studentClass, subject, lesson) => {
  const res = await fetch("http://localhost:5000/get-quiz", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      studentClass,
      subject,
      lesson,
    }),
  });

  return res.json();
};

export const fetchExplanation = async (payload) => {
  const res = await fetch("http://localhost:5000/explain-answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return res.json();
};
