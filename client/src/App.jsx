import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Players from "./pages/Players";
import Navbar from "./components/Navbar";
import Draws from "./pages/Draws";
import FAQ from "./pages/FAQ";
import Profile from "./pages/Profile";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/players" element={<Players />} />
					<Route path="/draws" element={<Draws />} />
					<Route path="/faq" element={<FAQ />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
