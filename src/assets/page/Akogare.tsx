import { useEffect, useLayoutEffect } from "react";
// ------------------------------------------------------
import "../style/page/Akogare.css";
// ------------------------------------------------------
import transition from "../components/transition";
import NavBar from "../components/navBar";
// ------------------------------------------------------
import arrowDown from "../img/arrow-down.png";
import akogareBgVid from "../video/_AKGR_Website.mp4";
import akogareGallery from "../img/Akogare_Gallery.png";

function Akogare() {
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
						Akogare is a unique take on Web3 that combines art,
						community and storytelling to create a new genre of
						media and
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
					<a href="" target="blank_">
						<button className="slide-reveal-a custom-hover">
							Coming Soon
						</button>
					</a>
				</div>

				<div className="bg-a">
					<video
						src={akogareBgVid}
						autoPlay
						muted
						loop
						playsInline
					></video>
				</div>
			</section>
			<section className="challenge-a">
				<h2>The Challenge</h2>
				<p>
					The challenge with Kongu was to translate their vision into
					a fully functional and responsive website. We aimed to
					connect imagination to reality establishing Kongu's
					relevance and credibility for enthusiasts and investors
					alike.
				</p>
				<img src={akogareGallery} alt="akogareGallery" />
			</section>
		</>
	);
}

export default transition(Akogare);
