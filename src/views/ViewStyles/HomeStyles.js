import styled from 'styled-components';
import home from '../../assets/map-home.jpg';
import localisation from '../../assets/icons8-marker-red.png';

export const StyledHome = styled.div`
  height: 100vh;
  background:white;
  box-shadow: inset 0 0 0 2000px rgba(102, 106, 124, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;

  .container {
    background:white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100%;
    width: 100vw;
  
    .row{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }
    .row-half{
      display:flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      background: none;
      color: #666666;
      height: 100%;
      background: rgba(219, 219, 219, 0.2);
      background-image: url(${home});
      background-size: cover;
      background-position: center;
    }

    .row-half.right{
      background: none;
      padding-bottom:10px;
    }

    h2, h3 {
      font-weight: bolder;
      font-size: 32px;
      line-height: 33px;
      text-align: center;
      color: #666A7C;
      font-family: 'Roboto', sans-serif;
      margin:0 auto;
      margin-bottom:20px;
      width: 70%;
    }
    h2{
      font-size: 24px;
    }

    p {
      width: 50%;
      margin:0 auto;
      padding-bottom: 30px;
      text-align: center;
      color: #666A7C;
    }
    .white{
      color:white;
    }
    form {
      display: flex;
      width: 100%;
      justify-content: center;

      input[type='text'] {
        background: rgba(219, 219, 219, 0.9);
        border:1px solid white;
        width: 250px;
        height: 35px;
        margin: 60px 0;
        border-radius: 10px;
        color: ##666A7C;
        text-align: left;
        padding: 10px;
        font-size: 16px;
        ::-webkit-input-placeholder {
          color: #666A7C;
          font-size: 12px;
        }
      }
    }
    button {
      width: 170px;
      background-color:#56C1CB;
      font-size: 11px;
      font-weight: 600;
      color: white;
      margin:0 auto;
      border-radius: 10px;
      padding: 14px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  @media (min-width: 600px) {
    .container {
      .row{
        flex-direction: row;
      }
      .row-half{
        flex-direction: column;
        border-left: none;
      }
      h2 {
        font-size: 42px;
        line-height: 50px;
      }
      form {
        input[type='text'] {
          width: 60%;
          height: 50px;
          ::-webkit-input-placeholder {
            font-size: 16px;
          }
        }
        input[type='submit'] {
          height: 50px;
          width: 50px;
        }
      }
      button {
        width: 240px;
        font-size: 14px;
        padding: 16px;
      }
      .row{
        height: 50%;
      }
      .row-half{
        border-top-left-radius:5px;
        border-bottom-left-radius:5px;    
      }
  
      .row-half.right{
        background: none;
        width: 60%;
      }
  
    }
  }
`;
