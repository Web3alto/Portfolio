import { useEffect } from "react";
// ------------------------------------------------------
import "../style/page/Akogare.css";
// ------------------------------------------------------
import transition from "../components/transition";
import NavBar from "../components/navBar";
// ------------------------------------------------------
import arrowDown from "../img/arrow-down.png";
import akogareBgVid from "../video/_AKGR_Website.mp4";
import akogareGallery from "../img/Akogare_Gallery.png";

function Kongu() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<NavBar />
			<section className="akogare">
				<h1>AKOGARE</h1>
				<p>
					Akogare is a unique take on Web3 that combines art,
					community and storytelling to create a new genre of media
					and
				</p>

				<div className="about">
					<div className="client">
						<div className="title">
							<h2>Client</h2>
							<img src={arrowDown} alt="arrowDown" />
						</div>

						<p>Akogare</p>
					</div>
					<div className="role">
						<div className="title">
							<h2>Role</h2>
							<img src={arrowDown} alt="arrowDown" />
						</div>

						<p>Development & PFP generator Engineering</p>
					</div>
					<div className="date">
						<div className="title">
							<h2>Date</h2>
							<img src={arrowDown} alt="arrowDown" />
						</div>

						<p>Apr 2023 - Present</p>
					</div>
					<a href="" target="blank_">
						<button>Coming Soon</button>
					</a>
				</div>

				<div className="bg">
					<video
						src={akogareBgVid}
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
					<img src={akogareGallery} alt="akogareGallery" />
				</section>
			</section>
		</>
	);
}

export default transition(Kongu);
