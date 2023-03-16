import React from "react";

const MusicPlayer = ({ playlist }) => {
  return (
    <iframe
      src={`https://open.spotify.com/embed/playlist/${playlist.id}`}
      width="100%"
      height="380"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
      title={playlist.name}
    ></iframe>
  );
};

export default MusicPlayer;
