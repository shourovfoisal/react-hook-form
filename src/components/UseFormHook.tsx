import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormValues {
	name: string;
	age: number;
	hairColor: string;
}

export const UseFormHook = () => {
	const [showHairColorInput, setShowHairColorInput] = useState<boolean>(true);

	const {
		clearErrors,
		control,
		formState,
		getFieldState,
		getValues,
		handleSubmit,
		register,
		reset,
		resetField,
		setError,
		setFocus,
		setValue,
		trigger,
		unregister,
		watch,
	} = useForm<FormValues>({
		shouldUnregister: true, // if true, unrendering an input will also remove it's data from the form submission payload
		shouldFocusError: false,
		defaultValues: {
			name: "Shourov",
			age: 30,
			hairColor: "Black",
		},
	});

	const submitForm = handleSubmit(formData => {
		console.log(formData);
	});

	return (
		<form onSubmit={submitForm}>
			<input type="text" {...register("name")} placeholder="Name" />
			<input
				type="number"
				{...register("age", { required: true })}
				placeholder="Age"
			/>
			{showHairColorInput && (
				<input
					type="text"
					{...register("hairColor")} // we can also give shouldUnregister at this level as the second options argument to the register() function
					placeholder="Hair Color"
				/>
			)}
			<button type="submit">Submit Data</button>
			<button
				type="button"
				onClick={() => setShowHairColorInput(prev => !prev)}
			>
				{showHairColorInput ? "Hide" : "Show"} Hair Color Input
			</button>
		</form>
	);
};
