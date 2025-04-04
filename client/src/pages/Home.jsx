import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";
import AddVideo from "../components/AddVideo";
import Sidebar from "../components/Sidebar";
import { Videos } from "../assets/data/videos";
import { useState, useEffect } from "react";

import { Fragment } from "react";

export function Home() {
	const [ytVideos, setVideos] = useState([]);
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/api/items")
			.then((response) => response.json())
			.then((data) => setVideos(data))
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	return (
		<>
			<Navbar />

			<div className="body-container">
				<section className="flex" style={{ height: "100%" }}>
					<Sidebar setVideos={setVideos} />
					<main>
						<div className="content-container px-[50px]">
							<div className="hero-background">
								{/* <img
								src="/assets/images/bgs/big3_v3.jpg"
								alt="hero image"
								width="100%"
								height="300px"
								className="mx-auto pt-[100px] "
								/> */}
								<h1 className="text-5xl py-[50px]">
									Welcome to the Match Database
								</h1>
							</div>
							<div className="flex flex-wrap gap-[25px] mb-[50px]">
								{ytVideos.map((x) => {
									return (
										<VideoCard key={x.myID} id={x.youtube_id} title={x.title} />
									);
								})}
								<AddVideo />
							</div>
						</div>
					</main>
				</section>
			</div>
		</>
	);
}
