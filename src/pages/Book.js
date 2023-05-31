import styled from "styled-components";

const BookBox = styled.div`
    width: 1400px;
    height: 100%;
    margin: 0 auto;
    text-align: center;
    background: #333;
    display:flex;
    position: relative
`
const CenterSeats = styled.div`
    width:60%;
    height: 80%;
    margin: 300px 95px 50px 95px;
    display:grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-gap: 10px;
    text-align: center;
    align-items: center;
    justify-align: center;
`
const SideSeats = styled.div`
    width:20%;
    height: 30%;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
    margin: 580px 10px 50px 10px;
`
const Seat = styled.div`
    width: 50px;
    height: 30px;
    background: yellow;
    align-items: center;
    justify-align: center;
    cursor: pointer;
`
const ScreenBox = styled.div`
    width: 710px;
    height: 200px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
`

const Book = () => {
    return (
        <>
            <BookBox>
                <ScreenBox>
                        Screen
                </ScreenBox>
                <SideSeats>
                    {Array.from({ length: 12 }, (_, index) => (
                        <Seat key={index}></Seat>
                    ))}
                </SideSeats>
                <CenterSeats>
                    {Array.from({ length: 120 }, (_, index) => (
                        <Seat key={index}></Seat>
                    ))}
                </CenterSeats>
                <SideSeats>
                    {Array.from({ length: 12 }, (_, index) => (
                        <Seat key={index}></Seat>
                    ))}
                </SideSeats>
            </BookBox>
        </>
    )
}

export default Book;