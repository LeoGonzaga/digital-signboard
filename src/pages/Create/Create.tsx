/* eslint-disable jsx-a11y/no-distracting-elements */
import { ChangeEvent, useState } from 'react';
import { Styles } from './styles';

export const Create = (): JSX.Element => {
	const [text, setText] = useState<string>('TEXTO');
	const [speed, setSpeed] = useState<string>(1);
	const [color, setColor] = useState<string>('#fff');
	const [backgroundColor, setBackGroundColor] = useState<string>('black');

	const handleChangeText = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setText(target.value);
	};

	const handleChangeBackgroundColor = ({
		target,
	}: ChangeEvent<HTMLInputElement>) => {
		setBackGroundColor(target.value);
	};

	const handleChangeTextColor = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setColor(target.value);
	};

	const handleChangeSped = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setSpeed(target.value);
	};

	const handleCreateSignBoard = () => {
		console.log(color, backgroundColor, text, speed);
	};

	return (
		<Styles.Container>
			<p>Preview</p>
			<marquee
				bgcolor={backgroundColor}
				width="100%"
				scrollamount={speed}
				direction="right"
			>
				<Styles.PreviewText color={color} background={backgroundColor}>
					{text}
				</Styles.PreviewText>
			</marquee>
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
					<input type="range" value={speed} onChange={handleChangeSped} />
				</Styles.WrapperColors>
				<button type="submit" onClick={handleCreateSignBoard}>
					Gerar
				</button>
			</Styles.Wrapper>
		</Styles.Container>
	);
};
