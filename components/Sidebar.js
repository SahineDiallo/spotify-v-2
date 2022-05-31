import React from "react";
import { HomeIcon, LibraryIcon, SearchIcon } from "@heroicons/react/outline";
import { HeartIcon, PlusCircleIcon } from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <div className="sidebar position-fixed top-0 bottom-0 bg-black">
      <img
        className="sidebar_logo"
        src="https://www.kworldnow.com/wp-content/uploads/2021/02/listen-on-spotify-1.png"
        alt=""
      />
      <br />
      <div class="sidebar__content d-flex flex-column gap-3 px-4">
        <div>
          <p className="d-flex align-items-center">
            <HomeIcon /> <span>Home</span>
          </p>
          <p className="d-flex align-items-center">
            <SearchIcon /> <span>Search</span>
          </p>
          <p className="d-flex align-items-center mb-5">
            <LibraryIcon /> <span>Your Library</span>
          </p>
          <p className="d-flex align-items-center">
            <PlusCircleIcon /> <span>Create Playlist</span>
          </p>
          <p className="d-flex align-items-center">
            <HeartIcon /> <span>Liked Songs</span>
          </p>
        </div>
        <hr />
        <div className="sidebar__playlist">
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
          <p>PLaylist ....</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
