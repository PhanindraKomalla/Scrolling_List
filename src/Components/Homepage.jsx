import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Nav, Navbar } from 'react-bootstrap';
import { Form } from 'react-router-dom';
import searachIcon from '../Images/loupe.png'
import LoadingAnimation from '../LodingAnimation/LoadingAnimation';
const Homepage = () => {
    const [userDetails, setUserDetails] = useState([]);


    useEffect(() => {
        //axios.get("https://randomuser.me/api/?result=500").then(data => console.log(data))
        axios.get("https://jsonplaceholder.typicode.com/users").then(data => { console.log(data); setUserDetails(data.data) })
    }, [])


    return (
        <div style={{ textAlign: "center", backgroundColor: 'gray' }} >
            <Navbar expand="lg" variant="light" bg="primary" fixed="top">
                <Container>
                    <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {/* <input type="search" style={{float:"right"}} /> */}
                        </Nav>
                        <img src={searachIcon} style={{ width: "3rem" }} />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ paddingTop: "4rem", width: "100%", textAlign: 'center !important', marginLeft: "20%"  , height:"40rem", overflow:"scroll"}}>
                {
                    userDetails?.map((e, i) => (
                        <Card style={{ width: '38rem', marginTop: "1rem" }} key={i} >
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body style={{ display: "flex", alignItems: "center" }}>
                                <p>{e.name}</p>  <img src="https://randomuser.me/api/portraits/thumb/men/63.jpg" style={{ marginLeft: "auto", borderRadius: "50%" }} />
                            </Card.Body>
                        </Card>
                    ))
                }
           
            </div>

        </div>
    )
}

export default Homepage