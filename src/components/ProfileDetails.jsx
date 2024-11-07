import api from "../api"
import { useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Header from './Header'
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import '../styles/ProfileDetails.css'
function ProfileDetails(){
    const [user,setUser]=useState([])
    useEffect(()=>{getuser();},[user])
    const navigate=useNavigate();
  const [Name,setUpdatename]=useState('')
  const[username,setUpdatedusername]=useState('')
  const [email,setUpdatedemail]=useState('')
  const [password,setPassword]=useState('')


    const getuser=()=>{
        api.get('/hadith/user/register/').then((res)=>res.data).then((data)=>{
            setUser(data);
            console.log(data);
        })
    }
    function handleName(user_id){
        api.patch(`/hadith/user/${user_id}/update/`,{Name},{headers:
            {'Content-Type':'multipart/form-data',},});
            navigate('/profile');
    }
    function handleUsername(user_id){
        console.log(user_id)
        api.patch(`/hadith/user/${user_id}/update/`,{username},{headers:
            {'Content-Type':'multipart/form-data',},});
            navigate('/profile');
    }
    function handleEmail(user_id){
        api.patch(`/hadith/user/${user_id}/update/`,{email},{headers:
            {'Content-Type':'multipart/form-data',},});
            navigate('/profile');
    }
    
    const handlePassword =(user_id)=>{
        api.patch(`/hadith/user/${user_id}/update/`,{password:password},{headers:
            {'Content-Type':'multipart/form-data',},
        });

    }
    
    return <>
    <Header/>

    
        
        
        
        
        <Container className="profile-update-container mt-4">
            {user.map((user) => (
                <div key={user.id} className="profile-section p-3 mb-4 bg-light rounded shadow-sm">
                    {/* Name Section */}
                    <Row className="mb-3">
                        <Col md={3}>
                            <strong>Name:</strong>
                        </Col>
                        <Col md={5}>
                            <p>{user.Name}</p>
                        </Col>
                        <Col md={4}>
                            <Form.Control 
                                type="text" 
                                placeholder="Update Name" 
                                onChange={(e) => setUpdatename(e.target.value)}
                            />
                            <Button className="mt-2" variant="primary" onClick={() => handleName(user.id)}>
                                Update Name
                            </Button>
                        </Col>
                    </Row>

                    {/* Username Section */}
                    <Row className="mb-3">
                        <Col md={3}>
                            <strong>Username:</strong>
                        </Col>
                        <Col md={5}>
                            <p>{user.username}</p>
                        </Col>
                        <Col md={4}>
                            <Form.Control 
                                type="text" 
                                placeholder="Update Username" 
                                onChange={(e) => setUpdatedusername(e.target.value)}
                            />
                            <Button className="mt-2" variant="primary" onClick={() => handleUsername(user.id)}>
                                Update Username
                            </Button>
                        </Col>
                    </Row>

                    {/* Email Section */}
                    <Row className="mb-3">
                        <Col md={3}>
                            <strong>Email:</strong>
                        </Col>
                        <Col md={5}>
                            <p>{user.email}</p>
                        </Col>
                        <Col md={4}>
                            <Form.Control 
                                type="email" 
                                placeholder="Update Email" 
                                onChange={(e) => setUpdatedemail(e.target.value)}
                            />
                            <Button className="mt-2" variant="primary" onClick={() => handleEmail(user.id)}>
                                Update Email
                            </Button>
                        </Col>
                    </Row>

                    {/* Password Section */}
                    <Row className="password-section mt-4">
                        <Col md={12} className="text-center">
                            <h5>Change Your Password</h5>
                        </Col>
                        <Col md={8} className="mx-auto">
                            <Form.Control 
                                type="password" 
                                placeholder="New Password" 
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button className="mt-2 w-100" variant="danger" onClick={() => handlePassword(user.id)}>
                                Change Password
                            </Button>
                        </Col>
                    </Row>
                </div>
            ))}
        </Container>

        
    
    </>
    

}
export default ProfileDetails