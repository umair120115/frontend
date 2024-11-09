import api from "../api"
import { useEffect,useState } from "react"
import '../styles/FriendRequestList.css'
function FriendRequest(){
    const [requests,setRequests]=useState([])
    useEffect(() => {
        // Simulating a fetch call with hardcoded user data
        const fetchRequests = async () => {
        
        const res = await api.get('/hadith/requests/').then((res)=>res.data).then((data)=>{
            setRequests(data);
            console.log(data);
        })
        };
        
        fetchRequests();
      }, [requests]);
    // const res = api.get('/hadith/requests/').then((res)=>res.data).then((data)=>{
    //     setRequests(data);
    //     console.log(data)
    // })
    function handleSendFriendRequest(request_id){
         
        api.post(`/hadith/accept_request/`,{request_id:request_id}).then((res)=>alert(res.status))
    }
    function handleDeleteFriendRequest(request_id){
        api.post(`/hadith/delete_request/`,{request_did:request_id}).then((res)=>alert(res.status))
    }


    return <>
   <div><h3 style={{textAlign:"center"}}>List of Requests</h3></div>
   {requests.map(request => (
                <li key={request.id} className="friend-request-item">
                    <p className="request-message">{request.sender} has sent you a friend request</p>
                    <div className="button-group">
                        <button 
                            className="add-friend-btn" 
                            onClick={() => handleSendFriendRequest(request.id)}
                        >
                            Add Friend
                        </button>
                        <button 
                            className="delete-request-btn" 
                            onClick={() => handleDeleteFriendRequest(request.id)}
                        >
                            Delete Request
                        </button>
                    </div>
                </li>

   ))}
   
   
   
   
   
   
   </>
}
export default FriendRequest