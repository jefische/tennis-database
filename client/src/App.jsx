import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Players from "./pages/Players";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/players" element={<Players />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
