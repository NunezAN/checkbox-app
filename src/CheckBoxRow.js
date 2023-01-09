import React, { useState } from "react";

export default function CheckBoxRow({ label }) {
  const [permissions, setPermissions] = useState({
    read: true,
    write: true,
    delete: true,
  });
  return (
    <div className="text-white flex gap-4">
      <span className="p-2 text-2xl uppercase">{label}</span>
      <input
        className="w-8 h-8"
        type="checkbox"
        checked={permissions.read}
        onChange={(e) => {
          console.log(e.target.checked);
          setPermissions({ ...permissions, read: e.target.checked });
        }}
      ></input>
      <input
        className="w-8 h-8"
        type="checkbox"
        checked={permissions.write}
        onChange={(e) => {
          console.log(e.target.checked);
          setPermissions({ ...permissions, write: e.target.checked });
        }}
      ></input>
      <input
        className="w-8 h-8"
        type="checkbox"
        checked={permissions.delete}
        onChange={(e) => {
          console.log(e.target.checked);
          setPermissions({
            read: e.target.checked,
            write: e.target.checked,
            delete: e.target.checked,
          });
        }}
      ></input>
    </div>
  );
}
