import { useState } from "react";

export default function TournamentFilters({ initFilters, formData, handleChange }) {
	// isActive state is used to manage the accordion dropdown filters in the sidebar
	const [isActive, setIsActive] = useState(true);

	return (
		<div className="accordion-rjs">
			<div className="accordion-item-rjs">
				<div className="accordion-title-rjs" onClick={() => setIsActive(!isActive)}>
					<h6>Tournament</h6>
					<div className="expand pe-[10px]">{isActive ? "-" : "+"}</div>
				</div>
				<div className={`accordion-content-rjs ${isActive ? "block" : "hidden"}`}>
					<ul className="filter">
						{Object.entries(initFilters).map((key, value) => {
							let name = key[1].title.replace(/\s/g, "");
							let title = key[1].title;
							let count = key[1].count;
							if (name == "year") {
								return;
							} else {
								return (
									<li key={value}>
										<input
											type="checkbox"
											name={name}
											checked={formData[name] == undefined ? true : formData[name].include}
											onChange={handleChange}
										/>
										<label htmlFor={name}>
											{title} ({count})
										</label>
									</li>
								);
							}
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
