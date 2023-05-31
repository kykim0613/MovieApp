import styled from "styled-components";

const VideoBox = styled.div`
    width:100%;
    background: #000;
    text-align: center
`

const Home = () => {
    return (
        <>
        <VideoBox>
            <video src="http://h.vod.cgv.co.kr/vodCGVa/87045/87045_214957_1200_128_960_540.mp4" autoPlay muted />
        </VideoBox>
        </>
    )
}

export default Home;