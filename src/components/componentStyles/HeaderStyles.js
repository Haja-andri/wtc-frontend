import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: white;
  padding-right:20px;
  box-shadow: ${props => (props.landing ? 'none' : '0px 15px 12px -10px rgba(238,238,238,1)')};
  border-bottom:1px solid #eee;
  .logo {
    margin-top:15px;
    width: 100px;
    &:hover {
      cursor: pointer;
    }
    img {
      width: 100%;
    }
  }
  .auth {
    display: flex;
    align-items: center;
    button {
      height: 30px;
      font-size: .8rem;
      font-weight: 400;
      margin: 0 0px;
      padding-left:10px;
      padding-right:10px;
      background: none;
      border: none;
      border-radius: 5px;
      color: #666A7C;
      transition: all 0.3s ease 0s;
      &:hover {
        transition: all 0.3s ease 0s;
        color: ${props => (props.landing ? '#56c1cb' : '#56c1cb')};
        transform: translateY(-7px);
      }
    }
    .add-space {
      background: #56c1cb;
      color: #fff;
      border-radius:5px;
      &:hover {
        color: #fff;
      }
    }
  }
  .top-notif {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 22px;
    width: 22px;
    background: #eb5757;
    border: 1px solid #eb5757;
    border-radius: 50%;
    margin-right: 10px;
    div {
      font-size: 0.8rem;
      font-weight: bold;
      color: white;
      text-align: center;
    }
  }
  .top-notif.green {
    background: #56C1CB;
    border:1px solid #ffffff;
  }

  @media (min-width: 600px) {
    height: 65px;
    .logo {
      width: 120px;
    }
    .auth {
      button {
        margin:10px;
        height: 40px;
        font-size: 16px;
        color: #666A7C;
      }
    }
  }
`;
