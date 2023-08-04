import "./assets/style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/page/Home";
import Kongu from "./assets/page/Kongu";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/kongu" element={<Kongu />} />
			</Routes>
		</Router>
	);
}

export default App;
