// Importă dependențele necesare
import React from "react";

// Definește componenta Navigation
function Navigation() {
  return (
    <nav className="navigation">
      {/* Aici adaugă conținutul pentru navigație */}
      <ul>
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
        <li>
          <a href="#">Link 3</a>
        </li>
        {/* Adaugă mai multe link-uri după necesitate */}
      </ul>
    </nav>
  );
}

// Exportă componenta Navigation pentru a putea fi utilizată în alte fișiere
export default Navigation;
