// src/components/Chat.js
import React, { useState } from 'react';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    setMessages([...messages, { text: inputText, sender: 'user' }]);
    setInputText('');
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{`${message.sender}: ${message.text}`}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbox;
