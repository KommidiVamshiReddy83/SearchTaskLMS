import React from "react";
import SearchBar from "./Searchbox";

export default function Navbar({ onSelect }) {
  return (
    <header style={styles.container}>
      <div style={styles.leftSection}>
        <span style={styles.logo}>📘 Talents Mind LMS</span>
      </div>

      <div style={styles.centerSection}>
        <SearchBar onSelect={onSelect} />
      </div>

     
    </header>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 28px",
    background: "linear-gradient(90deg, #f9fafb 0%, #eef6ff 100%)",
    boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  leftSection: { flex: 1 },
  centerSection: { flex: 2, display: "flex", justifyContent: "center" },
  rightSection: { flex: 1, display: "flex", justifyContent: "flex-end", gap: "12px" },
  logo: { fontSize: "20px", fontWeight: "700", color: "#1f2937" },
  btn: {
    border: "1px solid #36a92cff",
    background: "transparent",
    color: "#36a92cff",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.2s ease",
  },
};
