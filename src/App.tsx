import {
	BrowserRouter,
	Routes, // instead of "Switch"
	Route,
} from 'react-router-dom';
import Board from './pages/Board';
import Create from './pages/Create';
import GlobalStyle from './styles/global';

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Create />} />
				<Route path="/board" element={<Board />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
