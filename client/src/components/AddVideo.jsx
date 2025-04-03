import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import VideoForm from "./VideoForm";
import { Fragment, useState, useEffect } from "react";

export default function AddVideo() {
	const [modalIsOpen, setIsOpen] = useState(false);
	// The Parent (Modal Component) holds the isSubmitted state.
	// The Child (Form Component) triggers setIsSubmitted(true) when the form is submitted.
	// The Parent (Modal Component) updates and displays the submission message instead of the form.
	const [isSubmitted, setIsSubmitted] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	useEffect(() => {
		if (isSubmitted) {
			// const timer = setTimeout(() => {
			// 	setIsSubmitted(false);
			// 	closeModal();
			// }, 3000); // 3 seconds
			// return () => clearTimeout(timer); // Cleanup timer on unmount
		}
	}, [isSubmitted, closeModal]);

	return (
		<Fragment>
			<div className="card-cover">
				<div className="header-background card-add-new" onClick={openModal}></div>
				<p>Add New</p>
			</div>
			{isSubmitted ? (
				<Modal show={true} centered backdrop="static" aria-labelledby="video modal" dialogClassName="modal-30w">
					<Modal.Body>
						<div className="flex justify-center">
							<h2>Form Submission Successful!</h2>
						</div>
					</Modal.Body>
				</Modal>
			) : (
				<>
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
								<VideoForm onFormSubmit={() => setIsSubmitted(true)} />
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
				</>
			)}
		</Fragment>
	);
}
