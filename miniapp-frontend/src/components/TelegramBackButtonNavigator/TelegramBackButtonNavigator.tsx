import React from "react";
import { BackButton } from "@vkruglikov/react-telegram-web-app";
import { useNavigate } from "react-router-dom";

export const TelegramBackButtonNavigator: React.FC = () => {
  const navigate = useNavigate();
  return <BackButton onClick={() => navigate(-1)} />;
};
