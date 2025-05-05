import { useState } from "react";

export default function YearFilters({ allVideos, setFormData }) {
	// isActive state is used to manage the accordion dropdown filters in the sidebar
	const [isActive, setIsActive] = useState(true);

	const handleChange = (e) => {};

	return (
		<div className="accordion-rjs">
			<div className="accordion-item-rjs">
				<div className="accordion-title-rjs" onClick={() => setIsActive(!isActive)}>
					<h6>Year</h6>
					<div className="expand pe-[10px]">{isActive ? "-" : "+"}</div>
				</div>
				<div className={`accordion-content-rjs ${isActive ? "block" : "hidden"}`}>
					<ul className="filter">
						<li>
							<input type="checkbox" name="2025" checked={true} onChange={handleChange} />
							<label htmlFor="2025">{`2025`}</label>
						</li>
						<li>
							<input type="checkbox" name="2024" checked={true} onChange={handleChange} />
							<label htmlFor="2024">{`2024`}</label>
						</li>
						<li>
							<input type="checkbox" name="2023" checked={true} onChange={handleChange} />
							<label htmlFor="2023">{`2023`}</label>
						</li>
						<li>
							<input type="checkbox" name="2022" checked={true} onChange={handleChange} />
							<label htmlFor="2022">{`2022`}</label>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
