import CustomVideos from "../components/CustomVideos";

export default function Profile() {
	const myId = "https://my-tennis-videos.s3.us-east-2.amazonaws.com/JF_Serving_AHS_12092024.mp4";
	return (
		<div className="body-container">
			<main className="content-container bg-gray-custom">
				<h1 style={{ textAlign: "center" }}>Profile page</h1>
				<section
					className="player-sections d-flex justify-content-center"
					style={{ color: "#fff", gap: "20px" }}
				>
					<CustomVideos id={myId} title="Serving Dec. 2024 - AHS" />
				</section>
			</main>
		</div>
	);
}
