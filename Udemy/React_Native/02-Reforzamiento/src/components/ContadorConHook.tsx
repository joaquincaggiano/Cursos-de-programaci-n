import { useCounter } from "../hooks/useCounter";

export const ContadorConHook = () => {
  const { value, acumular } = useCounter(0);

  return (
    <>
      <h3>
        Contador con hook: <small>{value}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => acumular(1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => acumular(-1)}>
        -1
      </button>
    </>
  );
};
