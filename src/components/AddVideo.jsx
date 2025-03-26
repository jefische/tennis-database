import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Fragment, useState } from "react";

export default function AddVideo({ id, title }) {
	const [modalIsOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
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
				// dialogClassName="modal-90w"
			>
				<Modal.Header closeButton>
					<Modal.Title>Add New Video</Modal.Title>
				</Modal.Header>
				<Modal.Body className="flex flex-col 2xl:flex-row gap-[20px]">
					<div className="col" style={{ maxWidth: "1280px" }}>
						<form action="" className="flex flex-col gap-[20px] items-end" style={{ maxWidth: "70%" }}>
							<div className="flex gap-[20px]">
								<label htmlFor="">Tournament</label>
								<input type="text" />
							</div>
							<div className="flex gap-[20px]">
								<label htmlFor="">Year</label>
								<input type="text" />
							</div>
							<div className="flex gap-[20px]">
								<label htmlFor="">Round</label>
								<input type="text" />
							</div>
							<div className="flex gap-[20px]">
								<label htmlFor="">Youtube ID</label>
								<input type="text" />
							</div>
							<div className="flex gap-[20px]">
								<label htmlFor="">Player 1</label>
								<input type="text" />
							</div>
							<div className="flex gap-[20px]">
								<label htmlFor="">Player 2</label>
								<input type="text" />
							</div>
							<div className="flex gap-[20px]">
								<label htmlFor="">Title</label>
								<input type="text" />
							</div>
						</form>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeModal}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</Fragment>
	);
}
