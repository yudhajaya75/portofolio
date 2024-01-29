import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./salt-academy.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Salt Academy (Bootcamps)</div>
							<div className="work-subtitle">
								Full-Stack Javascript
							</div>
							<div className="work-duration">2023 Feb - 2023 Okt</div>
						</div>

						<div className="work">
							<img
								src="./erajaya-Logo.jpg "
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Erajaya Plaza</div>
							<div className="work-subtitle">
								Operator CCTV
							</div>
							<div className="work-duration">2021 Feb - 2022 July</div>
						</div>

						<div className="work">
							<img
								src="./erajaya-Logo.jpg "
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">PT Professtama Development Group</div>
							<div className="work-subtitle">
								IT Support
							</div>
							<div className="work-duration">2018 July - 2019 Agust</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
