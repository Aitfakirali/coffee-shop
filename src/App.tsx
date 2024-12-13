import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Rewards from "./pages/Rewards";
import { Layout } from "./components";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Dashboard />} />
					<Route path="/rewards" element={<Rewards />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
