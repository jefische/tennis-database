// Sample tournament draw data for 32 players
// Showing a complete bracket from Round of 32 through Finals

export const usOpenDraw = {
	_id: "sample-draw-001",
	tournament: "US Open",
	year: 2024,
	rounds: [
		{
			name: "Round of 32",
			matches: [
				{
					player1: { name: "Carlos Alcaraz", seed: 1 },
					player2: { name: "Daniel Evans", seed: null },
					score: { player1: "6-3, 6-4, 6-2", player2: "3-6, 4-6, 2-6" },
					winner: 1,
				},
				{
					player1: { name: "Alexander Zverev", seed: 4 },
					player2: { name: "Brandon Nakashima", seed: null },
					score: { player1: "6-4, 7-6(3), 6-1", player2: "4-6, 6-7(3), 1-6" },
					winner: 1,
				},
				{
					player1: { name: "Jannik Sinner", seed: 6 },
					player2: { name: "Christopher O'Connell", seed: null },
					score: { player1: "6-1, 6-4, 6-2", player2: "1-6, 4-6, 2-6" },
					winner: 1,
				},
				{
					player1: { name: "Tommy Paul", seed: 14 },
					player2: { name: "Roman Safiullin", seed: null },
					score: { player1: "6-3, 6-2, 6-7(3), 6-3", player2: "3-6, 2-6, 7-6(3), 3-6" },
					winner: 1,
				},
				{
					player1: { name: "Daniil Medvedev", seed: 3 },
					player2: { name: "Sebastian Korda", seed: null },
					score: { player1: "6-2, 6-4, 6-4", player2: "2-6, 4-6, 4-6" },
					winner: 1,
				},
				{
					player1: { name: "Andrey Rublev", seed: 5 },
					player2: { name: "Arthur Rinderknech", seed: null },
					score: { player1: "6-4, 6-3, 6-2", player2: "4-6, 3-6, 2-6" },
					winner: 1,
				},
				{
					player1: { name: "Taylor Fritz", seed: 12 },
					player2: { name: "Francisco Comesana", seed: null },
					score: { player1: "6-3, 6-4, 6-2", player2: "3-6, 4-6, 2-6" },
					winner: 1,
				},
				{
					player1: { name: "Grigor Dimitrov", seed: 9 },
					player2: { name: "Tallon Griekspoor", seed: null },
					score: { player1: "6-3, 6-3, 6-1", player2: "3-6, 3-6, 1-6" },
					winner: 1,
				},
				{
					player1: { name: "Novak Djokovic", seed: 2 },
					player2: { name: "Laslo Djere", seed: null },
					score: { player1: "6-4, 6-4, 2-0 ret.", player2: "4-6, 4-6, 0-2 ret." },
					winner: 1,
				},
				{
					player1: { name: "Holger Rune", seed: 15 },
					player2: { name: "Roberto Carballes Baena", seed: null },
					score: { player1: "7-5, 6-3, 6-4", player2: "5-7, 3-6, 4-6" },
					winner: 1,
				},
				{
					player1: { name: "Hubert Hurkacz", seed: 7 },
					player2: { name: "Jordan Thompson", seed: null },
					score: { player1: "6-4, 6-2, 6-4", player2: "4-6, 2-6, 4-6" },
					winner: 1,
				},
				{
					player1: { name: "Alex de Minaur", seed: 10 },
					player2: { name: "Dan Evans", seed: null },
					score: { player1: "6-3, 6-4, 6-1", player2: "3-6, 4-6, 1-6" },
					winner: 1,
				},
				{
					player1: { name: "Casper Ruud", seed: 8 },
					player2: { name: "Juncheng Shang", seed: null },
					score: { player1: "6-7(5), 6-3, 6-4, 6-2", player2: "7-6(5), 3-6, 4-6, 2-6" },
					winner: 1,
				},
				{
					player1: { name: "Ben Shelton", seed: 13 },
					player2: { name: "Frances Tiafoe", seed: 20 },
					score: { player1: "6-4, 7-6(4), 6-7(8), 6-4", player2: "4-6, 6-7(4), 7-6(8), 4-6" },
					winner: 1,
				},
				{
					player1: { name: "Jack Draper", seed: 25 },
					player2: { name: "Botic van de Zandschulp", seed: null },
					score: { player1: "6-3, 6-4, 6-2", player2: "3-6, 4-6, 2-6" },
					winner: 1,
				},
				{
					player1: { name: "Alexander Bublik", seed: null },
					player2: { name: "Tomas Machac", seed: null },
					score: { player1: "7-6(5), 6-7(3), 6-3, 6-4", player2: "6-7(5), 7-6(3), 3-6, 4-6" },
					winner: 1,
				},
			],
		},
		{
			name: "Round of 16",
			matches: [
				{
					player1: { name: "Carlos Alcaraz", seed: 1 },
					player2: { name: "Alexander Zverev", seed: 4 },
					score: { player1: "6-4, 6-3, 6-7(4), 6-3", player2: "4-6, 3-6, 7-6(4), 3-6" },
					winner: 1,
				},
				{
					player1: { name: "Jannik Sinner", seed: 6 },
					player2: { name: "Tommy Paul", seed: 14 },
					score: { player1: "7-6(3), 7-6(5), 6-1", player2: "6-7(3), 6-7(5), 1-6" },
					winner: 1,
				},
				{
					player1: { name: "Daniil Medvedev", seed: 3 },
					player2: { name: "Andrey Rublev", seed: 5 },
					score: { player1: "6-4, 6-3, 6-4", player2: "4-6, 3-6, 4-6" },
					winner: 1,
				},
				{
					player1: { name: "Taylor Fritz", seed: 12 },
					player2: { name: "Grigor Dimitrov", seed: 9 },
					score: { player1: "6-3, 7-6(5), 6-3", player2: "3-6, 6-7(5), 3-6" },
					winner: 1,
				},
				{
					player1: { name: "Novak Djokovic", seed: 2 },
					player2: { name: "Holger Rune", seed: 15 },
					score: { player1: "6-2, 6-1, 6-7(4), 6-3", player2: "2-6, 1-6, 7-6(4), 3-6" },
					winner: 1,
				},
				{
					player1: { name: "Hubert Hurkacz", seed: 7 },
					player2: { name: "Alex de Minaur", seed: 10 },
					score: { player1: "6-7(5), 4-6, 3-6", player2: "7-6(5), 6-4, 6-3" },
					winner: 2,
				},
				{
					player1: { name: "Casper Ruud", seed: 8 },
					player2: { name: "Ben Shelton", seed: 13 },
					score: { player1: "4-6, 3-6, 2-6", player2: "6-4, 6-3, 6-2" },
					winner: 2,
				},
				{
					player1: { name: "Jack Draper", seed: 25 },
					player2: { name: "Alexander Bublik", seed: null },
					score: { player1: "6-3, 6-4, 6-2", player2: "3-6, 4-6, 2-6" },
					winner: 1,
				},
			],
		},
		{
			name: "Quarterfinals",
			matches: [
				{
					player1: { name: "Carlos Alcaraz", seed: 1 },
					player2: { name: "Jannik Sinner", seed: 6 },
					score: { player1: "6-3, 6-4, 7-6(3)", player2: "3-6, 4-6, 6-7(3)" },
					winner: 1,
				},
				{
					player1: { name: "Daniil Medvedev", seed: 3 },
					player2: { name: "Taylor Fritz", seed: 12 },
					score: { player1: "6-4, 6-7(5), 6-4, 6-4", player2: "4-6, 7-6(5), 4-6, 4-6" },
					winner: 1,
				},
				{
					player1: { name: "Novak Djokovic", seed: 2 },
					player2: { name: "Alex de Minaur", seed: 10 },
					score: { player1: "6-4, 6-4, 6-4", player2: "4-6, 4-6, 4-6" },
					winner: 1,
				},
				{
					player1: { name: "Ben Shelton", seed: 13 },
					player2: { name: "Jack Draper", seed: 25 },
					score: { player1: "6-7(4), 4-6, 6-7(5)", player2: "7-6(4), 6-4, 7-6(5)" },
					winner: 2,
				},
			],
		},
		{
			name: "Semifinals",
			matches: [
				{
					player1: { name: "Carlos Alcaraz", seed: 1 },
					player2: { name: "Daniil Medvedev", seed: 3 },
					score: { player1: "6-4, 6-3, 6-7(5), 6-3", player2: "4-6, 3-6, 7-6(5), 3-6" },
					winner: 1,
				},
				{
					player1: { name: "Novak Djokovic", seed: 2 },
					player2: { name: "Jack Draper", seed: 25 },
					score: { player1: "6-3, 7-6(5), 6-2", player2: "3-6, 6-7(5), 2-6" },
					winner: 1,
				},
			],
		},
		{
			name: "Final",
			matches: [
				{
					player1: { name: "Carlos Alcaraz", seed: 1 },
					player2: { name: "Novak Djokovic", seed: 2 },
					score: { player1: "6-4, 6-4, 7-6(3)", player2: "4-6, 4-6, 6-7(3)" },
					winner: 1,
				},
			],
		},
	],
};

export const wimbledonDraw = {
	_id: "sample-draw-002",
	tournament: "Wimbledon",
	year: 2024,
	rounds: [
		{
			name: "Round of 32",
			matches: [
				{
					player1: { name: "Jannik Sinner", seed: 1 },
					player2: { name: "Miomir Kecmanovic", seed: null },
					score: { player1: "6-1, 6-4, 6-2", player2: "1-6, 4-6, 2-6" },
					winner: 1,
				},
				{
					player1: { name: "Daniil Medvedev", seed: 5 },
					player2: { name: "Jan-Lennard Struff", seed: null },
					score: { player1: "6-4, 7-6(4), 6-4", player2: "4-6, 6-7(4), 4-6" },
					winner: 1,
				},
				{
					player1: { name: "Carlos Alcaraz", seed: 3 },
					player2: { name: "Ugo Humbert", seed: 16 },
					score: { player1: "6-3, 6-4, 1-6, 7-5", player2: "3-6, 4-6, 6-1, 5-7" },
					winner: 1,
				},
				{
					player1: { name: "Tommy Paul", seed: 12 },
					player2: { name: "Roberto Bautista Agut", seed: null },
					score: { player1: "6-2, 7-6(6), 6-2", player2: "2-6, 6-7(6), 2-6" },
					winner: 1,
				},
				{
					player1: { name: "Novak Djokovic", seed: 2 },
					player2: { name: "Holger Rune", seed: 15 },
					score: { player1: "6-3, 6-4, 6-2", player2: "3-6, 4-6, 2-6" },
					winner: 1,
				},
				{
					player1: { name: "Alex de Minaur", seed: 9 },
					player2: { name: "Arthur Fils", seed: null },
					score: { player1: "6-2, 6-4, 4-6, 6-3", player2: "2-6, 4-6, 6-4, 3-6" },
					winner: 1,
				},
				{
					player1: { name: "Lorenzo Musetti", seed: 25 },
					player2: { name: "Giovanni Mpetshi Perricard", seed: null },
					score: { player1: "4-6, 6-3, 6-3, 6-2", player2: "6-4, 3-6, 3-6, 2-6" },
					winner: 1,
				},
				{
					player1: { name: "Taylor Fritz", seed: 13 },
					player2: { name: "Alexander Zverev", seed: 4 },
					score: { player1: "6-4, 7-6(4), 4-6, 6-7(3), 6-3", player2: "4-6, 6-7(4), 6-4, 7-6(3), 3-6" },
					winner: 1,
				},
				{
					player1: { name: "Hubert Hurkacz", seed: 7 },
					player2: { name: "Arthur Rinderknech", seed: null },
					score: { player1: "6-4, 6-4, 6-3", player2: "4-6, 4-6, 3-6" },
					winner: 1,
				},
				{
					player1: { name: "Grigor Dimitrov", seed: 10 },
					player2: { name: "Gael Monfils", seed: null },
					score: { player1: "6-3, 6-4, 6-3", player2: "3-6, 4-6, 3-6" },
					winner: 1,
				},
				{
					player1: { name: "Ben Shelton", seed: 14 },
					player2: { name: "Denis Shapovalov", seed: null },
					score: { player1: "6-7(4), 6-2, 6-4, 4-6, 6-2", player2: "7-6(4), 2-6, 4-6, 6-4, 2-6" },
					winner: 1,
				},
				{
					player1: { name: "Stefanos Tsitsipas", seed: 11 },
					player2: { name: "Matteo Arnaldi", seed: null },
					score: { player1: "6-4, 7-5, 6-3", player2: "4-6, 5-7, 3-6" },
					winner: 1,
				},
				{
					player1: { name: "Casper Ruud", seed: 8 },
					player2: { name: "Fabio Fognini", seed: null },
					score: { player1: "6-4, 6-2, 7-6(3)", player2: "4-6, 2-6, 6-7(3)" },
					winner: 1,
				},
				{
					player1: { name: "Sebastian Korda", seed: null },
					player2: { name: "Karen Khachanov", seed: null },
					score: { player1: "6-4, 6-4, 6-7(9), 7-6(5)", player2: "4-6, 4-6, 7-6(9), 6-7(5)" },
					winner: 1,
				},
				{
					player1: { name: "Lorenzo Sonego", seed: null },
					player2: { name: "Roberto Carballes Baena", seed: null },
					score: { player1: "6-3, 7-6(5), 6-3", player2: "3-6, 6-7(5), 3-6" },
					winner: 1,
				},
				{
					player1: { name: "Frances Tiafoe", seed: 20 },
					player2: { name: "Alejandro Tabilo", seed: null },
					score: { player1: "6-3, 6-4, 6-2", player2: "3-6, 4-6, 2-6" },
					winner: 1,
				},
			],
		},
		{
			name: "Round of 16",
			matches: [
				{
					player1: { name: "Jannik Sinner", seed: 1 },
					player2: { name: "Daniil Medvedev", seed: 5 },
					score: { player1: "6-7(7), 6-4, 7-6(4), 2-6, 6-3", player2: "7-6(7), 4-6, 6-7(4), 6-2, 3-6" },
					winner: 1,
				},
				{
					player1: { name: "Carlos Alcaraz", seed: 3 },
					player2: { name: "Tommy Paul", seed: 12 },
					score: { player1: "5-7, 6-4, 6-2, 6-2", player2: "7-5, 4-6, 2-6, 2-6" },
					winner: 1,
				},
				{
					player1: { name: "Novak Djokovic", seed: 2 },
					player2: { name: "Alex de Minaur", seed: 9 },
					score: { player1: "6-3, 6-4, 6-2", player2: "3-6, 4-6, 2-6" },
					winner: 1,
				},
				{
					player1: { name: "Lorenzo Musetti", seed: 25 },
					player2: { name: "Taylor Fritz", seed: 13 },
					score: { player1: "3-6, 7-6(5), 6-2, 3-6, 6-1", player2: "6-3, 6-7(5), 2-6, 6-3, 1-6" },
					winner: 1,
				},
				{
					player1: { name: "Hubert Hurkacz", seed: 7 },
					player2: { name: "Grigor Dimitrov", seed: 10 },
					score: { player1: "6-3, 6-4, 6-2", player2: "3-6, 4-6, 2-6" },
					winner: 1,
				},
				{
					player1: { name: "Ben Shelton", seed: 14 },
					player2: { name: "Stefanos Tsitsipas", seed: 11 },
					score: { player1: "5-7, 7-6(5), 6-2, 6-7(9), 6-4", player2: "7-5, 6-7(5), 2-6, 7-6(9), 4-6" },
					winner: 1,
				},
				{
					player1: { name: "Casper Ruud", seed: 8 },
					player2: { name: "Sebastian Korda", seed: null },
					score: { player1: "6-4, 6-2, 6-4", player2: "4-6, 2-6, 4-6" },
					winner: 1,
				},
				{
					player1: { name: "Lorenzo Sonego", seed: null },
					player2: { name: "Frances Tiafoe", seed: 20 },
					score: { player1: "6-4, 7-6(3), 6-3", player2: "4-6, 6-7(3), 3-6" },
					winner: 1,
				},
			],
		},
		{
			name: "Quarterfinals",
			matches: [
				{
					player1: { name: "Jannik Sinner", seed: 1 },
					player2: { name: "Carlos Alcaraz", seed: 3 },
					score: { player1: "7-6(9), 6-4, 2-6, 6-3", player2: "6-7(9), 4-6, 6-2, 3-6" },
					winner: 1,
				},
				{
					player1: { name: "Novak Djokovic", seed: 2 },
					player2: { name: "Lorenzo Musetti", seed: 25 },
					score: { player1: "6-4, 7-6(2), 6-4", player2: "4-6, 6-7(2), 4-6" },
					winner: 1,
				},
				{
					player1: { name: "Hubert Hurkacz", seed: 7 },
					player2: { name: "Ben Shelton", seed: 14 },
					score: { player1: "6-3, 6-7(4), 7-6(5), 6-4", player2: "3-6, 7-6(4), 6-7(5), 4-6" },
					winner: 1,
				},
				{
					player1: { name: "Casper Ruud", seed: 8 },
					player2: { name: "Lorenzo Sonego", seed: null },
					score: { player1: "4-6, 3-6, 6-2, 4-6", player2: "6-4, 6-3, 2-6, 6-4" },
					winner: 2,
				},
			],
		},
		{
			name: "Semifinals",
			matches: [
				{
					player1: { name: "Jannik Sinner", seed: 1 },
					player2: { name: "Novak Djokovic", seed: 2 },
					score: { player1: "6-3, 6-4, 7-6(4)", player2: "3-6, 4-6, 6-7(4)" },
					winner: 1,
				},
				{
					player1: { name: "Hubert Hurkacz", seed: 7 },
					player2: { name: "Lorenzo Sonego", seed: null },
					score: { player1: "7-6(3), 6-3, 6-2", player2: "6-7(3), 3-6, 2-6" },
					winner: 1,
				},
			],
		},
		{
			name: "Final",
			matches: [
				{
					player1: { name: "Jannik Sinner", seed: 1 },
					player2: { name: "Hubert Hurkacz", seed: 7 },
					score: { player1: "6-4, 7-6(3), 6-3", player2: "4-6, 6-7(3), 3-6" },
					winner: 1,
				},
			],
		},
	],
};

export const sampleDraws = [usOpenDraw, wimbledonDraw];

export default usOpenDraw;
