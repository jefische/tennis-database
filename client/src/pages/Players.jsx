import Carousel from "react-bootstrap/Carousel";
import PlayerVideoCard from "../components/PlayerVideoCard";

export default function Players() {
	const myWidth = "200px";
	return (
		<>
			<div className="body-container">
				<main className="content-container bg-gray-custom">
					<section className="hero-container">
						<div className="herolist">
							<Carousel fade style={{ height: "100%" }} pause="hover" controls={false} indicators={false}>
								<Carousel.Item interval={5000}>
									<img src="/bgs/novak_1920x1226.jpg" alt="hero image" />
								</Carousel.Item>
								<Carousel.Item interval={5000}>
									<img src="/bgs/big3.jpeg" alt="hero image" />
								</Carousel.Item>
								<Carousel.Item interval={5000}>
									<img src="/bgs/novak_640x408.jpg" alt="hero image" />
								</Carousel.Item>
							</Carousel>
							<div id="billboard-gradient"></div>
						</div>
					</section>
					<h1
						style={{
							marginTop: "50px",
							backgroundColor: "#ccc",
							textAlign: "center",
						}}
					>
						Individual Players Video Section
					</h1>

					<div className="player-videoContainer">
						<h2 style={{ color: "#fff" }}>Stanislas Wawrinka</h2>
						<div className="player-videoContainer-mobile">
							<PlayerVideoCard id="97B2panmUvU" description="Wawrinka" maxWidth={myWidth} />
							<PlayerVideoCard id="_cohjbquvwc" description="Wawrinka" maxWidth={myWidth} />
							<PlayerVideoCard id="RDl2Kz0gd18" description="Wawrinka" maxWidth={myWidth} />
							<PlayerVideoCard id="zYqtCPvGf4Y" description="Wawrinka" maxWidth={myWidth} />
							<PlayerVideoCard id="hUuj7AoOWpc" description="Wawrinka" maxWidth={myWidth} />
							<PlayerVideoCard id="_FBLXOaSAsU" description="Wawrinka" maxWidth={myWidth} />
							<PlayerVideoCard id="Re-8_POaRIw" description="Wawrinka" maxWidth={myWidth} />
							<PlayerVideoCard id="SlgMvQQrYhg" description="Wawrinka" maxWidth={myWidth} />
							<PlayerVideoCard id="wWCVFRRaFCs" description="Wawrinka" maxWidth={myWidth} />
							<PlayerVideoCard id="mx3eA5P-3nA" description="Wawrinka" maxWidth={myWidth} />
							<PlayerVideoCard id="q3J2P8on7js" description="Wawrinka" maxWidth={myWidth} />
							<PlayerVideoCard id="_7gd-XJRiEQ" description="Wawrinka" maxWidth={myWidth} />
						</div>
						<Carousel interval={null}>
							<Carousel.Item>
								<div className="carousel-item-container">
									<PlayerVideoCard id="97B2panmUvU" description="Wawrinka" maxWidth={myWidth} />
									<PlayerVideoCard id="_cohjbquvwc" description="Wawrinka" maxWidth={myWidth} />
									<PlayerVideoCard id="RDl2Kz0gd18" description="Wawrinka" maxWidth={myWidth} />
									<PlayerVideoCard id="zYqtCPvGf4Y" description="Wawrinka" maxWidth={myWidth} />
									<PlayerVideoCard id="hUuj7AoOWpc" description="Wawrinka" maxWidth={myWidth} />
									<PlayerVideoCard id="_FBLXOaSAsU" description="Wawrinka" maxWidth={myWidth} />
								</div>
							</Carousel.Item>
							<Carousel.Item>
								<div className="carousel-item-container">
									<PlayerVideoCard id="Re-8_POaRIw" description="Wawrinka" maxWidth={myWidth} />
									<PlayerVideoCard id="SlgMvQQrYhg" description="Wawrinka" maxWidth={myWidth} />
									<PlayerVideoCard id="wWCVFRRaFCs" description="Wawrinka" maxWidth={myWidth} />
									<PlayerVideoCard id="mx3eA5P-3nA" description="Wawrinka" maxWidth={myWidth} />
									<PlayerVideoCard id="q3J2P8on7js" description="Wawrinka" maxWidth={myWidth} />
									<PlayerVideoCard id="_7gd-XJRiEQ" description="Wawrinka" maxWidth={myWidth} />
								</div>
							</Carousel.Item>
						</Carousel>
					</div>

					<section className="player-sections">Player Content</section>
					<section className="player-sections">Player Content</section>
					<section className="player-sections">Player Content</section>
					<section className="player-sections">Player Content</section>
					<section className="player-sections">Player Content</section>
					<section className="player-sections">Player Content</section>
				</main>
			</div>
		</>
	);
}
