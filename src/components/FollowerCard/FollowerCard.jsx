import React, { useState } from "react";
import "./FollowerCard.css";
import User from "../User/User";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllUser } from "../../Api/UserRequest";

function FollowerCard() {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data)
      console.log(data)
    };
    fetchPersons();
  },[]);
  return (
    <div className="FollowerCard">
      <h3>People you may know</h3>

      {persons.map((person, id) => {
        if(person._id !== user._id){
            return <User person={person} />;
        }
      })}
    </div>
  );
}

export default FollowerCard;
