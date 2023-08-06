import { useEffect } from "react";
// ------------------------------------------------------
import "../style/page/Kongu.css";
// ------------------------------------------------------
import transition from "../components/transition";
import NavBar from "../components/navBar";
// ------------------------------------------------------
import arrowDown from "../img/arrow-down.png";
import konguBgVid from "../video/BgVid.mp4";
// import aboutKongu from "../img/About.png";
// import galleryKongu from "../img/Gallery.png";
import treehouseKongu from "../video/Treehouse.mp4";

function Kongu() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<NavBar />
			<section className="kongu">
				<h1>KONGU</h1>
				<p>
					350 unique art pieces which grant you an invitation to The
					Treehouse, an exclusively vetted community of individuals
					who collectively stand by the equality principle of
					#WeAllEat.
				</p>

				<div className="about">
					<div className="client">
						<div className="title">
							<h2>Client</h2>
							<img src={arrowDown} alt="arrowDown" />
						</div>

						<p>Kongu</p>
					</div>
					<div className="role">
						<div className="title">
							<h2>Role</h2>
							<img src={arrowDown} alt="arrowDown" />
						</div>

						<p>Design and Developement</p>
					</div>
					<div className="date">
						<div className="title">
							<h2>Date</h2>
							<img src={arrowDown} alt="arrowDown" />
						</div>

						<p>Dec 2022 - March 2023</p>
					</div>
					<a href="https://kongu.io/" target="blank_">
						<button>Launch Site</button>
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

					{/* <img src={aboutKongu} alt="aboutKongu" />
					<img src={galleryKongu} alt="galleryKongu" />*/}
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
