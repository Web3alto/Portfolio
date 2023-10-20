import { useEffect, useLayoutEffect, useRef } from "react";
// ------------------------------------------------------
import "../style/page/Metaversus.css";
// ------------------------------------------------------
import transition from "../components/transition";
import NavBar from "../components/navBar";
// ------------------------------------------------------
import arrowDown from "../img/arrow-down.png";
import metaversusBG from "../img/metaversusBg.png";
import metaversusWorld from "../img/worldBg.png";

function Metaversus() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// ----------------------------- FIRST PAGE ANIMATION ---------------------------------------

	useLayoutEffect(() => {
		const animateElements = [
			{ selector: ".metaversus h1", delay: 300 },
			{ selector: ".metaversus p", delay: 600 },
			{ selector: ".client-m .title-m", delay: 900 },
			{ selector: ".client-m p", delay: 900 },
			{ selector: ".role-m .title-m", delay: 1200 },
			{ selector: ".role-m p", delay: 1200 },
			{ selector: ".date-m .title-m", delay: 1500 },
			{ selector: ".date-m p", delay: 1500 },
			{ selector: ".about-m button", delay: 1800 },
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

		const challengeImgRef = document.querySelector(".challenge-m img");
		if (challengeImgRef) {
			observer.observe(challengeImgRef);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<>
			<NavBar />
			<section className="metaversus">
				<div className="slide-reveal-m">
					<h1>METAVERSUS</h1>
				</div>
				<div className="slide-reveal-m">
					<p>
						Metaversus app is designed to provide users with an
						immersive experience of the metaverse, where virtual
						reality meets reality. You can explore various metaverse
						worlds and connect with friends, all while enjoying a
						cutting-edge user interface.
					</p>
				</div>

				<div className="about-m">
					<div className="client-m">
						<div className="slide-reveal-container-m">
							<div className="title-m slide-reveal-m">
								<h2>Client</h2>
								<img src={arrowDown} alt="arrowDown" />
							</div>
						</div>
						<div className="slide-reveal-m">
							<p className="custom-hover">None</p>
						</div>
					</div>
					<div className="role-m">
						<div className="slide-reveal-container-m">
							<div className="title-m slide-reveal-m">
								<h2>Role</h2>
								<img src={arrowDown} alt="arrowDown" />
							</div>
						</div>
						<div className="slide-reveal-m">
							<p>Development</p>
						</div>
					</div>
					<div className="date-m">
						<div className="slide-reveal-container-m">
							<div className="title-m slide-reveal-m">
								<h2>Date</h2>
								<img src={arrowDown} alt="arrowDown" />
							</div>
						</div>
						<div className="slide-reveal-m">
							<p>October 2023</p>
						</div>
					</div>
					<a
						href="https://metaversus-webapp.vercel.app/"
						target="_blank"
					>
						<div className="slide-reveal">
							<button>Launch Site</button>
						</div>
					</a>
				</div>

				<div className="bg-m">
					<img src={metaversusBG} alt="metaversusBG1" />
				</div>
			</section>
			<section className="challenge-m">
				<h2 ref={challengeTitleRef} className="challenge-reveal">
					The Challenge
				</h2>
				<p ref={challengeTextRef} className="challenge-reveal">
					The development of the Metaversus app presented intricate
					hurdles demanding a seamless blend of design, technology,
					and user immersion. At the outset, we delved deep into the
					design blueprints, emphasizing perfect integration across
					diverse devices and an unparalleled user journey. Sculpting
					a bespoke website using advanced frameworks, we faithfully
					echoed the essence of Metaversus, ensuring no nuance was
					overlooked. Through rigorous user feedback sessions, we
					persistently fine-tuned the platform, guaranteeing intuitive
					and fluidic user interactions.
				</p>
				<img
					ref={challengeImageRef}
					src={metaversusWorld}
					alt="metaversusWorld"
				/>
			</section>
		</>
	);
}

export default transition(Metaversus);
