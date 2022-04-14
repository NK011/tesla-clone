import styled, { keyframes } from "styled-components"

function Section({ backgorund, title, des, lbtn, rbtn, downArrow }) {
    return (
        <Main bgImg={backgorund}>
            <div>
                <ModelName>{title}</ModelName>
                <Subtitle>{des}</Subtitle>
            </div>
            <div>
                <ButtonGrp>
                    <LButton>{lbtn}</LButton>
                    { rbtn &&  <RButton>{rbtn}</RButton> }
                </ButtonGrp>
                { downArrow &&  <DownArrow src='/images/down-arrow.svg' /> }
            </div>
            {/* <Vanish /> */}
        </Main>
    )
}

export default Section

const Main = styled.div`
    position: relative;
    background-image: ${ props => `url("/images/${ props.bgImg}")` };
    background-size: cover;
    background-position: center;
    background-clip: center;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 27px;
    padding-top: 15vh;
`;

const ModelName = styled.h2`
    font-weight: 600;
    font-size: clamp(27px, 2.5rem, 70px);
    text-align: center;
`;


const Subtitle = styled.p`
    font-weight: 400;
    font-size: 0.8rem;
`;

const ButtonGrp = styled.div`
    max-width: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const LButton = styled.button`
    height: 35px;
    width: 200px;
    border-radius: 20px;
    border: none;
    outline: none;
    background: darkslategray;
    color: white;
    font-size: 0.7rem;
    font-weight: 600;
    margin: 5px;
    margin-right: 10px;
`;

const RButton = styled(LButton)`
    background: whitesmoke;
    color: black;
    margin-right: 0px;
`;

const DownArrow = styled.img`
    height: 27px;
    margin-top: 12px;
    z-index: 100;
    animation: jump 1s ease-in-out infinite;

@keyframes jump {
    0%, 40%, 100% {
    transform: translateY(0px);
    }
    20%{
    transform: translateY(-5px);
    }
    60%{
        transform: translateY(-3px);
    }
    80%{
        transform: translateY(2px);    
    }
   
}

`;

const Vanish = styled.div`
    height: 70px;
    background: linear-gradient(to top, rgba(0, 0, 0,0.7), transparent);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
`;