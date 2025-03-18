import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function VoiceNavigation() {
  const [isListening, setIsListening] = useState(false);
  const [message, setMessage] = useState("Click 'Start Listening' to begin.");
  const recognitionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      setMessage("⚠️ Your browser does not support voice recognition.");
      return;
    }

    recognitionRef.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const recognition = recognitionRef.current;

    recognition.continuous = true;
    recognition.lang = "en-US";

    recognition.onstart = () => setMessage("🎤 Listening... Say 'homepage', 'home page', 'loder', or 'pop up'.");
    recognition.onerror = () => setMessage("❌ Error occurred. Try again.");
    
    recognition.onresult = (event) => {
      const command = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
      console.log("Recognized Command:", command); // Debugging purpose
      setMessage(`✅ Heard: "${command}"`);

      const routes = {
        "homepage": "/",
        "home page": "/",
        "loader": "/loderui",
        "pop up": "/popupmodal",
      };

      const matchedRoute = Object.keys(routes).find((key) => command.includes(key));

      if (matchedRoute) {
        setMessage(`🔄 Navigating to ${matchedRoute}...`);
        setTimeout(() => navigate(routes[matchedRoute]), 500);
      } else {
        setMessage("❌ Command not recognized. Try again.");
      }
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => recognition.stop();
  }, [isListening, navigate]);

  return (
    <div className="p-4 text-center listenbox">
      <p>{message}</p>
      <button 
        className={`px-4 py-2 rounded ${isListening ? "bg-red-500" : "bg-green-500"} text-white`} 
        onClick={() => setIsListening(!isListening)}
      >
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
    </div>
  );
}
