// src/components/pages/MessagePage.js
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../common/Navbar';
import socket from './socket';
import './Messagepage.css';

const MessagePage = () => {
  const [message, setMessage] = useState('');
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'Kristen J.',
      lastMessage: 'Hi Ram, Are you currently exploring new...',
      date: 'Oct 26',
      unread: true,
      messages: [
        { text: 'Hi Ram, Are you currently exploring new cybersecurity techniques?', timestamp: '2024-10-26T10:20:00', sender: 'Kristen' },
        { text: 'Let me know if I can assist you with any questions.', timestamp: '2024-10-26T10:22:00', sender: 'Kristen' },
      ],
    },
    {
      id: 2,
      name: 'ADITYA KUMAR',
      lastMessage: 'Thanks brother 👍',
      date: 'Jul 19',
      unread: false,
      messages: [
        { text: 'Thanks brother 👍', timestamp: '2024-07-19T14:30:00', sender: 'Aditya' },
        { text: 'Anytime! Let me know if you need further help.', timestamp: '2024-07-19T14:35:00', sender: 'User' },
      ],
    },
    {
      id: 3,
      name: 'Thenarrasu Vasanthakumar',
      lastMessage: 'Sent a post',
      date: 'Jul 1',
      unread: true,
      messages: [
        { text: 'Check out this post on recent cyber threats.', timestamp: '2024-07-01T12:15:00', sender: 'Thenarrasu' },
        { text: 'Thanks! This looks interesting.', timestamp: '2024-07-01T12:18:00', sender: 'User' },
      ],
    },
    {
      id: 4,
      name: 'Jessica H.',
      lastMessage: 'I completed the course!',
      date: 'Sep 14',
      unread: true,
      messages: [
        { text: 'I completed the course! It was really helpful.', timestamp: '2024-09-14T09:00:00', sender: 'Jessica' },
        { text: 'Awesome! Congratulations 🎉', timestamp: '2024-09-14T09:05:00', sender: 'User' },
      ],
    },
    {
      id: 5,
      name: 'John D.',
      lastMessage: 'Let’s review the project tomorrow.',
      date: 'Nov 1',
      unread: false,
      messages: [
        { text: 'Let’s review the project tomorrow. Will you be available?', timestamp: '2024-11-01T14:00:00', sender: 'John' },
        { text: 'Yes, I’ll be available after 3 PM.', timestamp: '2024-11-01T14:05:00', sender: 'User' },
      ],
    },
    {
      id: 6,
      name: 'Sarah T.',
      lastMessage: 'Have you seen the new report?',
      date: 'Aug 10',
      unread: true,
      messages: [
        { text: 'Have you seen the new report on cybersecurity trends?', timestamp: '2024-08-10T08:45:00', sender: 'Sarah' },
        { text: 'Yes, it’s quite insightful.', timestamp: '2024-08-10T08:50:00', sender: 'User' },
      ],
    },
    {
      id: 7,
      name: 'Liam M.',
      lastMessage: 'Check out this tutorial.',
      date: 'Oct 5',
      unread: false,
      messages: [
        { text: 'Check out this tutorial on network security.', timestamp: '2024-10-05T17:30:00', sender: 'Liam' },
        { text: 'Looks good! Thanks for sharing.', timestamp: '2024-10-05T17:35:00', sender: 'User' },
      ],
    },
    {
      id: 8,
      name: 'Emily P.',
      lastMessage: 'Is the assignment due today?',
      date: 'Nov 8',
      unread: true,
      messages: [
        { text: 'Is the assignment due today?', timestamp: '2024-11-08T11:15:00', sender: 'Emily' },
        { text: 'Yes, by 5 PM.', timestamp: '2024-11-08T11:18:00', sender: 'User' },
      ],
    },  ]);

  const [activeConversation, setActiveConversation] = useState(conversations[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Jost:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Listen for new messages
    socket.on('receiveMessage', (newMessage) => {
      if (newMessage.conversationId === activeConversation.id) {
        setActiveConversation((prev) => ({
          ...prev,
          messages: [...prev.messages, newMessage],
        }));
      }
    });

    return () => {
      document.head.removeChild(link);
      socket.off('receiveMessage');
    };
  }, [activeConversation]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeConversation.messages]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        text: message,
        timestamp: new Date(),
        sender: 'User',
      };

      // Emit the message and update locally
      socket.emit('sendMessage', newMessage);
      const updatedMessages = [...activeConversation.messages, newMessage];
      setActiveConversation((prev) => ({
        ...prev,
        lastMessage: newMessage.text,
        date: new Date().toLocaleDateString(),
        messages: updatedMessages,
      }));
      setMessage('');

      // Update the conversations list with the latest message
      const updatedConversations = conversations.map((conv) => {
        if (conv.id === activeConversation.id) {
          return {
            ...conv,
            lastMessage: newMessage.text,
            date: new Date().toLocaleDateString(),
            messages: updatedMessages,
          };
        }
        return conv;
      });
      setConversations(updatedConversations);
    }
  };

  const handleConversationClick = (conv) => {
    setActiveConversation(conv);

    // Mark the conversation as read (set unread to false)
    const updatedConversations = conversations.map((c) => 
      c.id === conv.id ? { ...c, unread: false } : c
    );
    setConversations(updatedConversations);
  };

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="message-page">
      <Navbar />
      <section className="dash-hero1">
        <div className="dash-hero-content">
          <h2 className="dash-hero-title">Messaging</h2>
          <p className="dash-hero-text">
            Connect with experts, mentors, and fellow learners in cybersecurity. Collaborate, share insights, and expand your network.
          </p>
        </div>
      </section>

      <div className="message-page-content">
        {/* Sidebar for conversations */}
        <div className="sidebar">
          <input
            type="text"
            placeholder="Search messages"
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="conversations">
            {filteredConversations.map((conv) => (
              <div
                key={conv.id}
                className={`conversation ${activeConversation.id === conv.id ? 'active' : ''} ${conv.unread ? 'unread' : ''}`}
                onClick={() => handleConversationClick(conv)}
              >
                <div className="conversation-name">{conv.name}</div>
                <div className="last-message">{conv.lastMessage}</div>
                <div className="message-date">{conv.date}</div>
                {conv.unread && <span className="unread-indicator">•</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="chat-area">
          <div className="chat-header">
            <h2>{activeConversation.name}</h2>
          </div>
          <div className="messages">
            {activeConversation.messages.map((msg, index) => (
              <div key={index} className="message">
                <p><strong>{msg.sender}:</strong> {msg.text}</p>
                <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="message-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© 2024 SkillSec. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/about">About SkillSec</a>
          <a href="/contact">Contact Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default MessagePage;