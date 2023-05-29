import React, { useState } from 'react';

const Conversation = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  
  const handleSendMessage = () => {
    setMessages([...messages, inputValue]);
    setInputValue('');
  }
  
  return (
    <div className="conversation">
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className="message">{message}</div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite sua mensagem"
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default Conversation;
