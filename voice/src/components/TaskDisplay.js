import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function TaskDisplay() {
  const [actionLog, setActionLog] = useState([]);
  const [image, setImage] = useState(null);
  const [gameMessage, setGameMessage] = useState("Say a command to start.");
  const { transcript, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <p>Browser does not support speech recognition.</p>;
  }

  const handleVoiceCommand = () => {
    let action = "";
    let commandImage = null;
    let feedbackMessage = "";

    // Handle specific voice commands
    if (transcript.toLowerCase().includes("build a chair")) {
      action = "Building a chair.";
      commandImage = "chair.jpg";  // Image path in 'public' folder
      feedbackMessage = "Let's start by measuring the wood for the chair!";
    } else if (transcript.toLowerCase().includes("build a table")) {
      action = "Building a table.";
      commandImage = "table.jpg";  // Image path in 'public' folder
      feedbackMessage = "Start by cutting the wood for the table!";
    } else if (transcript.toLowerCase().includes("measure")) {
      action = "Measured the wood.";
      feedbackMessage = "Great! Now, let's cut it.";
    } else if (transcript.toLowerCase().includes("cut")) {
      action = "Cut the wood.";
      feedbackMessage = "Well done! Ready to drill holes.";
    } else if (transcript.toLowerCase().includes("assemble")) {
      action = "Assembled the parts.";
      feedbackMessage = "Nice! Your project is coming together.";
    } else {
      action = "Unknown command";
      feedbackMessage = "Try saying 'build a chair' or 'cut the wood'.";
    }

    // Log the command and action
    setActionLog([...actionLog, { transcript, action }]);
    setImage(commandImage);
    setGameMessage(feedbackMessage);
    resetTranscript(); // Clear the transcript after handling
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", textAlign: "center" }}>
      <h1>BuildIt Pro</h1>
      <h2>Carpentry Task</h2>

      {/* Voice control buttons */}
      <button onClick={SpeechRecognition.startListening}>Start Listening</button>
      <button onClick={handleVoiceCommand}>Submit Command</button>
      <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>

      {/* Show transcript */}
      <p>
        <strong>Transcript:</strong> {transcript || "Say something..."}
      </p>

      {/* Display action log */}
      <div>
        <h3>Actions:</h3>
        <ul>
          {actionLog.map((log, index) => (
            <li key={index}>
              <strong>Command:</strong> {log.transcript} <br />
              <strong>Action:</strong> {log.action}
            </li>
          ))}
        </ul>
      </div>

      {/* Game Message */}
      <div>
        <h3>{gameMessage}</h3>
      </div>

      {/* Display image based on command */}
      {image && <img src={process.env.PUBLIC_URL + /images/${image}} alt="Task" style={{ width: "300px", marginTop: "20px" }} />}
    </div>
  );
}

export default TaskDisplay;