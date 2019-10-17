import styled from 'styled-components';
import localisation from '../../assets/icons8-marker-red.png';

const imagesStock = [
  "https://source.unsplash.com/6bXvYyAYVrE/1600x900",
  "https://source.unsplash.com/dZxQn4VEv2M/1600x900",
  "https://source.unsplash.com/qE1jxYXiwOA/1600x900",
  "https://source.unsplash.com/tKN1WXrzQ3s/1600x900",
  "https://source.unsplash.com/0I9jSdBwydg/1600x900",
]

const getImage = (current) => {
  return imagesStock[current]
}


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
      background-image: url(${()=>{
        return getImage(0);
      }});
      background-size: cover;
      background-position: center;
    }

    .row-half.right{
      background: white;
      padding-bottom:10px;
    }

    h2, h3 {
      line-height: 33px;
      text-align: center;
      color: #666A7C;
      margin:0 auto;
      margin-bottom:20px;
      width: 70%;
    }
    h2{
      font-size: 2.4rem;
    }

    p {
      margin:0 auto;
      padding-bottom: 30px;
      text-align: center;
      color: #666A7C;
      width: 90%;
    }
    .white{
      color:white;
    }
    form {
      display: flex;
      width: 100%;
      justify-content: center;

      input[type='text'] {
        background-color: rgba(219, 219, 219, 0.9);
        background-image: url(${localisation});
        background-size: 20px;  
        background-position:
        top 18px left 5px; /* this positions the second image */
        background-repeat:no-repeat; 
        border:1px solid white;
        width: 80%;
        height: 60px;
        border-radius: 5px;
        color: #666A7C;
        text-align: left;
        padding: 27px;
        font-size: 16px;
        ::-webkit-input-placeholder {
          color: #666A7C;
          font-size: 1rem;
        }
      }
    }
    button {
      width: 190px;
      background-color:#56C1CB;
      font-size: 1rem;
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
        font-size: 3rem;
        line-height: 50px;
      }
      p {
        width: 80%;
      }
  
      form {
        input[type='text'] {
          width: 60%;
          height: 50px;
          ::-webkit-input-placeholder {
            font-size: 16px;
          }
        }
      }
      button {
        width: 240px;
        font-size: 14px;
        padding: 16px;
      }
      .row{
        height: 70%;
        width: 85%;
        border:1px solid #DBDBDB;
        border-radius: 5px;
        box-shadow: 0 14px 6px -6px #eee;
      }
      .row-half{
        min-width:600px;
        border-top-right-radius:5px;
        border-bottom-right-radius:5px;    
      }
  
      .row-half.right{
        background: white;
        width: 60%;
        min-width:380px;
        border-top-left-radius:5px;
        border-bottom-left-radius:5px;    
        margin-right:0px;
      }
  
    }
  }
`;
