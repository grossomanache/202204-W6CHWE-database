import { useState } from "react";

const UserForm = () => {
  const initialFields = { username: "", password: "" };
  const [formInformation, setFormInformation] = useState(initialFields);

  const changeData = (event) => {
    setFormInformation({
      ...formInformation,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <form autoComplete="off" noValidate>
      <label>
        Name:{" "}
        <input
          id="username"
          type="text"
          value={formInformation.username}
          onChange={changeData}
        />
      </label>
      <label>
        Password:{" "}
        <input
          id="password"
          type="password"
          value={formInformation.password}
          onChange={changeData}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default UserForm;
