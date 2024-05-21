import React from "react";
import { Dashboard, Footer, Header } from "../components";
import MyChatBot from "../components/ChatBot/MyChatBot";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Dashboard />

      <MyChatBot />
    </div>
  );
};

export default MainPage;
