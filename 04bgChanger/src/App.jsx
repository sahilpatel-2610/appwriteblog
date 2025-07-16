import React, { useState } from 'react';

// function App() {
//   const [color, setColor] = useState("olive");

//   return (
//     <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
//       <div className="flex flex flex-wrap justify-center bottom-12  inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
//           <button
//           className="outline-none px-4 py-1 rounded-full text-white shaow-lg" 
//           style={{backgroundColor: "red"}}
//           >Red</button>
//         </div>
//       </div>
//     </div>

//   )
// }

function App() {
  const [color, setColor] = useState("olive");

  const handleTouchOrClick = (Color) => 
  {
    setColor(Color);
  };

  return (
    <div className="relative w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
           onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
           onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
           onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
           onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
           onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
           onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pueple" }}
          >
            Purple
          </button>
          <button
           onClick={() => setColor("lavender")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
           onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
           onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
           onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
           onClick={() => setColor("brown")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
           onClick={() => setColor("indigo")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "indigo" }}
          >
            Indigo
          </button>
          <button
           onClick={() => setColor("violet")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
          <button
           onClick={() => setColor("navy")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "navy" }}
          >
            Navy
          </button>
          <button
           onClick={() => setColor("teal")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "teal" }}
          >
            Teal
          </button>
          <button
           onClick={() => setColor("turquoise")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "turquoise" }}
          >
            Turquoise
          </button>
          <button
           onClick={() => setColor("magenta")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "magenta" }}
          >
            Magenta
          </button>
          <button
           onClick={() => setColor("cyan")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "cyan" }}
          >
            Cyan
          </button>
          <button
           onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
           onClick={() => setColor("lime")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "lime" }}
          >
            Lime
          </button>
          <button
           onClick={() => setColor("coral")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "coral" }}
          >
            Coral
          </button>
          <button
           onClick={() => setColor("peach")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "peach" }}
          >
            Peach
          </button>
          <button
           onClick={() => setColor("beige")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "beige" }}
          >
            Beige
          </button>
          <button
           onClick={() => setColor("mint")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "mint" }}
          >
            Mint
          </button>
          <button
           onClick={() => setColor("gold")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "gold" }}
          >
            Gold
          </button>
        </div>
        <button
           onClick={() => setColor("silver")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "silver" }}
          >
            Silver
          </button>
          <button
           onTouchStart={() => handleTouchOrClick('charcoal')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'charcoal' }}
          >
            Charcoal
          </button>
          <button
           onClick={() => setColor("midnight blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "midnight blue" }}
          >
            Midnight Blue
          </button>
          <button
           onClick={() => setColor("forest green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "forest green" }}
          >
            Forest Green
          </button>
          <button
           onClick={() => setColor("burgundy")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "burgundy" }}
          >
            Burgundy
          </button>
          <button
           onClick={() => setColor("slate gray")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "slate gray" }}
          >
            Slate Gray
          </button>
          <button
            onClick={() => handleTouchOrClick('baby blue')}
            onTouchStart={() => handleTouchOrClick('baby blue')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: 'baby blue' }} 
        >
            Baby Blue
          </button>
          <button
           onClick={() => setColor("light pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "light pink" }}
          >
            Light Pink
          </button>
          <button
           onClick={() => setColor("sky blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "sky blue" }}
          >
            Sky Blue
          </button>
          <button
           onClick={() => setColor("lilac")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "lilac" }}
          >
            Lilac
          </button>
          <button
           onClick={() => setColor("cream")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "cream" }}
          >
            Cream
          </button>
          <button
           onClick={() => setColor("powder blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "powder blue" }}
          >
            Powder Blue
          </button>
      </div>
    </div>
  );
}

export default App
