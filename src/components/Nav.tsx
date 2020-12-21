import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faCloudSun } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibraryStatus, libraryStatus, colorSwitcher }: any) => {
  return (
    <nav>
      <h1>Music Player</h1>
      <div className="theTwo">
        <button onClick={() => setLibraryStatus(!libraryStatus)}>
          Library
          <FontAwesomeIcon icon={faMusic} />
        </button>

        <button onClick={() => colorSwitcher()}>
          <FontAwesomeIcon icon={faCloudSun} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
