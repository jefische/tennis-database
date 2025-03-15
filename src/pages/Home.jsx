import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";
import Sidebar from "../components/Sidebar";
import { Videos } from "../assets/data/videos";
import { useState } from "react";

import { Fragment } from "react";

export function Home() {
	const [ytVideos, setVideos] = useState(Videos);

	return (
		<>
			<Navbar />

			<div className="body-container">
				<section className="flex" style={{ height: "100%" }}>
					<Sidebar setVideos={setVideos} />
					<main>
						<div className="content-container ps-[50px]">
							<div className="hero-background">
								{/* <img
								src="/assets/images/bgs/big3_v3.jpg"
								alt="hero image"
								width="100%"
								height="300px"
								className="mx-auto pt-[100px] "
								/> */}
								<h1 className="text-5xl py-[50px]">Welcome to the Match Database</h1>
							</div>
							<div className="flex flex-wrap gap-[25px] mb-[50px]">
								{ytVideos.map((x) => {
									return (
										<Fragment key={x.myID}>
											<VideoCard id={x.youtube_id} title={x.title} />
										</Fragment>
									);
								})}
							</div>
						</div>
					</main>
				</section>
			</div>
		</>
	);
}
