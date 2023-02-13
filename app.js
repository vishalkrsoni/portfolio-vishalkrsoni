import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function ContactMe(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [loading, setLoading] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let data = {
        name,
        email,
        message,
      };

      const res = await axios.post("/contact", data);

      if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          value={name}
          onChange={handleName}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={handleEmail}
          placeholder="Email"
        />
        <textarea
          value={message}
          onChange={handleMessage}
          placeholder="Message"
        />
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>
    </div>
  );
}
