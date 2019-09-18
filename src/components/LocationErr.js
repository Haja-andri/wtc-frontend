import React, { useEffect, useState } from 'react';
import { mapPromise } from '../redux/helpers';
import { StyledLocationErr } from './componentStyles/LocationErrStyles';
import { connect } from 'react-redux';
import { getCookie } from './helpers/authHelpers';
import AddLocation from '../components/AddLocation';
import { clearLocations } from '../redux/actionCreators';

const LocationErr = (props) => {
  const { newSearch, clearLocations } = props;
  const [ authRequired, setAuthRequired ] = useState(false);
  const [showAddLocationForm , setShowAddLocationForm] = useState(false);

  useEffect(() => {
    // clearLocations is called to wipe away 
    // any previous locations stored in state 
    // from previous search to avoid the cards to render
    clearLocations();
    Promise.resolve(mapPromise).then(mapObject => {
      const autocomplete = new mapObject.maps.places.Autocomplete(
        document.getElementById('location-seach')
      );
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        const latitude = place.geometry.location.lat();
        const longitude = place.geometry.location.lng();

        newSearch({ lat: latitude, lng: longitude });
      });
    });
  });

  const closePopup = () => {
    setShowAddLocationForm(false)
  }

  const onAddLocation = () =>{
    if(!getCookie(props.userId)) {
      setAuthRequired(true);
    }
    setShowAddLocationForm(true);
  }

  return (
    <StyledLocationErr>
      <h4>Sorry, we couldn't find any location around you</h4>
      <p>Maybe you want to try again</p>
      <button onClick={() => window.location.reload()}>
        Find places near you
      </button>
      <p>Or suggest us a location</p>
      <button onClick={onAddLocation}>Add a Location</button>
      <p>Or use our search feature</p>
      <form type="submit">
        <input id="location-seach" type="text" placeholder="Search" />
        <input type="submit" value="" />
      </form>
      {
        showAddLocationForm && <AddLocation authRequired={authRequired} closePopup={closePopup}/>
      }
    </StyledLocationErr>
  );
};

function mapStateToProps(state) {
  return {
    userId: state.auth.userId,
  };
}

export default connect(
  mapStateToProps,
  { clearLocations }
)(LocationErr);
