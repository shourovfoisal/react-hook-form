import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="p-6 shadow-md mb-6">
			<ul className="list-none flex gap-6 justify-between w-fit mx-auto">
				<li className="px-3 py-2 bg-slate-100">
					<Link to="/form">Form</Link>
				</li>
				<li className="px-3 py-2 bg-slate-100">
					<Link to="/yup-form">Yup Form</Link>
				</li>
				<li className="px-3 py-2 bg-slate-100">
					<Link to="/ref-components">Ref Components</Link>
				</li>
				<li className="px-3 py-2 bg-slate-100">
					<Link to="/use-controller">useController Hook</Link>
				</li>
			</ul>
		</div>
	);
};
