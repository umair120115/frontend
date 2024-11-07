import api from "../api"
import Header from '../components/Header'
import { useState,useEffect } from "react"
import '../styles/FriendList.css'
import ChatRoom from "./Chat";
import { useNavigate } from 'react-router-dom';
function Friends(){
    const navigate=useNavigate();
    const [friends,setFriends]=useState([])
    useEffect(()=>{
        get_friends();


    },[friends])
    async function get_friends(){
        const res= await api.get('/hadith/friends/').then((res)=>res.data).then((data)=>{
            setFriends(data);
        })
    }
    function handleMessage(friend_id,username){
        navigate(`/chat/${friend_id}/${username}`);
       
    }
    return <>
    <Header/>
    <div className="friend-list">
      <h3>Your Friends</h3>
      <ul>
        {friends.map((friend) => (
          <li key={friend.friend.id} className="friend-item">
            <div className="friend-details">
              <span className="friend-name">{friend.friend.Name}</span>
              <button 
                onClick={() => handleMessage(friend.friend.id,friend.friend.username)} 
                className="message-button"
              >
                Message
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    
    </>
}
export default Friends