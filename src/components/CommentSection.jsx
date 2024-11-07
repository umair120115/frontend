import { useState,useEffect } from "react";
import '../styles/CommentSection.css';
import api from "../api";

function CommentSection({ post_id }){
    // for getting comments on the post
    const [comments,setComments]=useState([])
    // /for posting comment 
    const [comment,setComment]=useState("")
    const [visibleCount, setVisibleCount] = useState(5); // Initial limit for visible comments
     // Show only the comments up to the visibleCount
    const visibleComments = comments.slice(0, visibleCount);
    const loadMoreComments = () => {
        setVisibleCount(prevCount => prevCount + 5); // Increase count by 5 or any number you prefer
    };
    
    useEffect(()=>{
        const get_comments= ()=>{
            
                const res =  api.get(`/hadith/post/${post_id}/comment/`).then((res)=>res.data).then((data)=>{
                    setComments(data);
                })
           
    
        };
        
        get_comments();
    },[comments])

   
    // const get_comments=async ()=>{
    //     try{
    //         const res = await api.get(`/hadith/post/${post_id}/comment/`).then((res)=>res.data).then((data)=>{
    //             setComments(data);
    //         })
    //     }
    //     catch(error){
    //         alert({'error':'Something went wrong'})
    //     }

    // }
    
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
        api.post(`/hadith/post/${post_id}/comment/`,{comment})
        }
        catch(error){
            alert({'error':'Something went wrong in posting comment'})
        }
        
        
    }
    return <>

<div className="comment-section-container">
            <div className="comment-header">
                <h6>Comments</h6>
            </div>

            <div className="comment-list">
                {visibleComments.map((comment, index) => (
                    <div key={index} className="comment-item">
                        <p className="comment-text">{comment.comment}</p>
                        <small className="comment-author">by {comment.author}</small>
                    </div>
                ))}
                {visibleCount < comments.length && (
                    <button onClick={loadMoreComments} className="load-more-btn">
                        Load More
                    </button>
                )}
            </div>

            <div className="comment-form-container">
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="form-input"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add new comment..."
                    ></textarea>
                    <button type="submit" className="submit-btn">
                        Comment
                    </button>
                </form>
            </div>
        </div></>
    
    
    
}
export default CommentSection