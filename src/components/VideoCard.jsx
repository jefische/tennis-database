export default function VideoCard({ id, title }) {
	return (
		<>
			<div className="iframe-container">
				<div className="myHover">
					<iframe
						width="100%"
						height="235"
						src={`https://www.youtube.com/embed/${id}`}
						allowFullScreen
						loading="lazy"
					></iframe>
				</div>
				<h2>{title}</h2>
			</div>
		</>
	);
}
