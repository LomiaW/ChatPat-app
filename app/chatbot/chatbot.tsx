import { useState } from "react";

export function Chatbot() {
  const [selectedScenario, setSelectedScenario] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [conversationStarted, setConversationStarted] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleStart = () => {
    if (!selectedScenario || !selectedLevel) return;
    setConversationStarted(true);
    setMessages([
      {
        text: (() => {
          const scenario = scenarios.find(s => s.id === selectedScenario);
          const level = levels.find(l => l.id === selectedLevel);
          const scenarioLabel = scenario ? scenario.label : "Unknown scenario";
          const levelLabel = level ? level.label : "Unknown level";
          return `Let's practice "${scenarioLabel}" for ${levelLabel}.`;
        })(),
        sender: "bot",
      },
    ]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          // TODO: Replace with real bot logic
          text: `Sure! Sounds good! Let's continue our conversation practice.`,
        }
      ]);
    }, Number(import.meta.env.VITE_BOT_TIME_OUT));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">ChatPat Conversation Practice</h1>
      {!conversationStarted ? (
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Select Scenario</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={selectedScenario}
              onChange={(e) => setSelectedScenario(e.target.value)}
            >
              <option value="">Choose...</option>
              {scenarios.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Select School Level</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="">Choose...</option>
              {levels.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
          <button
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold disabled:opacity-50"
            disabled={!selectedScenario || !selectedLevel}
            onClick={handleStart}
          >
            Start Conversation Practice
          </button>
        </div>
      ) : (
        <div>
          <div className="h-64 overflow-y-auto border rounded mb-4 p-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <span
                  className={`px-3 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              className="flex-1 border rounded px-3 py-2"
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded font-semibold"
              onClick={handleSend}
              disabled={!input.trim()}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const scenarios = [
  { id: "greetings", label: "Greetings" },
  { id: "askingDirections", label: "Asking Directions" },
  { id: "makingFriends", label: "Making Friends" },
  { id: "schoolSubjects", label: "School Subjects" },
];

const levels = [
  { id: "kindergarten", label: "Kindergarten" },
  { id: "grade1", label: "Grade 1" },
  { id: "grade2", label: "Grade 2" },
  { id: "grade3", label: "Grade 3" },
  { id: "grade4", label: "Grade 4" },
  { id: "grade5", label: "Grade 5" },
];