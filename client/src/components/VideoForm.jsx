import { useState, useRef, forwardRef } from "react";

const fData = {
	tournament: "",
	year: 2025,
	youtubeid: "",
	round: "",
	player1: "",
	player2: "",
	title: "",
};

export default function VideoForm({ onFormSubmit }) {
	const [formData, setFormData] = useState(fData);
	const [formValidated, setValidation] = useState(false);
	const formRef = useRef(null);

	async function saveVideo(e) {
		// const formData = new FormData(formRef.current);
		// const formData = new FormData(e.target);
		if (formRef.current.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		} else {
			onFormSubmit(); // Calls parent function to update state
		}
		setValidation(true);
	}

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form
			action="/data/videos"
			id="video-form"
			className={`add-video ${formValidated ? "was-validated" : ""}`}
			style={{ maxWidth: "800px" }}
			ref={formRef}
			method="post"
			noValidate
			onSubmit={saveVideo}
		>
			<div className="row">
				<div className="col">
					<label className="form-label" htmlFor="tournament">
						Tournament
					</label>
					<select
						className="form-select"
						name="tournament"
						id="tournament"
						value={formData.tournament}
						onChange={handleChange}
						required
					>
						<option disabled value="">
							Choose...
						</option>
						<option value="Australian Open">Australian Open</option>
						<option value="French Open">French Open</option>
						<option value="Wimbledon">Wimbledon</option>
						<option value="US Open">US Open</option>
					</select>
					<div className="invalid-feedback">Please enter a tournament.</div>
				</div>
				<div className="col">
					<label className="form-label" htmlFor="year">
						Year
					</label>
					<input
						className="form-control"
						type="number"
						min="1970"
						max="2025"
						step="1"
						name="year"
						value={formData.year}
						onChange={handleChange}
						required
					/>
					<div className="invalid-feedback">Please enter a year.</div>
				</div>
			</div>

			<div className="row">
				<div className="col">
					<label className="form-label" htmlFor="youtubeid">
						Youtube ID
					</label>
					<input
						className="form-control"
						type="text"
						name="youtubeid"
						required
						placeholder="e.g. https://www.youtube.com/embed/{id}"
						value={formData.youtubeid}
						onChange={handleChange}
					/>
					<div className="invalid-feedback">Please enter a valid youtube url.</div>
				</div>
				<div className="col">
					<label className="form-label" htmlFor="round">
						Round
					</label>
					<select
						className="form-select"
						name="round"
						id="round"
						value={formData.round}
						onChange={handleChange}
						required
					>
						<option disabled value="">
							Choose...
						</option>
						<option value="1st">1st</option>
						<option value="2nd">2nd</option>
						<option value="3rd">3rd</option>
						<option value="4th">4th</option>
						<option value="Quarterfinals">Quarterfinals</option>
						<option value="Semifinals">Semifinals</option>
						<option value="Finals">Finals</option>
					</select>
					<div className="invalid-feedback">Please select a round.</div>
				</div>
			</div>

			<div className="row">
				<div className="col">
					<label className="form-label" htmlFor="player1">
						Player 1
					</label>
					<input
						className="form-control"
						type="text"
						name="player1"
						required
						placeholder="e.g. Carlos Alcaraz"
						value={formData.player1}
						onChange={handleChange}
					/>
					<div className="invalid-feedback">Please enter a player name.</div>
				</div>
				<div className="col">
					<label className="form-label" htmlFor="player2">
						Player 2
					</label>
					<input
						className="form-control"
						type="text"
						name="player2"
						required
						placeholder="e.g. Tommy Paul"
						value={formData.player2}
						onChange={handleChange}
					/>
					<div className="invalid-feedback">Please enter a player name.</div>
				</div>
			</div>

			<div>
				<label htmlFor="title">Title</label>
				<input
					className="form-control"
					type="text"
					name="title"
					required
					placeholder="e.g. Jannik Sinner v Alexander Zverev Full Match | Australian Open 2025 Final (2hr 36min)"
					value={formData.title}
					onChange={handleChange}
				/>
				<div className="invalid-feedback">Please enter a video title.</div>
			</div>
		</form>
	);
}
