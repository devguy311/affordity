import axios from "axios";
import { useState } from "react";

import { ContactUsTyoe } from "./type";

export const useContactUs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const submitMessage = async (formData: ContactUsTyoe) => {
    try {
      setIsLoading(true);

      await axios.post(
        "https://affordify-sendgrid.cyclic.app/send-message",
        formData
      );

      setMessage("Form submitted successfully");

      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      setMessage(err.message);
    }
  };

  return {
    submitMessage,
    isLoading,
    message,
  };
};

