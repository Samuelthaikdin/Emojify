import React from "react";
import Navbar from "../components/Navbar";
import Playlistgeneratorpage from "../components/Playlistgeneratorpage";

function Playlistgenerator() {
  return (
    <div className=" px-10 md:px-20 lg:px-40">
      <Navbar />
      <Playlistgeneratorpage />
    </div>
  );
}

export default Playlistgenerator;
