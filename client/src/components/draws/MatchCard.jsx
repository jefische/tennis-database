import { memo } from "react";

function MatchCard({ match }) {
	if (!match) {
		return (
			<div className="match-card empty">
				<div className="match-placeholder">TBD</div>
			</div>
		);
	}

	const { player1, player2, score, winner } = match;

	return (
		<div className="match-card">
			<div className={`player-row ${winner === 1 ? "winner" : winner === 2 ? "loser" : ""}`}>
				<span className="player-name">{player1?.name || "TBD"}</span>
				<span className="player-score">{score?.player1 || ""}</span>
			</div>
			<div className={`player-row ${winner === 2 ? "winner" : winner === 1 ? "loser" : ""}`}>
				<span className="player-name">{player2?.name || "TBD"}</span>
				<span className="player-score">{score?.player2 || ""}</span>
			</div>
		</div>
	);
}

export default memo(MatchCard);
