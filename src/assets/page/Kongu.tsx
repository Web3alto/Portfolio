import { useEffect, useLayoutEffect } from "react";
// ------------------------------------------------------
import "../style/page/Kongu.css";
// ------------------------------------------------------
import transition from "../components/transition";
import NavBar from "../components/navBar";
// ------------------------------------------------------
import arrowDown from "../img/arrow-down.png";
import konguBgVid from "../video/BgVid.mp4";
import treehouseKongu from "../video/Treehouse.mp4";

function Kongu() {
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

	useEffect(() => {
		window.scrollTo(0, 0);
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
					<a href="https://kongu.io/" target="blank_">
						<button className="slide-reveal custom-hover">
							Launch Site
						</button>
					</a>
				</div>

				<div className="bg">
					<video
						src={konguBgVid}
						autoPlay
						muted
						loop
						playsInline
					></video>
				</div>
			</section>
			<section className="challenge">
				<h2>The Challenge</h2>
				<p>
					The challenge with Kongu was to translate their vision into
					a fully functional and responsive website. We aimed to
					connect imagination to reality establishing Kongu's
					relevance and credibility for enthusiasts and investors
					alike.
				</p>
				<video
					src={treehouseKongu}
					autoPlay
					muted
					loop
					playsInline
				></video>
			</section>
		</>
	);
}

export default transition(Kongu);
