import { useState } from "react";

export default function YearFilters({ initFilters, formData, handleChange }) {
	// isActive state is used to manage the accordion dropdown filters in the sidebar
	const [isActive, setIsActive] = useState(true);

	const years = Object.entries(initFilters).filter((key, value) => {
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
							let name = x[0];
							let count = x[1].count;
							return (
								<li key={name}>
									<input
										type="checkbox"
										name={name}
										checked={formData[name] == undefined ? true : formData[name].include}
										onChange={handleChange}
									/>
									<label htmlFor={name}>
										{name} ({count})
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
