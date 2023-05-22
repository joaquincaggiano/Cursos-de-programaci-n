import { useForm } from "../hooks/useForm";

export const Formularios = () => {
  const {state, onChange} = useForm({
    email: "test@gmail.com",
    password: "123456",
  });

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={state.email}
        onChange={(e) => onChange(e.target.value, "email")}
      />
      <input
        type="password"
        className="form-control my-2"
        placeholder="Password"
        value={state.password}
        onChange={(e) => onChange(e.target.value, "password")}
      />
    </>
  );
};
