import React from 'react'
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div className='nav'>
    <nav
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <div className="wrapp">
          <ul class="nav-bar">
            <li className='active-hover'><a className="active" href="#home" style={{ color: theme.color }}>Home</a></li>
            <li><a href="#news" style={{ color: theme.color }}>News</a></li>
            <li><a href="#about" style={{ color: theme.color }}>About</a></li>
            <li><a href="#contact" style={{ color: theme.color }}>Contact</a></li>
          </ul>
          <div className="nav-bar2" style={{ position: "relative" }}>
            <a className="switch-mode" href="#" onClick={toggle} 
            style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                float: "right",
                outline: "none",
              }} data-testid="toggle-theme-btn"
            >
              Switch Nav to {!dark ? "Dark" : "Light"} mode
            </a>
          </div>
        </div>
      </nav>
</div>
  )
}
