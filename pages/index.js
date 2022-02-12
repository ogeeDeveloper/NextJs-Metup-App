import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DETAILS = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Meetup1",
    address: "123 lane, City1",
    description: "This is the details for meetup one",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    title: "Meetup Two",
    address: "154 lane, City2",
    description: "This is the details for meetup two",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "Meetup three",
    address: "133 lane, City 3",
    description: "This is the details for meetup three",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_DETAILS} />;
};

export default HomePage;
