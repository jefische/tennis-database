import { useState } from "react";

export default function YearFilters({ initFilters, formData, handleChange }) {
	// isActive state is used to manage the accordion dropdown filters in the sidebar
	const [isActive, setIsActive] = useState(true);

	const years = Object.entries(initFilters).filter((key, value) => {
		console.log("test key: ");
		if (key[1].title == "year") {
		}
		return key[1].title == "year";
	});

	return (
		<div className="accordion-rjs">
			<div className="accordion-item-rjs">
				<div className="accordion-title-rjs" onClick={() => setIsActive(!isActive)}>
					<h6>Year</h6>
					<div className="expand pe-[10px]">{isActive ? "-" : "+"}</div>
				</div>
				<div className={`accordion-content-rjs ${isActive ? "block" : "hidden"}`}>
					<ul className="filter">
						{years.map((x) => {
							return (
								<li key={x[0]}>
									<input
										type="checkbox"
										name={x[0]}
										checked={Object.keys(formData).length === 0 ? true : formData[x[0]].include}
										onChange={handleChange}
									/>
									<label htmlFor={x[0]}>
										{x[0]} ({x[1].count})
									</label>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}
