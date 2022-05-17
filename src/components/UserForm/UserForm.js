import { useState } from "react";
import { useDispatch } from "react-redux";
import { validateUserThunk } from "../../redux/thunks/thunks";

const UserForm = () => {
  const initialFields = { username: "", password: "" };
  const [formInformation, setFormInformation] = useState(initialFields);
  const dispatch = useDispatch();

  const changeData = (event) => {
    setFormInformation({
      ...formInformation,
      [event.target.id]: event.target.value,
    });
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(validateUserThunk(formInformation));
  };

  const logout = (event) => {
    event.preventDefault();
  };

  return (
    <form autoComplete="off" noValidate onSubmit={submitForm}>
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
      <button onSubmit={logout}>Logout</button>
    </form>
  );
};

export default UserForm;
