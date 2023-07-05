import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";


type FormValues = {
  username: string,
  email: string,
  channel: string
}


export const YoutubeForm = () => {

  const form = useForm<FormValues>();
  const {register, control, handleSubmit, formState} = form;
  const {errors} = formState;

  const onSubmit = (data: FormValues) => {
    console.log("form submitted");
    console.log(data);
  }

  return (
    <div>
        {/* <form onSubmit={handleSubmit(onSubmit)} noValidate> */}
            <div className="form-control">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" {...register("username", {
                required: "username is required."
              })} />
              <p className="error">{errors.username?.message}</p>
            </div>

            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" {...register("email", {
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "email is invalid."
                },
                validate: {
                  canNotBeAdmin: (fieldValue) => {
                    return fieldValue !== "admin@example.com" || "can not enter that email."
                  },
                  blacklistedWebsite: (fieldValue) => {
                    return !fieldValue.endsWith("baddomain.com") || "that is not a good website."
                  }
                }
              })} />
              <p className="error">{errors.email?.message}</p>
            </div>

            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <input type="text" id="channel" {...register("channel", {
                required: "channel is required."
              })} />
              <p className="error">{errors.channel?.message}</p>
            </div>

            {/* <button>Submit</button> */}
            <button type="button" onClick={handleSubmit(onSubmit)}>Submit</button>
        {/* </form> */}

        <DevTool control={control} />
    </div>
  )
}
