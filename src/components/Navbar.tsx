import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<ul className="list-none p-6 shadow-md flex gap-3 justify-between mb-6">
			<li className="px-3 py-2 bg-slate-100">
				<Link to="/form">Form</Link>
			</li>
			<li className="px-3 py-2 bg-slate-100">
				<Link to="/yup-form">Yup Form</Link>
			</li>
			<li className="px-3 py-2 bg-slate-100">
				<Link to="/ref-components">Ref Components</Link>
			</li>
		</ul>
	);
};
