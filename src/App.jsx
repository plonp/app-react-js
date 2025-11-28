import './style.css';
import { Button, ButtonRegular } from './Button.jsx';

function App() {
	return (
		<div className="app-container">
			<Button />
			<ButtonRegular />
			<div className="btn">FIRST BOX</div>
			<div className="btn">SECOND BOX</div>
		</div>
	);
}

export default App;