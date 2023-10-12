import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  fullName: string;
  intention: string;
};

const formFields: Array<{
  name: keyof Inputs;
  label: string;
}> = [
  { name: "fullName", label: "Nom et prénom :" },
  { name: "intention", label: "Mon Intention :" },
];

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>({ mode: "all" });
  const onSubmit: SubmitHandler<Inputs> = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
      {formFields.map(({ name, label }, idx) => (
        <div className="mb-5" key={idx}>
          <label htmlFor={name} className="form-label">
            {label}
          </label>
          <input
            className="form-control"
            id={name}
            {...register(name, { required: true })}
          />
        </div>
      ))}

      {errors.fullName && <span>This field is required</span>}

      <input type="submit" className="d-none" />
    </form>
  );
};

export default RegisterForm;
