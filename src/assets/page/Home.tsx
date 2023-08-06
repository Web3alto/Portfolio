import { useLayoutEffect, useEffect } from "react";
import RealTimeClock from "../components/realTime";
import { useNavigate } from "react-router-dom";
// ------------------------------------------------------
import "../style/page/Home.css";
// ------------------------------------------------------
import arrowDown from "../img/arrow-down.png";
import arrowRight from "../img/arrow-right.png";
import Kongu from "../img/logo-b.png";
import Akogare from "../img/akogare.png";
import Nakama from "../img/nakama.png";
import transition from "../components/transition";

function Home() {
	// ----------------------------- POP AT THE TOP OF THE VIEWPORT ---------------------------------------
	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 0);
	}, []);
	// ----------------------------- ROUTER LINK ---------------------------------------
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/kongu");
	};

	// -----------------------------  SCROLL EFFECT ---------------------------------------
	const text =
		"Working closely with you to understand your unique needs and goals. With an eye for detail and a commitment to excellence, we ensure that your project stand out in today's competitive landscape.";

	const words = text
		.split(" ")
		.map((word, index) => <span key={index}>{word} </span>);

	useEffect(() => {
		const words = document.querySelectorAll(".approach .right h3 span");

		if (!words.length) {
			console.log("Words not found");
			return;
		}

		const handleScrollAnimation = (
			entries: IntersectionObserverEntry[],
			observer: IntersectionObserver
		) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("reveal-line");
					observer.unobserve(entry.target); // Stop observing the word once it's revealed
				}
			});
		};

		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.5,
		};

		const observer = new IntersectionObserver(
			handleScrollAnimation,
			options
		);

		words.forEach((word) => {
			observer.observe(word);
		});

		return () => {
			words.forEach((word) => {
				observer.unobserve(word);
			});
		};
	}, []);

	// ----------------------------- HOME PAGE ANIMATION ---------------------------------------

	useLayoutEffect(() => {
		const animateElements = [
			{ selector: ".intro .left h2", delay: 300 },
			{ selector: ".contactt a h2", delay: 600 },
			{ selector: ".contactt a img", delay: 600 },
			{ selector: ".time h2", delay: 900 },
			{ selector: ".time img", delay: 900 },
			{ selector: ".time .real-time-clock h2", delay: 900 },
			{ selector: ".bottom h3", delay: 1200 },
			{ selector: ".mobile-head h3", delay: 1200 },
		];

		const timers = animateElements.map((item) => {
			return setTimeout(() => {
				const element = document.querySelector(
					item.selector
				) as HTMLElement;
				console.log(item.selector, element); // add this line to debug
				if (element) {
					element.style.animation =
						"slide-reveal .8s ease forwards .5s";
				}
			}, item.delay);
		});

		return () => timers.forEach((timer) => clearTimeout(timer));
	}, []);

	return (
		<>
			<header>
				<div className="slide-reveal">
					<h1>ALTO</h1>
				</div>
			</header>
			<section className="intro">
				<div className="slide-reveal-h2 left">
					<h2>Frontend Engineer</h2>
				</div>
				<div className="right">
					<div className="top">
						<div className="slide-reveal-a contactt">
							<a href="#contact">
								<h2>Contact</h2>
								<img src={arrowDown} alt="arrowDown" />
							</a>
						</div>
						<div className="slide-reveal-time time">
							<h2>Local Time</h2>
							<img src={arrowRight} alt="arrowRight" />
							<div className="real-time-clock">
								{" "}
								<RealTimeClock />
							</div>
						</div>
					</div>
					<div className="slide-reveal-h3 bottom">
						<h3>
							Crafting exceptional digital products, brands, and
							experiences is our passion and expertise, delivering
							unparalleled success for clients worldwide.
						</h3>
					</div>
				</div>
			</section>
			<div className="mobile-head">
				<h3>
					Crafting exceptional digital products, brands, and
					experiences is our passion and expertise, delivering
					unparalleled success for clients worldwide.
				</h3>
			</div>
			<section className="projects">
				<div className="title">
					<h2>Selected Works</h2>
					<img src={arrowDown} alt="arrowDown" />
				</div>
				<div className="card-container">
					<div className="card" onClick={handleClick}>
						<img src={Kongu} alt="Kongu" />
						<h3>KONGU</h3>
					</div>
					<div className="card">
						<img className="akogare" src={Akogare} alt="Akogare" />
						<h3>AKOGARE</h3>
					</div>
					<div className="card">
						<img className="nakama" src={Nakama} alt="Nakama" />
						<h3>NAKAMA</h3>
					</div>
				</div>
			</section>
			<section className="approach">
				<div className="left">
					<h2>Process</h2>
				</div>
				<div className="right">
					<h3>{words}</h3>
				</div>
			</section>
			<section className="capabilities">
				<div className="left">
					<h2>Skillsets</h2>
				</div>
				<div className="right">
					<h3>
						Web development <br />
						User experience <br />
						Interface design <br />
						Blockchain integration <br />
						Performance optimization
					</h3>
				</div>
			</section>
			<section className="contact" id="contact">
				<div className="top">
					<div className="left">
						<h2>Contact</h2>
						<img src={arrowDown} alt="arrowDown" />
					</div>
					<div className="right">
						<h5>
							<a
								href="https://twitter.com/AltoWeb3"
								target="blank_"
							>
								Twitter
							</a>
						</h5>
						<h5>
							<a
								href="https://github.com/Web3alto"
								target="blank_"
							>
								Github
							</a>
						</h5>
						<h5>
							<a href="" target="blank_">
								LinkedIn
							</a>
						</h5>
					</div>
				</div>
				<div className="mid">
					<a href="mailto:web3alto@gmail.com">
						<h1>LET'S CONNECT</h1>
					</a>
				</div>
				<div className="bottom">
					<div className="left">
						<h4>©All Rights Reserved Altoweb3</h4>
					</div>
					<div className="right">
						<h1>ALTO</h1>
					</div>
				</div>
			</section>
		</>
	);
}

export default transition(Home);
