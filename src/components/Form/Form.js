import styled from "styled-components";

const StyledContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  button {
    width: 300px;
    margin-top: 14px;
  }
  label {
    height: 50px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    input {
      width: 400px;
    }
  }
`;

const Form = () => {
  return (
    <StyledContainer>
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        Speed:
        <input type="number" />
      </label>
      <label>
        Resistance:
        <input type="number" />
      </label>
      <label>
        Creation date:
        <input type="string" />
      </label>
      <label>
        Description:
        <input type="text" />
      </label>
      <button type="submit">Add new robot</button>
    </StyledContainer>
  );
};

export default Form;
