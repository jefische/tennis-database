import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Fragment, useState } from "react";
import { useRef } from "react";

export default function AddVideo() {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [formValidated, setValidation] = useState(false);
	const [roundSelection, setRound] = useState("");
	const myRef = useRef(null);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	async function saveVideo(e) {
		e.preventDefault();
		// const formData = new FormData(myRef.current);
		const formData = new FormData(e.target);
		setValidation(true);
		if (formData.checkValidity() === false) {
			e.stopPropagation();
		} else {
			alert(`Form submitted`);
		}
		// console.log(e);
		// console.log(formData.get("round"));
		// console.log(formData2);
		// console.log(formData2.get("year"));

		// await fetch("../data/video.js", { method: "POST", mode: "no-cors" })
		// 	// comment the .then out if you want to see debug from this function
		// 	// otherwise, it will redirect when you submit
		// 	.then((response) => {
		// 		if (response.status === 0) {
		// 			console.log("response sent successfully"); //opaque response
		// 		} else {
		// 			console.log(response);
		// 			alert(
		// 				"Something went wrong, try again. If the problem persists, check that the site is configured properly.",
		// 			);
		// 			throw new Error("Form failed to submit");
		// 		}
		// 	});
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
							className={`add-video ${formValidated ? "was-validated" : ""}`}
							style={{ maxWidth: "800px" }}
							ref={myRef}
							method="post"
							noValidate
							onSubmit={saveVideo}
						>
							<div className="row">
								<div className="col">
									<label className="form-label" htmlFor="tournament">
										Tournament
									</label>
									<select className="form-select" name="tournament" id="tournament" defaultValue={""} required>
										<option disabled value="">
											Choose...
										</option>
										<option value="AO">Australian Open</option>
										<option value="FO">French Open</option>
										<option value="Wimby">Wimbledon</option>
										<option value="USO">US Open</option>
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
										placeholder="2000"
										name="year"
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
										value={roundSelection}
										onChange={(e) => setRound(e.currentTarget)}
										required
									>
										<option disabled value="">
											Choose...
										</option>
										<option value="1">1st</option>
										<option value="2">2nd</option>
										<option value="3">3rd</option>
										<option value="4">4th</option>
										<option value="quarters">Quarterfinals</option>
										<option value="semis">Semifinals</option>
										<option value="finals">Finals</option>
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
								/>
								<div className="invalid-feedback">Please enter a video title.</div>
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
