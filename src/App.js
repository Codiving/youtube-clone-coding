import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Header, Sidebar } from "./layout";

const App = () => {
  const [open, setOpen] = useState(false);

  const onHandleOpen = newOpen => setOpen(newOpen);

  return (
    <div>
      <Sidebar open={open} onHandleOpen={onHandleOpen}>
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="3x"
          onClick={() => setOpen(false)}
        />
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Sidebar>
      <div>
        <Header onHandleOpen={onHandleOpen} />
        <div style={{ width: 700, textAlign: "center" }}>
          사디으바 반대편입니다.
        </div>
      </div>
    </div>
  );
};

export default App;
