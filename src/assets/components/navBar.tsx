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
				<h1 onClick={navigateToHome} className="custom-hover">
					ALTO
				</h1>
			</div>
			<div className="right custom-hover">
				<a
					href="mailto:web3alto@gmail.com"
					className="custom-hover contact-reveal"
				>
					<h2>Contact</h2>
					<img src={arrowDown} alt="arrowDown" />
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
