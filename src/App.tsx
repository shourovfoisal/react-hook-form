import { Fragment } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { YupYoutubeForm } from "./components/YupYoutubeForm";
import { Routes, Route } from "react-router-dom";
import { YoutubeForm } from "./components/YoutubeForm";
import { RefComponents } from "./components/RefComponents";
import { UseControllerHook } from "./components/UseControllerHook";
import { FormComponent } from "./components/FormComponent";
import { UseFormHook } from "./components/UseFormHook";

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
					<Route path="/form-component" element={<FormComponent />} />
					<Route path="/use-form" element={<UseFormHook />} />
				</Routes>
			</div>
		</Fragment>
	);
}

export default App;
