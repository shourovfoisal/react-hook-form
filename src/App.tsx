import { Fragment } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
// import { YoutubeForm } from './components/YoutubeForm'
import { YupYoutubeForm } from "./components/YupYoutubeForm";
import { Routes, Route } from "react-router-dom";
import { YoutubeForm } from "./components/YoutubeForm";
import { RefComponents } from "./components/RefComponents";
import { UseControllerHook } from "./components/UseControllerHook";

function App() {
	return (
		<Fragment>
			<Navbar />
			<div className="w-fit mx-auto">
				<Routes>
					<Route path="/form" element={<YoutubeForm />} />
					<Route path="/yup-form" element={<YupYoutubeForm />} />
					<Route path="/ref-components" element={<RefComponents />} />
					<Route path="/use-controller" element={<UseControllerHook />} />
				</Routes>
			</div>
		</Fragment>
	);
}

export default App;
