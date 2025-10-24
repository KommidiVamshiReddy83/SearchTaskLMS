import React from "react";

export default function Suggestions({ suggestions, active, onSelect, setActive }) {
  return (
    <ul style={styles.list}>
      {suggestions.map((item, index) => (
        <li
          key={index}
          style={{
            ...styles.item,
            background: index === active ? "#e0f2fe" : "white",
            color: index === active ? "#0369a1" : "#333",
          }}
          onMouseEnter={() => setActive(index)}
          onMouseDown={(e) => {
            e.preventDefault();
            onSelect(item);
          }}
        >
          <span style={styles.icon}>📘</span> {item}
        </li>
      ))}
    </ul>
  );
}

const styles = {
  list: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    background: "#fff",
    margin: 0,
    padding: 0,
    listStyle: "none",
    overflowY: "auto",
    maxHeight: "240px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
    zIndex: 1000,
  },
  item: {
    padding: "10px 14px",
    cursor: "pointer",
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "background 0.2s ease",
  },
  icon: { fontSize: "16px" },
};
