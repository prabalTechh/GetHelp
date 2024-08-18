import React from "react";
import List from "./List"; // Assuming List is a component in the same directory
import logo from "../assets/logo.png";
// Define an array of list items
const resources = ["Blog", "Help Center", "Release Notes", "Status"];
const Community = ["Twitter", "LinkedIn", "Facebook", "Dribble", "Podcast"];
const company = ["About Us", "Careers", "Legal"];
const contact = ["info.abstract@gmail.com"];
const Footer = () => {
  return (
    <footer className="bg-[#060606] sticky bot\
     ">
      <div className="p-4 text-white flex flex-col items-center gap-3 sm:gap-0 sm:items-start sm:flex-row justify-evenly text-sm">
        {" "}
        <List title="Abstract" list={["Branches"]} />
        <List title="Resources" list={resources} />
        <List title="Community" list={Community} />
        <div>
          <List title="company" list={company} />
          <List title="Contact Us" list={contact} className="absolute left-3" />
        </div>
        <div className="pt-20">
          <img src={logo} alt="logo" className="h-6 " />
          <p>
            © Copyright 2022 <br />
            Abstract Studio Design, Inc. <br />
            All rights reserved
          </p>
        </div>
      </div>
      {/* Use the List component with appropriate props */}
    </footer>
  );
};

export default Footer;
