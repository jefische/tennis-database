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
							<div className=" ">
								<label htmlFor="tournament">Tournament</label>
								<input type="text" name="tournament" className="" />
							</div>
							<div className="">
								<label htmlFor="year">Year</label>
								<input type="text" name="year" className="" />
							</div>
							<div className=" ">
								<label htmlFor="round">Round</label>
								<input type="text" name="round" />
							</div>
							<div className="">
								<label htmlFor="youtubeid">Youtube ID</label>
								<input type="text" name="youtubeid" />
							</div>
							<div className=" ">
								<label htmlFor="player1">Player 1</label>
								<input type="text" name="player1" />
							</div>
							<div className=" ">
								<label htmlFor="player2">Player 2</label>
								<input type="text" name="player2" />
							</div>
							<div className=" ">
								<label htmlFor="title">Title</label>
								<input type="text" name="title" />
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
