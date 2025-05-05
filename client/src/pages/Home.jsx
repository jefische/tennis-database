import VideoCard from "../components/VideoCard";
import AddVideo from "../components/AddVideo";
import Sidebar from "../components/Sidebar";
import { useState, useEffect } from "react";

export function Home() {
	const [ytVideos, setVideos] = useState([]);
	const [allVideos, setAllVideos] = useState([]);
	// let allVideos = [];
	// const isProduction = true;
	// const isProduction = import.meta.env.VITE_NODE_ENV === "production";
	const isProduction = import.meta.env.PROD;
	const baseURL = isProduction ? "https://tennis-database.fly.dev" : "http://localhost:8080";

	useEffect(() => {
		fetch(`${baseURL}/api/items`)
			.then((response) => response.json())
			.then((data) => {
				setVideos(data);
				setAllVideos(data);
				console.log(allVideos);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	return (
		<>
			<div className="body-container">
				<section className="flex bg-gray-custom" style={{ height: "100%" }}>
					<Sidebar allVideos={allVideos} setVideos={setVideos} />
					<main>
						<div className="content-container px-[50px]">
							<h1 className="text-5xl py-[50px]">Welcome to the Match Database</h1>
							<div className="flex flex-wrap gap-[25px] mb-[50px]">
								{ytVideos.map((x) => {
									return <VideoCard key={x._id} id={x.youtube_id} title={x.title} />;
								})}
								{!isProduction && <AddVideo />}
							</div>
						</div>
					</main>
				</section>
			</div>
		</>
	);
}
