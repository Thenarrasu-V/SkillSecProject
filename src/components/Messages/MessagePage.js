import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './../common/Navbar'; // Ensure this component exists
import './Messagepage.css';

const MessagePage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const API_URL = 'http://localhost:8080/api/msg'; // Replace with your API endpoint
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user ? user.id : 'Anonymous'; // Default to 'Anonymous' if no user is found

  // Fetch messages on component mount
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(API_URL + "/get-all");
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  // Handle new message post
  const handlePostMessage = async () => {
    if (!newMessage.trim()) return; // Avoid posting empty messages

    try {
      const response = await axios.post(API_URL + "/add", {
        userId, // Include the userId in the message post
        message: newMessage,
      });
      setMessages([...messages, response.data]); // Update the message list
      setNewMessage(''); // Clear input field
    } catch (error) {
      console.error('Error posting message:', error);
    }
  };

  return (
    <div className="mes-dashboard">
      <Navbar />
      <section className="mes-hero1">
        <div className="mes-hero-content">
          <h2 className="mes-hero-title">Message Board</h2>
          <p className="mes-hero-text">
            Share your thoughts or view messages from the community.
          </p>

          <div className="message-list">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${Number(msg.userId) === Number(userId) ? 'user-message' : 'other-message'}`}
                >
                  {msg.message}
                  {console.log(userId === msg.userId)}
                </div>
              ))
            ) : (
              <p>No messages yet.</p>
            )}
          </div>
          <div className="mes-message-input">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handlePostMessage}>Send</button>
          </div>
        </div>
      </section>
      <footer className="mes-footer">
        <p>© 2024 SkillSec. All Rights Reserved.</p>
        <div className="mes-footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default MessagePage;
