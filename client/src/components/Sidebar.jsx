import { useEffect, useState } from "react";
import YearFilters from "./YearFilters";

export default function Sidebar({ allVideos, setVideos }) {
	// isActive state is used to manage the accordion dropdown filters in the sidebar
	const [isActive, setIsActive] = useState(true);
	// formData is used to manage the checkboxes and pass them to form submit for ytVideo filtering and rendering in Home.jsx
	const [formData, setFormData] = useState({});

	let initialData = {};
	allVideos.map((x) => {
		let key = x.tournament.replace(/\s/g, "");
		let year = x.year;
		if (!initialData[key]) {
			initialData[key] = {};
			initialData[key].title = x.tournament;
			initialData[key].year = [x.year];
			initialData[key].count = 1;
			initialData[key].include = true;
		} else {
			let temp = initialData[key].year;
			if (!temp.includes(year)) {
				initialData[key].year.push(year);
			}
			initialData[key].count++;
		}
	});
	useEffect(() => {
		setFormData(initialData);
	}, [allVideos]); // This dependency allows setFormData to run twice. Initially allVideos is empty on first render while the data is fetched from our API.

	const handleSubmit = (e) => {
		e.preventDefault();
		let filterVideos = [];
		for (var key in formData) {
			if (formData[key].include == true) {
				const temp = allVideos.filter((x) => x.tournament == formData[key].title);
				if (temp.length > 0) {
					filterVideos = filterVideos.concat(temp);
				}
			}
		}
		setVideos(filterVideos);
	};

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

	return (
		<aside className="sidebar">
			<form action="" className="w-[180px]" onSubmit={handleSubmit}>
				Filter Match Results
				<div className="accordion-rjs">
					<div className="accordion-item-rjs">
						<div className="accordion-title-rjs" onClick={() => setIsActive(!isActive)}>
							<h6>Tournament</h6>
							<div className="expand pe-[10px]">{isActive ? "-" : "+"}</div>
						</div>
						<div className={`accordion-content-rjs ${isActive ? "block" : "hidden"}`}>
							<ul className="filter">
								{Object.entries(initialData).map((key, value) => {
									let name = key[1].title.replace(/\s/g, "");
									let title = key[1].title;
									let count = key[1].count;
									return (
										<li key={value}>
											<input
												type="checkbox"
												name={name}
												checked={
													Object.keys(formData).length === 0 ? true : formData[name].include
												}
												onChange={handleChange}
											/>
											<label htmlFor={name}>
												{title} ({count})
											</label>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
				<YearFilters allVideos={allVideos} setFormData={setFormData} />
				<button className="applyFilter btn btn-primary mt-4" type="submit">
					Apply Filters
				</button>
			</form>
		</aside>
	);
}
