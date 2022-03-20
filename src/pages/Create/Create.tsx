/* eslint-disable radix */
/* eslint-disable jsx-a11y/no-distracting-elements */
import { useData } from '@src/stores/useData';
import { ChangeEvent, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { useNavigate } from 'react-router-dom';
import { Styles } from './styles';

export const Create = (): JSX.Element => {
	const navigate = useNavigate();

	const [text, setText] = useState<string>('TEXTO');
	const [speed, setSpeed] = useState<number>(40);
	const [color, setColor] = useState<string>('#fff');
	const [backgroundColor, setBackGroundColor] = useState<string>('black');

	const handleChangeText = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setText(target.value);
		useData.setState({ text: target.value });
	};

	const handleChangeBackgroundColor = ({
		target,
	}: ChangeEvent<HTMLInputElement>) => {
		setBackGroundColor(target.value);
		useData.setState({ background: target.value });
	};

	const handleChangeTextColor = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setColor(target.value);
		useData.setState({ color: target.value });
	};

	const handleChangeSpeed = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setSpeed(parseInt(target.value, 10));
		useData.setState({ speed: parseInt(target.value, 10) });
	};

	const handleCreateSignBoard = () => {
		navigate('/board');
	};

	return (
		<Styles.Container>
			<p>Preview</p>
			<Marquee
				gradient={false}
				speed={speed * 5}
				direction="left"
				style={{ background: backgroundColor }}
			>
				<Styles.PreviewText color={color} background={backgroundColor}>
					{text}
				</Styles.PreviewText>
			</Marquee>
			<Styles.Wrapper>
				<input
					type="text"
					value={text}
					onChange={handleChangeText}
					placeholder="Digite sua frase"
				/>
				<Styles.WrapperColors>
					<Styles.Label>Fundo:</Styles.Label>
					<input
						type="color"
						value={backgroundColor}
						onChange={handleChangeBackgroundColor}
					/>
				</Styles.WrapperColors>

				<Styles.WrapperColors>
					<Styles.Label>Texto:</Styles.Label>
					<input type="color" onChange={handleChangeTextColor} value={color} />
				</Styles.WrapperColors>
				<Styles.WrapperColors>
					<Styles.Label>Velocidade:</Styles.Label>
					<input type="range" value={speed} onChange={handleChangeSpeed} />
				</Styles.WrapperColors>
				<button type="submit" onClick={handleCreateSignBoard}>
					Gerar
				</button>
			</Styles.Wrapper>
		</Styles.Container>
	);
};
