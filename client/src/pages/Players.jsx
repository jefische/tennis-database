import novak from "../assets/images/bgs/novak_1920x1226.jpg";

export default function Players() {
	return (
		<>
			<div className="body-container">
				<main className="content-container bg-gray-custom">
					<div className="hero-container">
						<ul className="herolist">
							<li className="hero1">
								<img src={novak} alt="hero image" />
							</li>
							<div id="billboard-gradient"></div>
						</ul>
					</div>
					<h1 style={{ marginTop: "auto" }}>Individual Players Video Section</h1>
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
