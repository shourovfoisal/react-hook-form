import { UseControllerProps, useController, useForm } from "react-hook-form";

type Props = {};

type FormValues = {
	name: string;
	age: number;
};

function Input(props: UseControllerProps<FormValues>) {
	const { field, fieldState, formState } = useController(props);
	return (
		<div>
			<label className="font-bold">{props.name}</label>
			<input type="text" {...field} />
			<br />
			{Object.keys(fieldState).map(key => (
				<>
					<b>{key}</b> :{" "}
					{JSON.stringify(fieldState[key as keyof typeof fieldState])}
					<br />
				</>
			))}
			{Object.keys(formState).map(key => (
				<>
					<b>{key}</b> :{" "}
					{JSON.stringify(formState[key as keyof typeof formState])}
					<br />
				</>
			))}
		</div>
	);
}

export const UseControllerHook = (props: Props) => {
	const { control, handleSubmit } = useForm<FormValues>({
		defaultValues: { name: "Shourov", age: 29 },
	});

	const submitForm = handleSubmit(data => {
		alert(JSON.stringify(data));
	});

	return (
		<form onSubmit={submitForm} noValidate>
			<Input name="name" control={control} rules={{ required: true }} />
			<Input name="age" control={control} rules={{ required: false }} />
			<button type="submit">Submit</button>
		</form>
	);
};
