import img1 from '../images/dummy1.png';
import styled from 'styled-components';

const Image1 = styled.img`
width: 100%;
height: auto;
`;

const Main = () => {
    return (
        <div>
            <Image1 src={img1} />
        </div>
    )
}

export default Main;