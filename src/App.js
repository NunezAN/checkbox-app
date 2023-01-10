import { useState } from "react";
import CheckBoxRow from "./CheckBoxRow";

function App() {
  const [permissions, setPermissions] = useState({
    t1: { read: true, write: true, delete: true },
    t2: { read: true, write: true, delete: true },
  });
  function handleSumbit() {
    console.log(permissions);
  }
  console.log(permissions.t1.label);
  return (
    <div className="w-full bg-black h-screen flex flex-col">
      <div className="mx-auto w-fit p-4 grid grid-rows-4">
        {Object.keys(permissions).map((key) => {
          console.log(key);
          return (
            <CheckBoxRow
              key={key}
              permissions={permissions[key]}
              setPermissions={(newPermissions) => {
                setPermissions({
                  ...permissions,
                  [key]: { ...newPermissions },
                });
              }}
              label={key}
            />
          );
        })}
      </div>
      <button
        className="text-white p-4 rounded bg-slate-700 mx-auto w-fit"
        onClick={handleSumbit}
      >
        SUBMIT
      </button>
    </div>
  );
}

export default App;
