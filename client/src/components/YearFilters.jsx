import { useState } from "react";

export default function YearFilters({ initFilters, allVideos, setFormData, formData }) {
	// isActive state is used to manage the accordion dropdown filters in the sidebar
	const [isActive, setIsActive] = useState(true);

	const handleChange = (e) => {
		const { name, checked } = e.target;
		setFormData({
			...formData,
			[name]: {
				...formData[name],
				include: checked,
			},
		});
	};

	const years = allVideos.reduce((acc, x) => {
		let val = x.year;
		if (!acc.includes(val)) {
			acc.push(val);
			acc.sort();
		}
		return acc;
	}, []);

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
								<li>
									<input
										type="checkbox"
										name={x}
										checked={Object.keys(formData).length === 0 ? true : formData[x].include}
										onChange={handleChange}
									/>
									<label htmlFor={x}>{x}</label>
								</li>
							);
						})}
						{/* <li>
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
						</li> */}
					</ul>
				</div>
			</div>
		</div>
	);
}
