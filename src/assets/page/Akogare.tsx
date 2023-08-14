import { useEffect, useRef, useLayoutEffect, useState } from "react";
// ------------------------------------------------------
import "../style/page/Akogare.css";
// ------------------------------------------------------
import transition from "../components/transition";
import NavBar from "../components/navBar";
// ------------------------------------------------------
import arrowDown from "../img/arrow-down.png";
import akogareBgVid from "../video/_AKGR_Website.mp4";
import akogareBgImg from "../img/AkogareBg.png";
import akogareGallery from "../img/Akogare_Gallery.png";

function Akogare() {
	const [isSmallScreen, setSmallScreen] = useState(window.innerWidth < 999);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 999) {
				setSmallScreen(true);
			} else {
				setSmallScreen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useLayoutEffect(() => {
		const animateElements = [
			{ selector: ".akogare h1", delay: 300 },
			{ selector: ".akogare p", delay: 600 },
			{ selector: ".client-a .title-a", delay: 900 }, // Updated selector
			{ selector: ".client-a p", delay: 900 },
			{ selector: ".role-a .title-a", delay: 1200 }, // Updated selector
			{ selector: ".role-a p", delay: 1200 },
			{ selector: ".date-a .title-a", delay: 1500 }, // Updated selector
			{ selector: ".date-a p", delay: 1500 },
			{ selector: ".about-a button", delay: 1800 },
		];

		const timers = animateElements.map((item) => {
			return setTimeout(() => {
				const element = document.querySelector(
					item.selector
				) as HTMLElement;
				if (element) {
					element.style.animation =
						"slide-reveal-a 0.8s ease forwards";
				}
			}, item.delay);
		});

		return () => timers.forEach((timer) => clearTimeout(timer));
	}, []);

	// ----------------------------- CHALLENGE TEXT ANIMATION ---------------------------------------

	const challengeTitleRef = useRef(null);
	const challengeTextRef = useRef(null);

	useEffect(() => {
		const handleScroll = (
			entries: IntersectionObserverEntry[],
			observer: IntersectionObserver
		) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("in-view");
					observer.unobserve(entry.target);
				}
			});
		};

		const options = {
			threshold: 0.1,
		};

		const observer = new IntersectionObserver(handleScroll, options);

		if (challengeTitleRef.current && challengeTextRef.current) {
			observer.observe(challengeTitleRef.current);
			observer.observe(challengeTextRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	// ----------------------------- CHALLENGE IMG ANIMATION ---------------------------------------

	const challengeImageRef = useRef(null);

	useEffect(() => {
		const handleScroll = (
			entries: IntersectionObserverEntry[],
			observer: IntersectionObserver
		) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("img-in-view");
					observer.unobserve(entry.target);
				}
			});
		};

		const options = {
			threshold: 0.35,
		};

		const observer = new IntersectionObserver(handleScroll, options);

		const challengeImgRef = document.querySelector(".challenge-a img");
		if (challengeImgRef) {
			observer.observe(challengeImgRef);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<NavBar />
			<section className="akogare">
				<div className="slide-reveal-a">
					<h1>AKOGARE</h1>
				</div>
				<div className="slide-reveal-a">
					<p>
						Akogare is defined as the bridge between East & West in
						Web3. They aim to empower artists to take control of
						their own creative process and make their work available
						to a global audience.
					</p>
				</div>

				<div className="about-a">
					<div className="client-a">
						<div className="slide-reveal-container-a">
							<div className="title-a slide-reveal-a">
								<h2>Client</h2>
								<img src={arrowDown} alt="arrowDown" />
							</div>
						</div>
						<div className="slide-reveal-a">
							<p>Akogare</p>
						</div>
					</div>
					<div className="role-a">
						<div className="slide-reveal-container-a">
							<div className="title-a slide-reveal-a">
								<h2>Role</h2>
								<img src={arrowDown} alt="arrowDown" />
							</div>
						</div>
						<div className="slide-reveal-a">
							<p>Development & PFP generator Engineering</p>
						</div>
					</div>
					<div className="date-a">
						<div className="slide-reveal-container-a">
							<div className="title-a slide-reveal-a">
								<h2>Date</h2>
								<img src={arrowDown} alt="arrowDown" />
							</div>
						</div>
						<div className="slide-reveal-a">
							<p>Apr 2023 - Present</p>
						</div>
					</div>
					<div className="slide-reveal-a">
						<button className=" custom-hover">Coming Soon</button>
					</div>
				</div>

				<div className="bg-a">
					{isSmallScreen ? (
						<img src={akogareBgImg} alt="akogareBg" />
					) : (
						<video
							src={akogareBgVid}
							autoPlay
							muted
							loop
							playsInline
						></video>
					)}
				</div>
			</section>
			<section className="challenge-a">
				<h2 ref={challengeTitleRef} className="challenge-reveal">
					The Challenge
				</h2>
				<p ref={challengeTextRef} className="challenge-reveal">
					The challenge with Akogare centered on transforming their
					conceptual vision into digital reality. The creation of a
					custom VueJS website was a complex process. A particularly
					unique challenge was engineering a custom, role-based PFP
					generator integrated with Discord's API, adding a distinct
					functionality to the site. Throughout, we ensured that the
					Akogare website not only met but exceeded expectations.
				</p>
				<img
					ref={challengeImageRef}
					src={akogareGallery}
					alt="akogareGallery"
				/>
			</section>
		</>
	);
}

export default transition(Akogare);
