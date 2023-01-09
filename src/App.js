import CheckBoxRow from "./CheckBoxRow";

function App() {
  return (
    <div className="w-full bg-black h-screen">
      <div className="mx-auto w-fit p-4 grid grid-rows-4">
        
        <CheckBoxRow label={"t1"} />
        <CheckBoxRow label={"t2"} />
        <CheckBoxRow label={"t3"} />
        <CheckBoxRow label={"t4"} />
      </div>
    </div>
  );
}

export default App;
