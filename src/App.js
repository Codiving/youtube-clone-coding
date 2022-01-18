import styled from "@emotion/styled";
import { useState } from "react";
import { Sidebar } from "./layout";

const Header = styled("div")(() => {
  return {
    height: 100
  };
});

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ maxWidth: "80rem" }}>
      <Sidebar open={open}>
        <button onClick={() => setOpen(false)}>닫기</button>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Sidebar>
      <div>
        <Header>
          <button onClick={() => setOpen(true)}>열기</button>
        </Header>
        <div style={{ width: 700, textAlign: "center" }}>
          사디으바 반대편입니다.
        </div>
      </div>
    </div>
  );
};

export default App;
