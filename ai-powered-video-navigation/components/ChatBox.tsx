// File: components/ChatBox.tsx
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

interface ChatBoxProps {
  videoId: string | string[] | undefined;
}

let socket: any;

const ChatBox = ({ videoId }: ChatBoxProps) => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<string[]>([]);

  useEffect(() => {
    // Connect to your backend WebSocket server
    socket = io('http://localhost:8000'); // Adjust the URL if needed

    socket.on('connect', () => {
      console.log('Connected to chat server');
    });

    socket.on('chat message', (msg: string) => {
      setChat((prevChat) => [...prevChat, msg]);
    });

    // Clean up connection on unmount
    return () => socket.disconnect();
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('chat message', { videoId, message });
      setMessage('');
    }
  };

  return (
    <div className="border p-4 my-4">
      <h2 className="text-xl font-semibold mb-2">Chat with Video</h2>
      <div className="mb-2 max-h-60 overflow-y-auto">
        {chat.map((msg, index) => (
          <div key={index} className="p-2 border-b">
            {msg}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-grow p-2 border border-gray-300 rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask a question..."
        />
        <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded ml-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
