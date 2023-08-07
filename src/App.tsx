import "./assets/style/App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion"; // Import Variants type
import { AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Home from "./assets/page/Home";
import Kongu from "./assets/page/Kongu";
import Akogare from "./assets/page/Akogare";
import Nakama from "./assets/page/Nakama";

function App() {
	const location = useLocation();

	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const lenis = new Lenis({
			lerp: 0.05, // Adjust this value for smoother or less smooth scrolling
			orientation: "vertical",
			smoothWheel: true, // Enable smooth scrolling for mouse wheel events
		});

		const raf = (time: number) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	useEffect(() => {
		const mouseMove = (e: MouseEvent) => {
			requestAnimationFrame(() => {
				setMousePosition({
					x: e.clientX,
					y: e.clientY,
				});
			});
		};

		window.addEventListener("mousemove", mouseMove);

		return () => {
			window.removeEventListener("mousemove", mouseMove);
		};
	}, []);

	const variants: Variants = {
		default: {
			x: mousePosition.x - 8,
			y: mousePosition.y - 8,
		},
	};

	return (
		<>
			<motion.div
				className="cursor"
				variants={variants}
				animate="default"
				transition={{ ease: "linear", duration: 0.15 }}
			/>
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route index element={<Home />} />
					<Route path="/kongu" element={<Kongu />} />
					<Route path="/akogare" element={<Akogare />} />
					<Route path="/nakama" element={<Nakama />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
