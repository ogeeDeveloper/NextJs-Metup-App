import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const onAddMeetupHandler=(enteredMeetupData)=>{
        console.log(`Meetup Added: ${enteredMeetupData}`)
    }
  return <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>;
};

export default NewMeetupPage;
