import Carousel from "react-bootstrap/Carousel";
import VideoCard from "../components/VideoCard";

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
									<img src="/bgs/novak_1920x1226.jpg" alt="hero image" />
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

					<div className="d-flex ps-5 flex-wrap gap-5 mt-5">
						<VideoCard id="97B2panmUvU" description="Wawrinka" maxWidth={myWidth}></VideoCard>
						<VideoCard id="97B2panmUvU" description="Wawrinka" maxWidth={myWidth}></VideoCard>
						<VideoCard id="97B2panmUvU" description="Wawrinka" maxWidth={myWidth}></VideoCard>
						<VideoCard id="97B2panmUvU" description="Wawrinka" maxWidth={myWidth}></VideoCard>
						<VideoCard id="97B2panmUvU" description="Wawrinka" maxWidth={myWidth}></VideoCard>
						<VideoCard id="97B2panmUvU" description="Wawrinka" maxWidth={myWidth}></VideoCard>
						<VideoCard id="97B2panmUvU" description="Wawrinka" maxWidth={myWidth}></VideoCard>
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
