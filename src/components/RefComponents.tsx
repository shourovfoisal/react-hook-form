import React from "react";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";

type FormValue = {
	name: string;
};

export const Input = React.forwardRef<
	HTMLInputElement,
	{ label: string; id?: string } & ReturnType<UseFormRegister<FormValue>>
>(({ onChange, onBlur, name, label, id }, ref) => {
	const generatedId = !id ? label.split(" ").join("").toLowerCase() : undefined;

	return (
		<>
			<label htmlFor={id || generatedId}>{label}</label>
			<input
				id={id || generatedId}
				type="text"
				name={name}
				ref={ref}
				onChange={onChange}
				onBlur={onBlur}
			/>
		</>
	);
});

export const RefComponents = () => {
	const { register, handleSubmit } = useForm<FormValue>();

	const onSubmit: SubmitHandler<FormValue> = data => {
		alert(JSON.stringify(data));
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input label="Your Name" {...register("name")} />
			<button type="submit">Submit</button>
		</form>
	);
};
