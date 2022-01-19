import { useCallback, useState } from "react";
import { Footer, Header, Sidebar } from "./layout";

const App = () => {
  const [open, setOpen] = useState(false);

  const onHandleOpen = useCallback(newOpen => setOpen(newOpen), []);

  return (
    <div>
      <Sidebar open={open} onHandleOpen={onHandleOpen} />
      <div>
        <Header onHandleOpen={onHandleOpen} />
        <div style={{ width: 700, textAlign: "center" }}>
          사디으바 반대편입니다.
        </div>
      </div>
      <Footer>&copy; Codiving</Footer>
    </div>
  );
};

export default App;
