import footerimg from '../images/footerimg.svg';
import styled from 'styled-components';

const Div = styled.div`
	width: 99vw;
	height: auto;
`;

const FooterTag = styled.footer`
	width: 99vw;
	height: auto;
`;

const Img = styled.img`
	width: 100%;
	height: auto;
`;

const Footer = () => {
	return (
		<Div>
			<FooterTag>
				<Img src={footerimg} />
			</FooterTag>
		</Div>
	);
};

export default Footer;
