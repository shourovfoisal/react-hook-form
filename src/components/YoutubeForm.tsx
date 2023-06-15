import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";


type FormValues = {
  username: string,
  email: string,
  channel: string
}


export const YoutubeForm = () => {

  const form = useForm<FormValues>();
  const {register, control, handleSubmit} = form;

  const onSubmit = (data: FormValues) => {
    console.log("form submitted");
    console.log(data);
  }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" {...register("username", {
              required: "username is required."
            })} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "email is invalid."
              }
            })} />

            <label htmlFor="channel">Channel</label>
            <input type="text" id="channel" {...register("channel", {
              required: "channel is required."
            })} />

            <button>Submit</button>
        </form>

        <DevTool control={control} />
    </div>
  )
}
