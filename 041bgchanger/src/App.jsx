import { useState } from 'react';

function App() {
  const [color, setColor] = useState("black");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <button onClick={() => changeColor("blue")} className="mx-2 p-2 bg-white rounded">
          Blue
        </button>
        <button onClick={() => changeColor("red")} className="mx-2 p-2 bg-white rounded">
          Red
        </button>
        <button onClick={() => changeColor("green")} className="mx-2 p-2 bg-white rounded">
          Green
        </button>
      </div>
    </div>
  );
}

export default App;
