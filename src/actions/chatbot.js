import axios from "axios";

class ChatBotService {
  static async sendMessage(question) {
    try {
      const response = await axios.post(
        "https://chatbot-production-d3ac.up.railway.app/chat-bot",
        {
          question,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error sending message:", error);
      throw new Error("Failed to send message.");
    }
  }
}

export default ChatBotService;
