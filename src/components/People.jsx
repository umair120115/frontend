import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import '../styles/UsersList.css'
import SearchComponent from './SearchUser';

function People(){
    const [users, setUsers] = useState([]);
    const navigate= useNavigate();
    // Example of fetching users data (you can replace with your actual API call)
useEffect(() => {
//     // Simulating a fetch call with hardcoded user data
    const fetchUsers = async () => {
//     //   const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Replace with your actual API endpoint
//     //   const data = await response.json();
//     //   setUsers(data);
    const res = await api.get('/hadith/users/').then((res)=>res.data).then((data)=>{
        setUsers(data);
    })
    };
    
    fetchUsers();
  }, [users]);





const sendFriendRequest = async (toUserId) => {
    try {
        const response = await api.post(`/hadith/request/${toUserId}/friend/`, {}, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.data.status === 'success') {
            alert('Friend request sent successfully!');
        } else {
            alert(response.data.message);
        }
    } catch (error) {
        console.error('Error sending friend request:', error);
        alert('An error occurred while sending the friend request.');
    }
};


  
  // Conditional rendering in case of no data
  if (users.length === 0) {
    return <p>Loading users...</p>;
  }
    return <>
    

<SearchComponent/>


<div className="user-list-container">
            <h2>List of Users</h2>
            <ul className="user-list">
                {users.map((user)=>(
                    <li key={user.id} className="user-item">
                    <h3 className="user-name">{user.Name}</h3>
                    <p className="user-info">Email: {user.email}</p>
                    <p className="user-info">Username: {user.username}</p>
                    <button 
                        className="add-friend-btn" 
                        onClick={() => sendFriendRequest(user.id)}
                    >
                        Add Friend
                    </button>
                </li>
                ))}
            </ul>
           
        </div>

    
    
    
    
    
    </>

}
export default People