import Carousel from "react-bootstrap/Carousel";

export default function Players() {
	return (
		<>
			<div className="body-container">
				<main className="content-container bg-gray-custom">
					<section className="hero-container">
						<div className="herolist">
							<Carousel fade style={{ height: "100%" }} pause="hover">
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
