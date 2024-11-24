import React, { useState } from "react";

const App = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  // Check if SpeechRecognition is available
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    return <h1>Your browser does not support Speech Recognition</h1>;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  const startListening = () => {
    setIsListening(true);
    recognition.start();
    recognition.onresult = (event) => {
      const lastResult = event.results[event.results.length - 1];
      if (lastResult.isFinal) {
        setTranscript((prev) => `${prev} ${lastResult[0].transcript}`.trim());
      }
    };
    recognition.onerror = (event) => {
      console.error("Speech Recognition Error: ", event.error);
    };
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Speech Recognition App</h1>
      <button
        onClick={isListening ? stopListening : startListening}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          margin: "10px",
          backgroundColor: isListening ? "red" : "green",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        <strong>Transcript:</strong> {transcript}
      </p>
    </div>
  );
};

export default App;
