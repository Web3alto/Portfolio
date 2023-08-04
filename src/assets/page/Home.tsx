import RealTimeClock from "../components/realTime";
import { useNavigate } from "react-router-dom";
// ------------------------------------------------------
import "../style/page/Home.css";
// ------------------------------------------------------
import arrowDown from "../img/arrow-down.png";
import Kongu from "../img/logo-b.png";
import Akogare from "../img/akogare.png";
import Nakama from "../img/nakama.png";

function Home() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/kongu");
	};

	return (
		<>
			<header>
				<h1>ALTO</h1>
			</header>
			<section className="intro">
				<div className="left">
					<h2>Frontend Engineer</h2>
				</div>
				<div className="right">
					<div className="top">
						<div className="contactt">
							<h2>Contact</h2>
							<img src={arrowDown} alt="arrowDown" />
						</div>
						<div className="time">
							<h2>Local Time</h2>
							<img src={arrowDown} alt="arrowDown" />
							<RealTimeClock />
						</div>
					</div>
					<div className="bottom">
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
					<h3>
						Working closely with you to understand your unique needs
						and goals. With an eye for detail and a commitment to
						excellence, we ensure that your project stand out in
						today's competitive landscape.
					</h3>
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
			<section className="contact">
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
					<h1>LET'S CONNECT</h1>
				</div>
				<div className="bottom">
					<div className="left">
						<h3>©All Rights Reserved Altoweb3</h3>
					</div>
					<div className="right">
						<h1>ALTO</h1>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;
