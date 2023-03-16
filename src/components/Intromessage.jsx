import React from "react";
import { Link } from "react-router-dom";
import SpotifyPlayer from "react-spotify-player";
/*https://www.npmjs.com/package/react-spotify-embed*/
/*https://reactscript.com/spotify-player-widget-in-react/ */
function Intromessage() {
  const size = {
    width: "100%",
    height: 500,
  };

  return (
    <div className="text-left  py-20">
      <h2 className=" text-6xl py-10 text-off-white">
        The ultimate Spotify playlist generator.
      </h2>
      <p className="text-off-white py-5 text-lg ">
        Select emojis to describe your current mood or the type of music you
        want to listen to.
      </p>
      <Link to="/Playlistgenerator">
        <a>
          <button class="transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  bg-off-white text-neutral-900 font-semibold px-5 py-2 rounded-full">
            <svg
              className="float-right h-7 px-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            <span> Generate Playlist</span>
          </button>
        </a>
      </Link>

      <div className="py-20 ">
        <SpotifyPlayer
          uri="spotify:playlist:37i9dQZF1DXcBWIGoYBM5M?si=b78a1fe2d5934600"
          size={size}
        />
      </div>
    </div>
  );
}

export default Intromessage;
