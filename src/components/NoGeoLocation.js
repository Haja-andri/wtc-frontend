import React, { useState, useEffect } from 'react';
import { StyledNoGeoLocation } from './componentStyles/SearchPageStyles'

const NoGeoLocation = () => {
    const [toggleNoLoc, setToggleNoLoc] = useState(true);
    const hideNoLoc = () => setToggleNoLoc(!toggleNoLoc);

    return (<StyledNoGeoLocation toggleNoLoc={toggleNoLoc}>
        <div>
          <p>Your browser doesn't support Geolocation, or you didn't allow it.</p>
          <p>Centering the map to a default location</p>
          <button onClick={() => hideNoLoc()}>x</button>
        </div>
      </StyledNoGeoLocation>
    )
}

export default NoGeoLocation;