import React from "react";
import { format } from "./worker-bridge";
import { formatLocal } from "./format-local";

const defaultCode = new Array(500).fill(`
        function badJs        (hi, arg  ,   a){
const nonsense =  console.log(
  arg
);
hi = a;

return [
  {a:"b",1:1111,c:

    "hello", wow: [1
  ,2                              , 
                    3,4]
  }, 1,2,3,4,5,5,6,7
]
        };
`).join("\n");


function App() {
  const [value, setValue] = React.useState("");
  const [clogger, setClogger] = React.useState("");

  const reset = () => {
    setValue(defaultCode);
  }

  const onClick = async () => {
    const done = await formatLocal(value);
    setValue(done);
  };

  const onClickWorker = async () => {
    const done = await format(value);
    setValue(done);
  };

  React.useEffect(function clog() {
    const id = setInterval(() => setClogger(new Date().toISOString()), 10);

    return () => clearInterval(id);
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <textarea
        style={{ height: "200px" }}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={onClickWorker}>Format Worker</button>
      <button onClick={onClick}>Format Local</button>
      <button onClick={reset}>Reset</button>
      {clogger}
    </div>
  );
}

export default App;
