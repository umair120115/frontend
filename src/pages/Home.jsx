import Header from "../components/Header"
import Footer from "../components/Footer"
import '../styles/PostSection.css'
import PostCard from "../components/PostCard"

function Home(){
    
    return <>
    
    <Header/>
    
    <div className="post-cards">
    
        <PostCard/>
    </div>




    <Footer/>
    </>
}
export default Home