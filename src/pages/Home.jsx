import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";
import { Videos } from "../assets/data/videos";

export function Home() {
	return (
		<>
			<Navbar />

			<div className="my-items">
				<section className="flex" style={{ height: "100%" }}>
					<aside
						className="pt-[15px]"
						style={{
							width: "245px",
							maxWidth: "245px",
							minWidth: "245px",
							borderRight: "1px solid",
							height: "100%",
						}}
					>
						Sidebar
						<div className="h-100">Filters</div>
					</aside>
					<main>
						<div className="item-container">
							<div className="hero-background-x">
								{/* <img
								src="/assets/images/bgs/big3_v3.jpg"
								alt="hero image"
								width="100%"
								height="300px"
								className="mx-auto pt-[100px] "
							/> */}
								<h1 className="text-5xl py-[50px] ps-[50px]">Welcome to the Match Database</h1>
							</div>

							<div className="flex flex-wrap gap-[20px] px-[50px]">
								{/* <iframe
									width="390"
									height="235"
									src="https://www.youtube.com/embed/9_3APf0X_-8"
									title="Jannik Sinner v Alexander Zverev Full Match | Australian Open 2025 Final"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerpolicy="strict-origin-when-cross-origin"
									allowfullscreen
								></iframe>
								<iframe
									width="390"
									height="235"
									src="https://www.youtube.com/embed/JFwsha7u1IE?list=PL_2A0MxHOgda-1tlPgByVmCY2Ril6gMCQ"
									title="Caroline Wozniacki vs. Nao Hibino Full Match | 2024 US Open Round 1"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									referrerpolicy="strict-origin-when-cross-origin"
									allowfullscreen
								></iframe> */}
								{Videos.map((x) => {
									return <VideoCard id={x.youtube_id} title={x.title} />;
								})}
							</div>
						</div>
					</main>
				</section>
			</div>
		</>
	);
}
