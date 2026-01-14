import MatchCard from "./MatchCard";

export default function TournamentBracket({ drawData }) {
	if (!drawData || !drawData.rounds || drawData.rounds.length === 0) {
		return (
			<div className="bracket-container">
				<p className="text-center text-gray-400">No draw data available</p>
			</div>
		);
	}

	const { rounds, tournament, year } = drawData;

	return (
		<div className="bracket-wrapper">
			<div className="bracket-header">
				<h2>{tournament}</h2>
				<p className="text-gray-400">{year}</p>
			</div>
			<div className="bracket-container">
				{rounds.map((round, roundIndex) => (
					<div key={roundIndex} className="bracket-round">
						<div className="round-label">{round.name}</div>
						<div className="matches-container">
							{round.matches.map((match, matchIndex) => (
								<MatchCard key={matchIndex} match={match} />
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
