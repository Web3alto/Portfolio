import { useLayoutEffect, useEffect } from "react";
import RealTimeClock from "../components/realTime";
import { Link } from "react-router-dom";
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

	// ----------------------------- APPROACH ANIMATION ---------------------------------------
	const textApproach =
		"Working closely with you to understand your unique needs and goals. With an eye for detail and a commitment to excellence, we ensure that your project stand out in today's competitive landscape.";

	const wordsApproach = textApproach.split(" ").map((word, wordIndex) => (
		<span key={wordIndex} className="word">
			{word}&nbsp;
		</span>
	));

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("reveal-word");
					}
				});
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.5, // Adjust as needed
			}
		);

		document.querySelectorAll(".word").forEach((word) => {
			observer.observe(word);
		});

		return () => observer.disconnect();
	}, []);

	// ----------------------------- CAPABILITIES ANIMATION ---------------------------------------
	const lines = [
		"Web development",
		"User experience",
		"Interface design",
		"Blockchain integration",
		"Performance optimization",
	];

	const content = lines.map((line, lineIndex) => (
		<div key={lineIndex}>
			{line.split(" ").map((word, wordIndex) => (
				<span key={`${lineIndex}-${wordIndex}`} className="word">
					{word}&nbsp;
				</span>
			))}
			<br />
		</div>
	));

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
					}
				});
			},
			{
				rootMargin: "0px",
				threshold: 0.1,
			}
		);

		document
			.querySelectorAll(".capabilities .right h3 .word")
			.forEach((word) => {
				observer.observe(word);
			});

		return () => observer.disconnect();
	}, []);

	// ----------------------------- TYPEWRITER ANIMATION ---------------------------------------

	// ----------------------------- CARD ANIMATION ---------------------------------------

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry, index) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							entry.target.classList.add("reveal-card");
						}, index * 450); // 100ms delay for each card
					}
				});
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.1,
			}
		);

		document.querySelectorAll(".projects .card").forEach((card) => {
			card.classList.add("slide-reveal-card"); // Initial state
			observer.observe(card);
		});

		return () => observer.disconnect();
	}, []);

	// ----------------------------- HEADER + INTRO ANIMATION ---------------------------------------

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
				if (element) {
					element.style.animation =
						"slide-reveal .8s ease forwards .5s";
				}
			}, item.delay);
		});

		return () => timers.forEach((timer) => clearTimeout(timer));
	}, []);

	// ----------------------------- CONTACT ANIMATION ---------------------------------------

	useEffect(() => {
		// Method for handling the majority of elements
		const handleRest = () => {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add("slide-reveal");
						}
					});
				},
				{
					root: null,
					rootMargin: "0px",
					threshold: 0.1,
				}
			);

			const targetsRest = [
				document.querySelector(".contact .top .left"),
				...document.querySelectorAll(".right h5"),
				document.querySelector(".mid a"),
			];

			targetsRest.forEach((target) => {
				if (target) {
					target.classList.add("hide");
					observer.observe(target);
				}
			});

			return () => observer.disconnect();
		};

		// Method for handling bottom elements
		const handleBottom = () => {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add("slide-reveal-bottom");
						}
					});
				},
				{
					root: null,
					rootMargin: "0px",
					threshold: 0, // Different threshold for the bottom elements
				}
			);

			const targetsBottom = [
				document.querySelector(".bottom .left"),
				document.querySelector(".bottom .right"),
			];

			targetsBottom.forEach((target) => {
				if (target) {
					target.classList.add("hide-bottom"); // Different hiding class for the bottom elements
					observer.observe(target);
				}
			});

			return () => observer.disconnect();
		};

		handleRest();
		handleBottom();
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
							<a className="custom-hover">
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
					<Link className="card custom-hover" to={"/kongu"}>
						<img src={Kongu} alt="Kongu" />
						<h3>KONGU</h3>
					</Link>
					<Link className="card custom-hover" to={"/akogare"}>
						<img
							className="home-akogare"
							src={Akogare}
							alt="Akogare"
						/>
						<h3>AKOGARE</h3>
					</Link>
					<Link className="card custom-hover" to={"/nakama"}>
						<img
							className="home-nakama"
							src={Nakama}
							alt="Nakama"
						/>
						<h3>NAKAMA</h3>
					</Link>
				</div>
			</section>
			<section className="approach">
				<div className="left">
					<h2>Approach</h2>
				</div>
				<div className="right">
					<h3>{wordsApproach}</h3>
				</div>
			</section>
			<section className="capabilities">
				<div className="left">
					<h2>Skillset</h2>
				</div>
				<div className="right">
					<h3>{content}</h3>
				</div>
			</section>
			<section className="contact" id="contact">
				<div className="contact-reveal-container">
					<div className="top">
						<div className="left contact-reveal">
							<h2>Contact</h2>
							<img src={arrowDown} alt="arrowDown" />
						</div>
						<div className="right">
							<h5 className="custom-hover contact-reveal">
								<a
									href="https://twitter.com/AltoWeb3"
									target="blank_"
								>
									Twitter
								</a>
							</h5>
							<h5 className="custom-hover contact-reveal">
								<a
									href="https://github.com/Web3alto"
									target="blank_"
								>
									Github
								</a>
							</h5>
							<h5 className="custom-hover contact-reveal">
								<a
									href="https://discordapp.com/users/1001219015521345656"
									target="blank_"
								>
									Discord
								</a>
							</h5>
						</div>
					</div>
					<div className="mid">
						<a
							href="mailto:web3alto@gmail.com"
							className="custom-hover contact-reveal"
						>
							<h1>LET'S CONNECT</h1>
						</a>
					</div>
					<div className="bottom">
						<div className="left contact-reveal">
							<h4>©All Rights Reserved Altoweb3</h4>
						</div>
						<div className="right contact-reveal">
							<h1>ALTO</h1>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default transition(Home);
