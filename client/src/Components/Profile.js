import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import User from '../assets/user.svg';

const Profile = (props) => {
  const [prof, setProf] = useState('');
  const navigate = useNavigate();
  const handlePropsData = () =>{
    setProf(props.profiles)
  }
  useEffect(()=>{
    handlePropsData();
  },[])
  return (
    <>
      <div className="col-lg-3 col-12 mb-4">
        <Card style={{ width: "18rem"}}>
          <Card.Img variant="top" src={User} />
          <Card.Body className="text-center pb-2 p-0">
            <Card.Title className="text-capitalize">{prof.firstname} {prof.lastname}</Card.Title>
            <Card.Text>
              {prof.specialization}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="text-center">Unique ID : {prof.regno}</ListGroup.Item>
            <ListGroup.Item className="text-center">{prof.year} Year | {prof.course} {prof.branch}</ListGroup.Item>
          </ListGroup>
          <Card.Body className="dev-btn text-center text-white cursor-pointer" style={{borderColor:"var(--black)"}} onClick={()=>{navigate(`/profile/${prof.username}`)}}>
            View Profile
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Profile;
