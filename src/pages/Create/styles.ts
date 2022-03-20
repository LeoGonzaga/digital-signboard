import { COLORS } from '@src/constants/colors';
import styled from 'styled-components';

const Container = styled.div`
	background-color: ${COLORS.details};
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	p {
		color: #fff;
		font-weight: bold;
	}

	input {
		height: 55px;
		outline: none;
		border-radius: 4px;
		width: 330px;
		border: none;
		padding: 0px 15px;
	}

	button {
		background-color: ${COLORS.primary};
		height: 55px;
		width: 360px;
		border: none;
		margin-top: 10px;
		color: #fff;
		font-weight: bold;
		border-radius: 4px;
		cursor: pointer;
	}
`;

const Wrapper = styled.div`
	width: 330px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
const WrapperColors = styled.div`
	margin: 10px;
	display: flex;
	align-items: center;

	input {
		width: 130px;
		padding: 5px;
	}
`;

const Label = styled.span`
	color: #fff;
	font-size: 16px;
	padding-right: 15px;
`;

const PreviewText = styled.span`
	font-size: 340px;
	color: #ffff;
`;

export const Styles = {
	Container,
	WrapperColors,
	Label,
	PreviewText,
	Wrapper,
};