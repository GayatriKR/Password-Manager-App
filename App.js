import { useState } from "react";
import jwt from "jsonwebtoken";

export default function App() {
  const [email, setEmail] = useState(""); //email is a variable and setemail is a function and email is going to be an empty string
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState([]); //here it is going to be an empty array

  function handleData() {
    var d = [...data];
    d.push({
      email: email,
      password: jwt.sign(password, "react")
    });
    setData(d);
  }

  console.log(data);

  return (
    <div>
      <h1> Enter email and password </h1>
      {/* input for email */}
      email:{" "}
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      {/* input for password */}
      password:{" "}
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button onClick={handleData}>submit</button>
      <button
        onClick={() => {
          setShowPassword(true);
        }}
      >
        {" "}
        show password{" "}
      </button>
      <br />
      {/* showing the data below on output console */}
      {data.map((obj, i) => {
        return (
          <div>
            {obj.email} -{" "}
            {showPassword === false
              ? obj.password
              : jwt.verify(obj.password, "react")}
          </div>
        );
      })}
    </div>
  );
}
