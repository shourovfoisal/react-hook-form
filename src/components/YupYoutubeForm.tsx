import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
	username: yup.string().required("Username is required"),
	email: yup
		.string()
		.email("Email format is not valid")
		.required("Email is required"),
	channel: yup.string().required("Channel is required"),
});

type FormValueType = yup.InferType<typeof schema>;

let dv = {
	username: "",
	email: "",
	channel: "",
};

const YupYoutubeForm = () => {
	const form = useForm<FormValueType>({
		defaultValues: dv,
		resolver: yupResolver(schema),
		values: dv,
	});

	const {
		control,
		formState: { errors },
		handleSubmit,
		register,
	} = form;

	const submitForm: SubmitHandler<FormValueType> = (formValue, e) => {
		console.log(e);
		console.log(formValue);
		dv = { ...dv, channel: "HelloThere" }; // changing the value by assigning new object
	};

	// using onChange event explicitly
	const onNameChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
		console.log(e.currentTarget.value);
		register("username").onChange(e);
	};

	return (
		<div>
			<h2>Yup Youtube Form</h2>
			<form onSubmit={handleSubmit(submitForm)} noValidate>
				<div className="form-control">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						{...register("username")}
						onChange={onNameChange}
					/>
					<p className="error">{errors.username?.message}</p>
				</div>
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" {...register("email")} />
					<p className="error">{errors.email?.message}</p>
				</div>
				<div className="form-control">
					<label htmlFor="channel">Channel</label>
					<input type="text" id="channel" {...register("channel")} />
					<p className="error">{errors.channel?.message}</p>
				</div>
				<button>Submit</button>
			</form>

			<DevTool control={control} />
		</div>
	);
};

export default YupYoutubeForm;
