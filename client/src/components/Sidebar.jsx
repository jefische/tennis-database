import { useEffect, useState } from "react";
import TournamentFilters from "./TournamentFilters";
import YearFilters from "./YearFilters";

// Initial Filters data structure for reference
/*
let initFilters = {
	AustralianOpen: {
		title: "Aussy Open",
		year: [2025, 2024],
		count: 3,
		include: true,
	},
	2025: { title: "year", include: true },
	2024: { title: "year", include: false },
}; */

export default function Sidebar({ allVideos, setVideos, initFilters }) {
	// isActive state is used to manage the accordion dropdown filters in the sidebar
	const [isActive, setIsActive] = useState(true);
	// formData is used to manage the checkboxes and pass them to form submit for ytVideo filtering and rendering in Home.jsx
	const [formData, setFormData] = useState(initFilters);

	console.log("formData in Sidebar");
	console.log(formData);

	console.log("allVideos: ");
	console.log(allVideos);
	useEffect(() => {
		setFormData(initFilters);
	}, [allVideos]); // This dependency allows setFormData to run twice. Initially allVideos is empty on first render while the data is fetched from our API.

	const handleSubmit = (e) => {
		e.preventDefault();
		let filterVideos = [];
		const yearsToInclude = Object.entries(formData)
			.filter((key, val) => {
				return key[1].title == "year" && key[1].include == true;
			})
			.map(([key, value]) => Number(key));
		for (var key in formData) {
			if (formData[key].include == true && formData[key].title !== "year") {
				const temp = allVideos.filter(
					(x) => x.tournament == formData[key].title && yearsToInclude.includes(x.year),
				);

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
				<TournamentFilters initFilters={initFilters} formData={formData} setFormData={setFormData} />
				{/* <div className="accordion-rjs">
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
													checked={
														Object.keys(formData).length === 0
															? true
															: formData[name].include
													}
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
				</div> */}
				<YearFilters
					initFilters={initFilters}
					allVideos={allVideos}
					setFormData={setFormData}
					formData={formData}
				/>
				<button className="applyFilter btn btn-primary mt-4" type="submit">
					Apply Filters
				</button>
			</form>
		</aside>
	);
}
