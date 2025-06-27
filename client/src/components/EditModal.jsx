import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import VideoEditForm from "./VideoEditForm";

export default function EditModal({ editModalOpen, closeEditModal, editData }) {
	function handleSubmit() {}
	return (
		<>
			<Modal
				show={editModalOpen}
				onHide={closeEditModal}
				centered
				backdrop="static"
				aria-labelledby="video modal"
				dialogClassName="modal-50w"
			>
				<Modal.Header closeButton>
					<Modal.Title>Edit Video</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="flex justify-center" style={{ maxWidth: "1280px" }}>
						<VideoEditForm onFormSubmit={handleSubmit} editData={editData} />
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" form="video-form" type="submit">
						Save
					</Button>
					<Button variant="secondary" onClick={closeEditModal}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
