import styled from "styled-components";

const VideoBox = styled.div`
    width:100%;
    height: 608px;
    background: #000;
    text-align: center
`

const Home = () => {
    return (
        <>
        <VideoBox>
            <video src="https://adimg.cgv.co.kr/images/202305/Transformers7/0526_TF7_1080X608.mp4" autoPlay muted />
        </VideoBox>
        </>
    )
}

export default Home;