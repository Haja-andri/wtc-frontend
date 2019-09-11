import styled from 'styled-components';

export const StyledOverlayPopup = styled.div`
position: fixed; /* Sit on top of the page content */
display: none; /* Hidden by default */;
justify-content: center;
align-items: center;
text-align:center;
width: 100%; /* Full width (cover the whole page) */
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5); /* Black background with opacity */
z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
cursor: default; 
.message-container{
    padding: 20px;
    border:1px solid #E5E5E5;
    text-align:center;
    background:white;
    width: 50%;
    min-width: 300px;
    max-width: 600px;
    border-radius:10px;
    color: #666A7C;
}
h3, h2{
    font-size: 1.5rem;
    padding-bottom:20px;
    color: #03525B;
}
h2{
    font-size: 1.7rem;
}
.actions-row{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
}
.resend{
    cursor:pointer;
    font-size: 1rem;
    padding:15px;
    border:1px solid #56C1CB;
    border-radius: 5px;
    color: #03525B;
    margin-top:15px;
}

.closing-cross{
    display:flex;
    justify-content: flex-end;
    font-weight:bold;
    font-size: 1.3rem;
}

.closing-cross span{
    cursor:pointer;
    color: #03525B;
}

.closing-cross span:hover{
    color: #56C1CB;
}

img {
    width: 100%;
    height: auto;
}

.left-box{
    width: 50%;
    margin: 10px
}
.right-box{
    width: 100%;
    margin: 10px
}

.error{
    color: red;
    font-size: .8rem;
    padding: 10px;
}

`;