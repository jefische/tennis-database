import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Fragment, useState } from "react";

export default function VideoCard({ id, title }) {
	const [modalIsOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	return (
		<Fragment>
			<div className="card-cover">
				<div
					className="header-background"
					onClick={openModal}
					style={{
						backgroundImage: `url(http://img.youtube.com/vi/${id}/0.jpg)`,
					}}
				></div>
				<p>{title}</p>
			</div>
			<Modal
				show={modalIsOpen}
				onHide={closeModal}
				centered
				backdrop="static"
				aria-labelledby="video modal"
				dialogClassName="modal-90w"
			>
				<Modal.Header closeButton>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ height: "80vh" }} className="flex flex-col 2xl:flex-row gap-[20px]">
					<div className="col" style={{ maxWidth: "1280px" }}>
						<iframe
							height="100%"
							width="100%"
							src={`https://www.youtube.com/embed/${id}`}
							title={title}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						></iframe>
					</div>
					<p>This is the body of the modal</p>
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
