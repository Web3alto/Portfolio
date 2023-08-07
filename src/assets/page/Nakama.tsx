import { useEffect } from "react";
// ------------------------------------------------------
import "../style/page/Nakama.css";
// ------------------------------------------------------
import transition from "../components/transition";
import NavBar from "../components/navBar";
// ------------------------------------------------------
import arrowDown from "../img/arrow-down.png";
import konguBgVid from "../video/BgVid.mp4";
import treehouseKongu from "../video/Treehouse.mp4";

function Kongu() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<NavBar />
			<section className="nakama">
				<h1>NAKAMA</h1>
				<p>
					Nakama is a unique take on Web3 that combines art, community
					and storytelling to create a new genre of media and
				</p>

				<div className="about">
					<div className="client">
						<div className="title">
							<h2>Client</h2>
							<img src={arrowDown} alt="arrowDown" />
						</div>

						<p>Nakama</p>
					</div>
					<div className="role">
						<div className="title">
							<h2>Role</h2>
							<img src={arrowDown} alt="arrowDown" />
						</div>

						<p>Developement</p>
					</div>
					<div className="date">
						<div className="title">
							<h2>Date</h2>
							<img src={arrowDown} alt="arrowDown" />
						</div>

						<p>May 2023 - Present</p>
					</div>
					<a href="https://kongu.io/" target="blank_">
						<button>Coming Soon</button>
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
				<section className="challenge">
					<h2>The Challenge</h2>
					<p>
						The challenge with Kongu was to translate their vision
						into a fully functional and responsive website. We aimed
						to connect imagination to reality establishing Kongu's
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
			</section>
		</>
	);
}

export default transition(Kongu);
