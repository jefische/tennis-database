import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Fragment, useState } from "react";
import { useRef } from "react";

export default function AddVideo() {
	const [modalIsOpen, setIsOpen] = useState(false);
	const myRef = useRef(null);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	async function saveVideo(e) {
		e.preventDefault();
		console.log(e);
		const formData = new FormData(myRef.current);
		const formData2 = new FormData(e.target);
		console.log(formData.get("round"));
		console.log(formData2);
		console.log(formData2.get("year"));

		await fetch("../data/video.js", { method: "POST", mode: "no-cors" })
			// comment the .then out if you want to see debug from this function
			// otherwise, it will redirect when you submit
			.then((response) => {
				if (response.status === 0) {
					console.log("response sent successfully"); //opaque response
				} else {
					console.log(response);
					alert(
						"Something went wrong, try again. If the problem persists, check that the site is configured properly.",
					);
					throw new Error("Form failed to submit");
				}
			});
	}
	return (
		<Fragment>
			<div className="card-cover">
				<div className="header-background card-add-new" onClick={openModal}></div>
				<p>Add New</p>
			</div>
			<Modal
				show={modalIsOpen}
				onHide={closeModal}
				centered
				backdrop="static"
				aria-labelledby="video modal"
				dialogClassName="modal-50w"
			>
				<Modal.Header closeButton>
					<Modal.Title>Add New Video</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="flex justify-center" style={{ maxWidth: "1280px" }}>
						<form
							action="/data/videos"
							id="video-form"
							className="add-video"
							style={{ maxWidth: "600px" }}
							ref={myRef}
							method="post"
							// onSubmit={saveVideo}
						>
							<div>
								<label htmlFor="tournament">Tournament</label>
								<select className="form-select" name="tournament" id="tournament" required>
									<option value="empty">Choose...</option>
									<option value="AO">Australian Open</option>
									<option value="FO">French Open</option>
									<option value="Wimby">Wimbledon</option>
									<option value="USO">US Open</option>
								</select>
							</div>
							<div>
								<label htmlFor="year">Year</label>
								<input
									className="form-control"
									type="number"
									min="1970"
									max="2025"
									step="1"
									placeholder="2000"
									name="year"
									required
								/>
							</div>
							<div>
								<label htmlFor="round">Round</label>
								<select className="form-select" name="round" id="round" required>
									<option value="empty">Choose...</option>
									<option value="1">1st</option>
									<option value="2">2nd</option>
									<option value="3">3rd</option>
									<option value="4">4th</option>
									<option value="quarters">Quarterfinals</option>
									<option value="semis">Semifinals</option>
									<option value="finals">Finals</option>
								</select>
							</div>
							<div>
								<label htmlFor="youtubeid">Youtube ID</label>
								<input
									className="form-control"
									type="text"
									name="youtubeid"
									required
									placeholder="e.g. https://www.youtube.com/embed/{id}"
								/>
							</div>
							<div>
								<label htmlFor="player1">Player 1</label>
								<input
									className="form-control"
									type="text"
									name="player1"
									required
									placeholder="e.g. Carlos Alcaraz"
								/>
							</div>
							<div>
								<label htmlFor="player2">Player 2</label>
								<input
									className="form-control"
									type="text"
									name="player2"
									required
									placeholder="e.g. Tommy Paul"
								/>
							</div>
							<div>
								<label htmlFor="title">Title</label>
								<input className="form-control" type="text" name="title" required />
							</div>
						</form>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" form="video-form" type="submit">
						Save
					</Button>
					<Button variant="secondary" onClick={closeModal}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</Fragment>
	);
}
