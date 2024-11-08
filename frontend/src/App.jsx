import 'bootstrap/dist/css/bootstrap.min.css';
import PostPage from './pages/PostPage';
import LoginPage from './pages/LoginPage'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Register from './pages/Register'
import Profile from './pages/Profile';
import ChatRoom from './components/Chat';
import Peoples from './pages/Peoples';
import RequestPage from './pages/RequestPage';
import FriendsPage from './pages/FriendsPage';



function App() {
  


  function Logout(){
    localStorage.clear();
    return <Navigate to='/login'/>
  }
  function RegisterAndLogout() {
    localStorage.clear()
    return <Register />
  }
  

  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterAndLogout/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='/post' element={<ProtectedRoute><PostPage/></ProtectedRoute>}/>
        <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
        <Route path='/chat/:friend_id/:username' element={<ProtectedRoute><ChatRoom/></ProtectedRoute>}/>
        <Route path='/people' element={<ProtectedRoute><Peoples/></ProtectedRoute>}/>
        <Route path='/requests' element={<ProtectedRoute><RequestPage/></ProtectedRoute>}/>
        <Route path='/friends' element={<ProtectedRoute><FriendsPage/></ProtectedRoute>}/>





       </Routes>
    
    
    
    
    
    
    </BrowserRouter>


      </>
  )
}

export default App
