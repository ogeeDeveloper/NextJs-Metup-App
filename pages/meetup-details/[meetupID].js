import { useRouter } from "next/router";
import React from "react";

const MeetupDetailPage = () => {
  const router = useRouter();
  const { meetupID } = router.query;
  return <div></div>;
};

export default MeetupDetail;