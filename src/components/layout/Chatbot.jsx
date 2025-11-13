"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import ChatBotService from "../../actions/chatbot";
import TypingIndicator from "../effects/TypingIndicator";
import { motion } from "framer-motion";

const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState([
    { type: "bot", text: "Welcome! How can I help you?" },
  ]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const sendMessage = async () => {
    if (!message.trim()) return;
    const userMessage = message;
    setChatHistory((prev) => [...prev, { type: "user", text: userMessage }]);
    setMessage("");
    setLoading(true);

    try {
      const data = await ChatBotService.sendMessage(userMessage);
      setChatHistory((prev) => [...prev, { type: "bot", text: data.answer }]);
    } catch (error) {
      setChatHistory((prev) => [
        ...prev,
        { type: "bot", text: "Error sending message." },
      ]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="position-fixed bottom-0 end-0 p-3 d-flex flex-column align-items-end z-3">
      {/* Floating button */}
      <motion.div
        className="chat-bg text-white rounded-circle d-flex align-items-center justify-content-center shadow"
        style={{ width: "50px", height: "50px", cursor: "pointer" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle size={24} strokeWidth={2} className="text-white" />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chatContainer"
            className="bg-white border rounded shadow mt-2 overflow-hidden d-flex flex-column"
            initial={{ width: 50 }}
            animate={{ width: 350 }}
            exit={{
              width: 50,
              y: -10,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              key="chatContent"
              className="d-flex flex-column"
              initial={{ height: 50, opacity: 0 }}
              animate={{
                height: 400,
                opacity: 1,
                transition: { delay: 0.3, duration: 0.3, ease: "easeOut" },
              }}
              exit={{
                height: 50,
                opacity: 0,
                y: -20,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              {/* Header */}
              <div className="chat-bg text-white p-2 d-flex justify-content-between align-items-center">
                <span>Chat with AI</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn btn-sm btn-light"
                >
                  ✖
                </button>
              </div>

              {/* Chat area */}
              <div className="p-3 flex-grow-1 overflow-auto">
                {chatHistory.map((msg, index) => (
                  <div
                    key={index}
                    className={`d-flex ${
                      msg.type === "user"
                        ? "justify-content-end"
                        : "justify-content-start"
                    } mb-2`}
                  >
                    <div
                      className={`p-2 rounded ${
                        msg.type === "user"
                          ? "chat-bg text-white"
                          : "bg-light text-dark border"
                      }`}
                      style={{ maxWidth: "80%" }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="d-flex justify-content-start mb-2">
                    <div
                      className="p-2 rounded bg-light border text-dark d-flex align-items-center"
                      style={{ maxWidth: "80%" }}
                    >
                      <TypingIndicator />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input area */}
              <div className="p-2 border-top d-flex align-items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="form-control"
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  disabled={loading}
                  className="btn chat-bg ms-2 text-white send"
                >
                  {loading ? "..." : "Send"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
