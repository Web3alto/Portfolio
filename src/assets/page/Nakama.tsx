import { useEffect, useLayoutEffect, useRef } from "react";
// ------------------------------------------------------
import "../style/page/Nakama.css";
// ------------------------------------------------------
import transition from "../components/transition";
import NavBar from "../components/navBar";
// ------------------------------------------------------
import arrowDown from "../img/arrow-down.png";
import nakamaBG from "../img/NakamaBG.png";
import nakamaMint from "../img/NakamaMint.png";

function Nakama() {
	// ----------------------------- FIRST PAGE ANIMATION ---------------------------------------

	useLayoutEffect(() => {
		const animateElements = [
			{ selector: ".nakama h1", delay: 300 },
			{ selector: ".nakama p", delay: 600 },
			{ selector: ".client-n .title-n", delay: 900 }, // Updated selector
			{ selector: ".client-n p", delay: 900 },
			{ selector: ".role-n .title-n", delay: 1200 }, // Updated selector
			{ selector: ".role-n p", delay: 1200 },
			{ selector: ".date-n .title-n", delay: 1500 }, // Updated selector
			{ selector: ".date-n p", delay: 1500 },
			{ selector: ".about-n button", delay: 1800 },
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

		const challengeImgRef = document.querySelector(".challenge-n img");
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
			<section className="nakama">
				<div className="slide-reveal-n">
					<h1>NAKAMA</h1>
				</div>
				<div className="slide-reveal-n">
					<p>
						Nakama is an Education Platform Designed By Todays
						Leaders, Tailored For Tomorrows Visionaries. Their
						community is composed of the Web3 workforce that is
						still concentrated on bringing value and growing the
						Web3 community in the bear market.
					</p>
				</div>

				<div className="about-n">
					<div className="client-n">
						<div className="slide-reveal-container-n">
							<div className="title-n slide-reveal-n">
								<h2>Client</h2>
								<img src={arrowDown} alt="arrowDown" />
							</div>
						</div>
						<div className="slide-reveal-n">
							<p>Nakama</p>
						</div>
					</div>
					<div className="role-n">
						<div className="slide-reveal-container-n">
							<div className="title-n slide-reveal-n">
								<h2>Role</h2>
								<img src={arrowDown} alt="arrowDown" />
							</div>
						</div>
						<div className="slide-reveal-n">
							<p>Development </p>
						</div>
					</div>
					<div className="date-n">
						<div className="slide-reveal-container-n">
							<div className="title-n slide-reveal-n">
								<h2>Date</h2>
								<img src={arrowDown} alt="arrowDown" />
							</div>
						</div>
						<div className="slide-reveal-n">
							<p>May 2023 - Present</p>
						</div>
					</div>
					<div className="slide-reveal-n">
						<button className=" custom-hover">Coming Soon</button>
					</div>
				</div>

				<div className="bg-n">
					<img src={nakamaBG} alt="nakamaBG" />
				</div>
			</section>
			<section className="challenge-n">
				<h2 ref={challengeTitleRef} className="challenge-reveal">
					The Challenge
				</h2>
				<p ref={challengeTextRef} className="challenge-reveal">
					The challenge with Nakama required a precise alignment of
					design, technology, and user experience. Initially, we
					analyzed Nakama's mockup, focusing on optimal website
					integration and an enhanced user experience. Creating a
					custom VueJS website, we meticulously mirrored Nakama's
					vision, ensuring every detail was represented. User testing
					was essential, leading to continuous refinements for a more
					intuitive and responsive interaction.
				</p>
				<img
					ref={challengeImageRef}
					src={nakamaMint}
					alt="nakamaMint"
				/>
			</section>
		</>
	);
}

export default transition(Nakama);
