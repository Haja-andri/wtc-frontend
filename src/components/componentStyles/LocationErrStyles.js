import styled from 'styled-components';
import localisation from '../../assets/icons8-marker-red.png';

export const StyledLocationErr = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 100%;
  h4 {
    font-size: 1.5rem;
    padding-top: 20px;
  }
  h6{
    padding-top: 10px;
    font-size: .8rem;
    line-height: 1.5;
  }
  p {
    font-size: 1.4rem;
    padding: 30px 0;
  }
  button {
    width: 170px;
    background-color: #56c1cb;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 14px;
    &:hover {
      cursor: pointer;
    }
  }
  form {
    display: flex;
    position: relative;
    @media (min-width: 1200px) {
      margin-left: 180px;
      margin-right: 180px;
    }
    input[type='text'] {
      background: url(${localisation}) no-repeat 3px;
      background-size: 20px;
      width: 90%;
      height: 50px;
      margin: 0 auto;
      border:1px solid #DBDBDB;
      color: #666A7C;
      text-align: left;
      padding-left: 30px;
      ::-webkit-input-placeholder {
        color: #666A7C;
        font-size: 1rem;
      }
    }
    }
  }
  @media (min-width: 600px) {
    width: 90%;
    input[type='text'] {
      width: 50%;
    }
    h4 {
      font-size: 2rem;
      padding-top: 30px;
    }
    h6{
      padding-top: 10px;
      font-weight: unset;
      line-height: 1.5;
    }
  }
`;

export const StyledNoGeoLocation = styled.div`
  display: ${props => (props.toggleNoLoc ? 'block' : 'none')};
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 2;
    bottom: 0;
    background-color: #e5e5e5;
    color: #ff0000;
    font-size: 16px;
    left: 0;
    right: 0;
    text-align: center;
    padding: 10px 0;
  }

  p {
    margin: 10px auto;
  }

  button {
    display: block;
    width: 35px;
    height: 45px;
    bottom: -3px;
    right: 25px;
    background-color: transparent;
    font-size: 28px;
    color: #ff0000;
  }
`;
