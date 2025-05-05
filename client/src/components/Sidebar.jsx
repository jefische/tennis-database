import { useState } from "react";
import YearFilters from "./YearFilters";

export default function Sidebar({ allVideos, setVideos }) {
	// isActive state is used to manage the accordion dropdown filters in the sidebar
	const [isActive, setIsActive] = useState(true);

	let initialData = {};
	allVideos.map((x) => {
		let key = x.tournament.replace(/\s/g, "");
		let year = x.year;
		if (!initialData[key]) {
			initialData[key] = {};
			initialData[key].title = x.tournament;
			initialData[key].year = [x.year];
			initialData[key].include = true;
		} else {
			let temp = initialData[key].year.slice(0);
			console.log(initialData[key]);
			if (!(x.year in temp)) {
				console.log(x.year + " is not in " + temp);
				// temp.push(x.year);
				// initialData[key].year.push(x.year);
			}
		}
	});
	console.log(initialData);

	// formData is used to manage the checkboxes and pass them to form submit for ytVideo filtering and rendering in Home.jsx
	const [formData, setFormData] = useState({
		australianOpen: {
			title: "Australian Open",
			include: true,
		},
		frenchOpen: {
			title: "French Open",
			include: true,
		},
		wimbledon: {
			title: "Wimbledon",
			include: true,
		},
		usOpen: {
			title: "US Open",
			include: true,
		},
	});

	let aoCount = 0,
		foCount = 0,
		wimbledonCount = 0,
		usoCount = 0;

	for (let item of allVideos) {
		if (item.tournament == "Australian Open") {
			aoCount++;
		} else if (item.tournament == "French Open") {
			foCount++;
		} else if (item.tournament == "Wimbledon") {
			wimbledonCount++;
		} else if (item.tournament == "US Open") {
			usoCount++;
		}
	}

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
								<li>
									<input
										type="checkbox"
										name="australianOpen"
										checked={formData.australianOpen.include}
										onChange={handleChange}
									/>
									<label htmlFor="australianOpen">{`Australian Open (${aoCount})`}</label>
								</li>
								<li>
									<input
										type="checkbox"
										name="frenchOpen"
										checked={formData.frenchOpen.include}
										onChange={handleChange}
									/>
									<label htmlFor="frenchOpen">{`French Open (${foCount})`}</label>
								</li>
								<li>
									<input
										type="checkbox"
										name="wimbledon"
										checked={formData.wimbledon.include}
										onChange={handleChange}
									/>
									<label htmlFor="wimbledon">{`Wimbledon (${wimbledonCount})`}</label>
								</li>
								<li>
									<input
										type="checkbox"
										name="usOpen"
										checked={formData.usOpen.include}
										onChange={handleChange}
									/>
									<label htmlFor="usOpen">{`US Open (${usoCount})`}</label>
								</li>
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
