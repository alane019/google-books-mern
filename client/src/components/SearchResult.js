import React, { useState } from "react";
import { Card, CardTitle, CardImg, CardBody, Button } from "reactstrap";
import api from "../utils/API.js";

const ResultCard = ({
	image,
	title,
	description,
	authors,
	previewLink,
	googleId,
	pdf,
	webReaderLink,
	pdfIsAvailable,
	previewLinkText,
}) => {
	let book = {
		image,
		title,
		description,
		authors,
		previewLink,
		googleId,
		pdf,
		webReaderLink,
		pdfIsAvailable,
	};

	const [notifPanelDisplay, setNotifPanelDisplay] = useState("none");
	const [notifOpacity, setNotifOpacity] = useState(1);

	console.log({ book });

	const handleClick = () => {
		console.log(book);
		api
			.addBook(book)
			.then((res) => console.log(res))
			.catch((err) => console.error(err));

		setTimeout(() => {
			setNotifOpacity(0.35);
			setTimeout(() => {
				setNotifOpacity(0.15);
				setTimeout(() => {
					setNotifPanelDisplay("none");
					setNotifOpacity(1);
				}, 100);
			}, 100);
		}, 3000);
		setNotifPanelDisplay("block");
	};

	return (
		<Card
			style={{ maxHeight: "350", maxWidth: "300px" }}
			className="flex-parent card-item"
		>
			<CardImg
				top
				style={{
					margin: "5px",
					marginLeft: "75px",
					marginRight: "75px",
					width: "150px",
					maxHeight: "200px",
				}}
				src={image}
				alt={title}
			/>
			<CardBody>
				<CardTitle className="card-title">{title}</CardTitle>
				<div className="details descr truncate-overflow">{description}</div>
				<div className="details info-link buttons-con action-link-wrap">
					<a
						href={previewLink}
						className="btn-link"
						color="default"
						type="button"
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						{previewLinkText}
					</a>
				</div>
				<br></br>
				<div className="details">
					<div>
						{" "}
						<span> Authors: {authors} </span>{" "}
					</div>
				</div>
				<div>
					{/* Save button */}
					<Button
						className="save-btn"
						onClick={(e) => handleClick(e.target.id)}
						color="primary"
					>
						Save
					</Button>
					{/* Notification panel for save button */}
					<div
						style={{ display: notifPanelDisplay, opacity: notifOpacity }}
						id="notif-panel"
					>
						✔ Saved!
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default ResultCard;
