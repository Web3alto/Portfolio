import { useEffect, useLayoutEffect } from "react";
// ------------------------------------------------------
import "../style/page/Nakama.css";
// ------------------------------------------------------
import transition from "../components/transition";
import NavBar from "../components/navBar";
// ------------------------------------------------------
import arrowDown from "../img/arrow-down.png";
import nakamaBG from "../img/NakamaBG.png";
import treehouseKongu from "../video/Treehouse.mp4";

function Nakama() {
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
						Nakama is a unique take on Web3 that combines art,
						community and storytelling to create a new genre of
						media and
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
					<a href="" target="blank_">
						<button className="slide-reveal-n custom-hover">
							Coming Soon
						</button>
					</a>
				</div>

				<div className="bg-n">
					<img src={nakamaBG} alt="nakamaBG" />
				</div>
			</section>
			<section className="challenge-n">
				<h2>The Challenge</h2>
				<p>
					The challenge with Kongu was to translate their vision into
					a fully functional and responsive website. We aimed to
					connect imagination to reality establishing Kongu's
					relevance and credibility for enthusiasts and investors
					alike.
				</p>
				<img src={treehouseKongu} alt="akogareGallery" />
			</section>
		</>
	);
}

export default transition(Nakama);
