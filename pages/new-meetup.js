import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const onAddMeetupHandler=()=>{
        console.log("Meetup Added")
    }
  return <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>;
};

export default NewMeetupPage;
