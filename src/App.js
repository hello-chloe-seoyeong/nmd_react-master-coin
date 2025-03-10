import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  background-color: violet;
  color: white;
`;

const Input = styled.input.attrs({ required: true, maxLength: 30 });

function App() {
  return (
    <Father>
      <Btn>Login</Btn>
      <Btn as="a" href="">
        Join
      </Btn>
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
