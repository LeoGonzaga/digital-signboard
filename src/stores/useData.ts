import create from 'zustand';

type Props = {
	text: string;
	color: string;
	background: string;
	speed: number;
};

export const useData = create<Props>(() => ({
	text: 'texto',
	color: 'white',
	background: 'black',
	speed: 20,
}));
