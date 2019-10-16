import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCookieToState, showAddLocation } from '../redux/actionCreators';
import { getCookie, logout } from './helpers/authHelpers';
import { StyledHeader } from '../components/componentStyles/HeaderStyles';
import TopNotif from '../components/TopNotif';
import AddLocation from '../components/AddLocation';
import logo from '../assets/logo.png';

const Header = props => {
  const { landing, userId, isEmailVerified, setCookieToState, showAddLocation } = props;

  const [ cookieData, setCookieData] = useState(null);

  useEffect(() => {
    //cookieData = getCookie();
    setCookieData(getCookie())
    // we have a cookie but no user ID (user relaoded the page/app)
    if (cookieData && !userId) {
      // we reinitialise the state with the data from the cookie
      setCookieToState(cookieData);
    }
    // eslint-disable-next-line
  }, [cookieData]

  );


  const onLogout = () => {
    logout();
  };

  const displayAddForm = () => {
    showAddLocation()
  }

  return (
    <StyledHeader landing={landing}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="auth">
        {
          cookieData
            ?
            <>
              <button className="add-space" onClick={displayAddForm}>
                ADD A PLACE
              </button>
              <button onClick={onLogout}>
                LOGOUT
              </button>
            </>
            : (
              <>
                <Link to="/signup">
                  <button>SIGN-UP</button>
                </Link>
                <Link to="/login">
                  <button>LOGIN</button>
                </Link>
              </>
            )}
        {!isEmailVerified && (
          <TopNotif isVerified={isEmailVerified} />
        )}
      </div>
      <AddLocation {...props} />
    </StyledHeader>
  );
};

function mapStateToProps(state) {
  return {
    userId: state.auth.userId,
    isEmailVerified: state.auth.isEmailVerified,
  };
}

export default connect(
  mapStateToProps,
  { setCookieToState, showAddLocation }
)(Header);
