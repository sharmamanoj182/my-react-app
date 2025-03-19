import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VoiceNavigation() {
  const [message, setMessage] = useState("🎤 Listening... Say 'health insurance', 'car insurance', or 'bike insurance'.");
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

    recognition.onstart = () => setMessage("🎤 Listening... Say 'health insurance', 'car insurance', or 'bike insurance'.");
    recognition.onerror = () => setMessage("❌ Error occurred. Try again.");
    
    recognition.onresult = (event) => {
      const command = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
      console.log("Recognized Command:", command); // Debugging purpose
      setMessage(`✅ Heard: "${command}"`);

      const routes = {
        "health insurance": "/",
        "car insurance": "/loderui",
        "bike insurance": "/popupmodal",
      };

      const matchedRoute = Object.keys(routes).find((key) => command.includes(key));

      if (matchedRoute) {
        setMessage(`🔄 Navigating to ${matchedRoute}...`);
        setTimeout(() => navigate(routes[matchedRoute]), 100);
      } else {
        setMessage("❌ Please speak again.");
      }
    };

    // Start listening automatically
    recognition.start();

    return () => {
      recognition.stop();
    };
  }, [navigate]);

  return (
    <div className="p-4 text-center listenbox">
      <p>{message}</p>
    </div>
  );
}
