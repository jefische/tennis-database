import Navbar from "../components/Navbar";
import TournamentBracket from "../components/draws/TournamentBracket";
import { useState, useCallback, useMemo } from "react";
import useSWR from "swr";
import { sampleDraws } from "../assets/data/sampleDraw";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Draws() {
	const isProduction = import.meta.env.PROD;
	const baseURL = isProduction ? "https://tennis-database.fly.dev" : "http://localhost:8080";

	const { data: apiDraws, error, isLoading } = useSWR(`${baseURL}/draws`, fetcher);

	// Use sample data if no API data is available
	const draws = useMemo(() => {
		if (apiDraws && apiDraws.length > 0) {
			return apiDraws;
		}
		return sampleDraws;
	}, [apiDraws]);

	const [selectedDraw, setSelectedDraw] = useState(null);

	// Set initial selected draw when data loads
	if (draws && draws.length > 0 && !selectedDraw) {
		setSelectedDraw(draws[0]);
	}

	const handleDrawChange = useCallback(
		(e) => {
			const draw = draws.find((d) => d._id === e.target.value);
			setSelectedDraw(draw);
		},
		[draws]
	);

	return (
		<>
			<Navbar />
			<div className="body-container bg-gray-custom">
				<div className="draws-page-container px-[50px] py-[50px]">
					<h1 className="text-center text-white mb-8">Tournament Draws</h1>

					{isLoading ? (
						<p className="text-center text-gray-400">Loading draws...</p>
					) : error ? (
						<div className="text-center text-gray-400">
							<p>Error loading tournament draws.</p>
							<p className="text-sm mt-2">Please try again later.</p>
						</div>
					) : !draws || draws.length === 0 ? (
						<div className="text-center text-gray-400">
							<p>No tournament draws available yet.</p>
							<p className="text-sm mt-2">Check back later for tournament bracket information.</p>
						</div>
					) : (
						<>
							{draws.length > 1 && (
								<div className="draw-selector mb-8">
									<label htmlFor="draw-select" className="text-white mr-4">
										Select Tournament:
									</label>
									<select
										id="draw-select"
										className="bg-gray-700 text-white px-4 py-2 rounded"
										value={selectedDraw?._id || ""}
										onChange={handleDrawChange}
									>
										{draws.map((draw) => (
											<option key={draw._id} value={draw._id}>
												{draw.tournament} {draw.year}
											</option>
										))}
									</select>
								</div>
							)}

							{selectedDraw && <TournamentBracket drawData={selectedDraw} />}
						</>
					)}
				</div>
			</div>
		</>
	);
}
