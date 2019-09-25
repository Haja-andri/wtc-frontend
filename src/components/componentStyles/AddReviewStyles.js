import styled from 'styled-components';

export const StyledAddReview = styled.div`
    display: ${props => props.isShown ? 'block': 'none'};
    z-index: 1;
    border-radius: 3%;
    position: absolute;
    text-align: center;
    width: 500px;
    height: ${props => props.id ? '580px' : 'unset'};
    top: 50%;
    left: 50%;
    margin-top: -250px; /* Negative half of height. */
    margin-left: -250px; /* Negative half of width. */
    background-color: #f0efef;


    h2 {
        font-size: 2rem;
        text-align: center;
        padding: 30px 0;
    }

    h4 {
        font-size: 1.2rem;
        text-align: center;
        padding: 20px 0;
    }
    textarea {
        margin-left:12px;
        width: 95%;
        padding-bottom: 135px;
        outline: none;
        resize: none;

    }
    p {
        position: relative;
        bottom: 530px;
        left: 215px;
        color: #0000008a;
        font-size: 2rem;
    }
    span {
        text-align: center
    }
`

export const StyledAddRating = styled.div`
    padding-left: 100px;
    font-size: 1.1rem;
    label {
        width: 80%;
    }
`