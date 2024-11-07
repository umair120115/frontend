import api from "../api"
import { useState,useEffect } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CommentSection from "./CommentSection";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Navigate } from "react-router-dom";
import PostUserProfile from "./PostUserProfile";
import { autocompleteClasses } from "@mui/material";
function PostCard(){
  const [posts,setPosts]=useState([])
  const [liked, setLiked] = useState(false);

  const handleLike = async (post) => {
    setLiked(!liked);
    // You can add a function here to handle the like logic
    try{
      api.post(`/hadith/posts/${post.id}/like_post/`,);}
      catch(error){
        alert(error)
      }
  };
  useEffect(()=>{
    
    const getposts= async ()=>{
      const res= await api.get('/hadith/posts/').then((res)=>res.data).then((data)=>{
        setPosts(data);
        console.log(data);
    });
    } ;

    
  // Calling Posts get api
  getposts();
  
  }
    
    
    ,[posts])
  
  
  function UserProfile(user_id){
    return <PostUserProfile user_id={user_id}/>
  }
  


    return <>
  {posts.map((post)=>{return <>
    <Card sx={{ maxWidth: 800 ,maxHeight:800}}>
      <CardContent>
        <Typography style={{}}><strong ><button onClick={()=>UserProfile(post.user.id)}>{post.user.username}</button></strong></Typography>
      </CardContent>
      <CardMedia
        sx={{ width:800,height:300, objectFit:"contain"}}
        image={post.posted} 
        title="green iguana"
        
      />
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
          {post.caption}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" onClick={()=>handleLike(post)}>Like</Button>{post.like_count} */}
        <IconButton onClick={()=>handleLike(post)} color={liked ? "error" : "default"}>
      <FavoriteIcon />{post.like_count}
    </IconButton>

        
        
      </CardActions>
      
      
      
    </Card>
    <CommentSection post_id={post.id}/>
  
  
  
  
  
  </>})}





    {/* <Card sx={{ maxWidth: 600 ,}}>
      <CardMedia
        sx={{ height: 200, width:300 }}
        image={post.posted} 
        title="green iguana"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.user}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.caption}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleLike}>Like</Button>{post.like_count}
        
        
      </CardActions>
      <hr style={{color:"black"}} />
      <CommentSection postid={post.id}/>
    </Card> */}
    
    
    </>
}
export default PostCard