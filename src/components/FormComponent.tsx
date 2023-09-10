import { Form, useForm } from "react-hook-form";

export interface FormData {
	firstName: string;
	lastName: string;
}

export const FormComponent = () => {
	const { register, control } = useForm<FormData>();

	return (
		<Form
			// action="/api/demo"
			action="https://localhost:8080/api/demo"
			onSuccess={() => alert("Form submit was successful")}
			onError={() => alert("Submit was unsuccessful")}
			control={control}
		>
			<input type="text" placeholder="First Name" {...register("firstName")} />
			<input type="text" placeholder="Last Name" {...register("lastName")} />
			<button type="submit">Submit</button>
		</Form>
	);
};
