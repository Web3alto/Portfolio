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
import Loader from "./assets/components/loader";

function App() {
	const location = useLocation();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	// ----------------------------- SMOOTH SCROLL ---------------------------------------

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

	// ----------------------------- MOUSE CURSOR ---------------------------------------

	const [cursorVariant, setCursorVariant] = useState("default");
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const mouseMove = (e: MouseEvent) => {
			setMousePosition({
				x: e.clientX,
				y: e.clientY,
			});

			const elements = document.querySelectorAll(".custom-hover");
			const isHovering = Array.from(elements).some((element) =>
				element.contains(e.target as Node)
			);

			if (isHovering) {
				setCursorVariant("hover");
			} else {
				setCursorVariant("default");
			}
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
			scale: 1,
		},
		hover: {
			x: mousePosition.x - 8,
			y: mousePosition.y - 8,
			scale: 2,
		},
	};

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<motion.div
						className="cursor"
						variants={variants}
						animate={cursorVariant}
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
			)}
		</>
	);
}

export default App;
