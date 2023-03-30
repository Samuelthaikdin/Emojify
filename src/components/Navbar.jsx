import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      class="
      flex flex-wrap
      items-center
      justify-between
      w-full
      text-lg text-gray-700
     
    "
    >
      <div>
        <Link to="/">
          <a className="font-bold text-4xl text-off-white " href="#">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500">
              Emoji
            </span>
            fy
          </a>{" "}
        </Link>
      </div>

      <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
        <ul
          class="
          pt-4
          text-base text-off-white
          md:flex
          md:justify-between 
          md:pt-0"
        >
        
          
          <li>
            <Link to="/Playlistgenerator">
              <a
                class="py-2 block hover:text-purple-400 text-purple-500"
                href="#"
              >
                <button class="bg-off-white hover:bg-indigo-400 text-black font-semibold px-5 py-2 rounded-full">
                  Generate Playlist
                </button>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
