import { useRouter } from "next/router";
import React from "react";
import MeetupItem from "../../components/meetups/MeetupItem";

const MeetupDetailPage = () => {
  const router = useRouter();
  const { meetupID } = router.query;
  return <MeetupItem />;
};

export default MeetupDetail;
