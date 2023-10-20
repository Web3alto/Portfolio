import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/component/Loader.css";

const Loader: React.FC = () => {
	const navigate = useNavigate();
	const [visible, setVisible] = useState(true);
	const [currentWord, setCurrentWord] = useState(0);
	// const words = ["CREATE", "BUILD", "INNOVATE"];
	const words = ["WELCOME", "TO", "MY", "PORTFOLIO"];

	useEffect(() => {
		const wordTimer = setInterval(() => {
			setCurrentWord((prevWord) => (prevWord + 1) % words.length);
		}, 750);
		const visibleTimer = setTimeout(() => {
			setVisible(false);
		}, 3000);

		return () => {
			clearInterval(wordTimer);
			clearTimeout(visibleTimer);
		};
	}, []);

	useEffect(() => {
		if (!visible) {
			navigate("/");
		}
	}, [visible, navigate]);

	if (!visible) {
		return null;
	}

	return (
		<div className="loader-container">
			<h2>{words[currentWord]}</h2>
		</div>
	);
};

export default Loader;
