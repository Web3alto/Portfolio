import { useNavigate } from "react-router-dom";
import arrowDown from "../img/arrow-down.png";
import "../style/component/NavBar.css";

const NavBar = () => {
	const navigate = useNavigate();

	const navigateToHome = () => {
		navigate("/");
	};

	return (
		<nav>
			<div className="left">
				<h1 onClick={navigateToHome}>ALTO</h1>
			</div>
			<div className="right">
				<h2>Contact</h2>
				<img src={arrowDown} alt="arrowDown" />
			</div>
		</nav>
	);
};

export default NavBar;
