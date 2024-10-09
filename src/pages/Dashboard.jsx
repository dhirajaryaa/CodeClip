import { Header, ProfileSettings } from "@/components/custom";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isAuth, isLoading } = useSelector((state) => state.auth);
  console.log(isAuth);

  useEffect(() => {
    if (!isAuth && !isLoading) {
      navigate("/");
    }
  }, [user, isAuth, isLoading]);

  return (
    <>
      {/* header show  */}
      <Header />
      {/* user profile edit  */}
      <ProfileSettings />
      {/* dashboard content  */}
    </>
  );
};
