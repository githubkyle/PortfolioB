import React from "react";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <img
        src={require(`../../assets/self.jpg`)}
        alt="self"
        style={{ maxWidth: "450px", height: "500px" }}
      ></img>
      <p>
        Kyle was born and raised in Saint Louis. He often plays chess and
        pickleball and enjoys delivering tangible results.
      </p>
    </div>
  );
}
