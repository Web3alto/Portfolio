import { useEffect, useRef, useLayoutEffect, useState } from "react";
// ------------------------------------------------------
import "../style/page/Kongu.css";
// ------------------------------------------------------
import transition from "../components/transition";
import NavBar from "../components/navBar";
// ------------------------------------------------------
import arrowDown from "../img/arrow-down.png";
import konguBgVid from "../video/BgVid.mp4";
import konguBgImg from "../img/Kongu.png";
import treehouseVid from "../video/Treehouse.mp4";
import treehouseImg from "../img/TreehouseBg.png";

function Kongu() {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	
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
			{ selector: ".kongu h1", delay: 300 },
			{ selector: ".kongu p", delay: 600 },
			{ selector: ".client .title", delay: 900 }, // Updated selector
			{ selector: ".client p", delay: 900 },
			{ selector: ".role .title", delay: 1200 }, // Updated selector
			{ selector: ".role p", delay: 1200 },
			{ selector: ".date .title", delay: 1500 }, // Updated selector
			{ selector: ".date p", delay: 1500 },
			{ selector: ".about button", delay: 1800 },
		];

		const timers = animateElements.map((item) => {
			return setTimeout(() => {
				const element = document.querySelector(
					item.selector
				) as HTMLElement;
				if (element) {
					element.style.animation = "slide-reveal 0.8s ease forwards";
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

	const challengeVideoRef = useRef(null);

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

		const challengeImgRef = document.querySelector(".challenge video");
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
			<section className="kongu">
				<div className="slide-reveal">
					<h1>KONGU</h1>
				</div>
				<div className="slide-reveal">
					<p>
						350 unique art pieces which grant you an invitation to
						The Treehouse, an exclusively vetted community of
						individuals who collectively stand by the equality
						principle of #WeAllEat.
					</p>
				</div>

				<div className="about">
					<div className="client">
						<div className="slide-reveal-container">
							<div className="title slide-reveal">
								<h2>Client</h2>
								<img src={arrowDown} alt="arrowDown" />
							</div>
						</div>
						<div className="slide-reveal">
							<p>Kongu</p>
						</div>
					</div>
					<div className="role">
						<div className="slide-reveal-container">
							<div className="title slide-reveal">
								<h2>Role</h2>
								<img src={arrowDown} alt="arrowDown" />
							</div>
						</div>
						<div className="slide-reveal">
							<p>Design and Development</p>
						</div>
					</div>
					<div className="date">
						<div className="slide-reveal-container">
							<div className="title slide-reveal">
								<h2>Date</h2>
								<img src={arrowDown} alt="arrowDown" />
							</div>
						</div>
						<div className="slide-reveal">
							<p>Dec 2022 - March 2023</p>
						</div>
					</div>
					<a href="https://kongu.io/" target="_blank">
						<div className="slide-reveal">
							<button className=" custom-hover">
								Launch Site
							</button>
						</div>
					</a>
				</div>

				<div className="bg">
					{isSmallScreen ? (
						<img src={konguBgImg} alt="Kongu Background" />
					) : (
						<video
							src={konguBgVid}
							autoPlay
							muted
							loop
							playsInline
						></video>
					)}
				</div>
			</section>
			<section className="challenge">
				<h2 ref={challengeTitleRef} className="challenge-reveal">
					The Challenge
				</h2>
				<p ref={challengeTextRef} className="challenge-reveal">
					The challenge with Kongu was to translate their vision into
					a fully functional and responsive website. We aimed to
					connect imagination to reality establishing Kongu's
					relevance and credibility for enthusiasts and investors
					alike.
				</p>
				<div className="asset">
					{isSmallScreen ? (
						<img
							src={treehouseImg}
							ref={challengeVideoRef}
							alt="Kongu Background"
						/>
					) : (
						<video
							src={treehouseVid}
							ref={challengeVideoRef}
							autoPlay
							muted
							loop
							playsInline
						></video>
					)}
				</div>
			</section>
		</>
	);
}
export default transition(Kongu);
