import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import '../styles/chat.css';
import Header from "./Header";

const ChatRoom = () => {
    const { roomName, username } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const chatSocket = useRef(null);

    useEffect(() => {
        chatSocket.current = new WebSocket(`ws://localhost:8000/ws/chat/${roomName}/`);

        chatSocket.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, data]);
        };

        chatSocket.current.onclose = () => {
            console.error("Chat socket closed unexpectedly");
        };

        return () => {
            chatSocket.current.close();
        };
    }, [roomName]);

    const sendMessage = () => {
        if (newMessage.trim() !== "") {
            chatSocket.current.send(JSON.stringify({
                'message': newMessage,
                'sender': username,
                'thread_name': roomName
            }));
            setNewMessage("");
        }
    };

    return (
        <>
        <Header/>
        <div className="chat-room">
            <h2>Chat Room: {roomName}</h2>
            <div className="messages">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`message ${msg.sender === username ? 'my-message' : 'other-message'}`}
                    >
                        <p>{msg.message}</p>
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div></>
    );
};

export default ChatRoom;
