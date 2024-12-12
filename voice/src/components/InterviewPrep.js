import React, { useState, useEffect } from "react";
import AnswerInput from "./AnswerInput"; // Assuming you have this component for user input
import interviewService from "../services/interviewService"; // Import the interviewService

const InterviewPrep = () => {
  const [question, setQuestion] = useState(interviewService.getRandomQuestion()); // Start with a random question
  const [userAnswer, setUserAnswer] = useState(""); // Store user answer
  const [answerHistory, setAnswerHistory] = useState([]); // History of answers (for feedback)
  const [questionCount, setQuestionCount] = useState(0); // Track number of questions answered
  const [feedback, setFeedback] = useState(""); // To store feedback after 5 questions

  // Function to speak out a given text
  const speakText = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  // Speak the question when it changes
  useEffect(() => {
    if (question?.question) {
      speakText(Here is your question: ${question.question});
    }
  }, [question]);

  const handleAnswerSubmit = () => {
    // Check if the answer is correct
    const isCorrect = interviewService.checkAnswer(userAnswer, question.question);

    // Store the user's answer and evaluate it
    setAnswerHistory([
      ...answerHistory,
      { question: question.question, userAnswer, isCorrect },
    ]);

    // Provide feedback based on the answer
    if (isCorrect) {
      setFeedback("Correct answer! Well done.");
      speakText("Correct answer! Well done.");
    } else {
      setFeedback("Incorrect answer. Here is a hint: " + question.answer);
      speakText("Incorrect answer. Here is a hint.");
    }

    // Get the next question
    setQuestion(interviewService.getRandomQuestion());
    setUserAnswer(""); // Clear the previous answer

    // After 5 questions, provide feedback
    if (questionCount + 1 === 5) {
      provideFeedback();
      setQuestionCount(0); // Reset for the next set of 5 questions
    } else {
      setQuestionCount(questionCount + 1); // Increment the question count
    }
  };

  const provideFeedback = () => {
    const correctAnswers = answerHistory.filter((item) => item.isCorrect).length;
    const feedbackMessage = You answered ${correctAnswers} out of 5 questions correctly.;

    if (correctAnswers === 5) {
      setFeedback("Excellent! Keep up the good work!");
      speakText("Excellent! You got all the questions correct. Keep up the great work!");
    } else if (correctAnswers >= 3) {
      setFeedback("Good job! You're doing well, but try to improve.");
      speakText("Good job! You did well, but there is still room for improvement. Keep practicing!");
    } else {
      setFeedback("Don't worry, practice makes perfect. Keep trying!");
      speakText("Don't worry, practice makes perfect. Keep trying, and you'll improve over time!");
    }
  };

  return (
    <div className="interview-prep">
      <h2>Interview Preparation</h2>
      <div className="question">
        <h3>Question:</h3>
        <p>{question.question}</p> {/* Render the question here */}
      </div>
      <AnswerInput answer={userAnswer} setAnswer={setUserAnswer} />
      <button onClick={handleAnswerSubmit}>Submit Answer</button>

      {feedback && (
        <div className="feedback">
          <h3>Feedback:</h3>
          <p>{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default InterviewPrep;