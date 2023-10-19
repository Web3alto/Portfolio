import "./assets/style/App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./assets/components/ScrollToTop";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Home from "./assets/page/Home";
import Kongu from "./assets/page/Kongu";
import Akogare from "./assets/page/Akogare";
import Nakama from "./assets/page/Nakama";
import Metaversus from "./assets/page/Metaversus";
import Loader from "./assets/components/loader";
import CursorFollower from "./assets/components/cursorFollow";

function App() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

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

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<CursorFollower />
					<ScrollToTop />
					<AnimatePresence mode="wait">
						<Routes location={location} key={location.pathname}>
							<Route index element={<Home />} />
							<Route path="/kongu" element={<Kongu />} />
							<Route path="/akogare" element={<Akogare />} />
							<Route path="/nakama" element={<Nakama />} />
							<Route
								path="/metaversus"
								element={<Metaversus />}
							/>
						</Routes>
					</AnimatePresence>
				</>
			)}
		</>
	);
}

export default App;
