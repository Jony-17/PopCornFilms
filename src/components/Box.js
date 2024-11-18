import { useState } from "react";

// Componente com estado
function Box({ children }) {
  const [IsOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {IsOpen ? "–" : "+"}
      </button>

      {IsOpen && children}
    </div>
  );
}

export default Box;
