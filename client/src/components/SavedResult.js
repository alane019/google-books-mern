import React from "react";
import { Card, CardTitle, CardImg, CardBody } from "reactstrap";

//This is a result card that will load with data for books saved to the application database

const ResultCard = ({
	thumbnail,
	title,
	description,
	authors,
	previewLink,
}) => {
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
				src={thumbnail}
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
						View on Google Books
					</a>
				</div>

				<br></br>
				<div className="details">
					{" "}
					<i> Authors: {authors} </i>{" "}
				</div>
			</CardBody>
		</Card>
	);
};

export default ResultCard;
