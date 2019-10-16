import styled from 'styled-components';

export const StyledCard = styled.div`
  margin: 10px 5px;
  width: 100%;
  height: 340px;
  background-color: white;
  border-radius: 5px;
  border: ${props =>
    props.active ? '1px solid #DBDBDB' : 'none'};
  transition: 0.2s;
  transform: ${props => (props.active ? 'scale(1.05)' : 'scale(1)')};
  

  .desc {
    text-align: center;
    padding: 10px;
    h4 {
      font-size: 18px;
      font-weight: bolder;
      color: #666a7c;
    }
    div {
      margin: 10px auto;
      font-size: 16px;
      line-height: 18px;
      color: #666a7c;
    }
  }
  img {
    width: 100%;
    height: 230px;
    border-bottom:2px solid #ffffff;
    border-radius: 5px 5px 0 0;
  }
  @media (min-width: 450px) {
    width: 85%;
  }
  @media (min-width: 600px) {
    width: 300px;
  }
`;
