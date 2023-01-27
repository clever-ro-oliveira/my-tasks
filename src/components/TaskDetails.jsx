import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
	const params = useParams();
	const navigate = useNavigate();

	const handleBackButtonClick = () => {
		navigate(-1);
	};

	return (
		<>
			<div className="back-button-container">
				<Button onClick={handleBackButtonClick}>Voltar</Button>
			</div>
			<div className="task-details-container">
				<h2>{params.taskTitle}</h2>
				<p>
					{params.taskTitle} refers to consectetur adipiscing elit. Cras non quam sed turpis tincidunt feugiat. Phasellus sit amet purus faucibus velit ullamcorper semper. Aliquam lobortis erat molestie accumsan accumsan. Quisque convallis volutpat malesuada. Curabitur accumsan magna quam, ut viverra sem posuere ac. Morbi sit amet vestibulum sapien, at dictum ante. Suspendisse id elit tortor. Nulla eget odio sed magna rhoncus congue.
				</p>
			</div>
		</>
	);
};

export default TaskDetails;