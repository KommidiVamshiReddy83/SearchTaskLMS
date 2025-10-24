import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import SuggestionList from "./Suggestions";

export default function SearchBox({ onSelect }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [visible, setVisible] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const [noResult, setNoResult] = useState(false);
  const boxRef = useRef(null);
  const debounce = useRef(null);

  const API_BASE = "http://localhost:8080";

  
  useEffect(() => {
    clearTimeout(debounce.current);
    if (!query.trim()) {
      setSuggestions([]);
      setVisible(false);
      setNoResult(false);
      return;
    }

    debounce.current = setTimeout(async () => {
      try {
        const res = await axios.get(`${API_BASE}/search`, {
          params: { courseName: query.trim() },
        });
        const data = Array.isArray(res.data) ? res.data : [];
        setSuggestions(data);
        setVisible(true);
        setNoResult(data.length === 0);
      } catch (err) {
        console.error("Error fetching data:", err);
        setSuggestions([]);
        setNoResult(true);
      }
    }, 300);
  }, [query]);


  useEffect(() => {
    const closeOnOutsideClick = (e) => {
      if (!boxRef.current?.contains(e.target)) setVisible(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  const chooseSuggestion = (item) => {
    setQuery(""); 
    setVisible(false);
    onSelect && onSelect(item);
  };

  const handleKeys = (e) => {
    if (!visible) return;
    if (e.key === "ArrowDown") setHighlighted((i) => Math.min(i + 1, suggestions.length - 1));
    else if (e.key === "ArrowUp") setHighlighted((i) => Math.max(i - 1, 0));
    else if (e.key === "Enter") {
      e.preventDefault();
      if (suggestions[highlighted]) chooseSuggestion(suggestions[highlighted]);
      else if (query.trim()) {
        onSelect && onSelect(query.trim());
        setQuery("");
        setVisible(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSelect && onSelect(query.trim());
      setQuery("");
    }
    setVisible(false);
  };

  return (
    <div ref={boxRef} style={styles.wrapper}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          id="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => suggestions.length && setVisible(true)}
          onKeyDown={handleKeys}
          placeholder="🔍 Search for a course..."
          style={styles.input}
        />
        <button type="submit" style={styles.btn}>
          Go
        </button>
      </form>

      {visible && (
        <div style={styles.dropdown}>
          {suggestions.length > 0 ? (
            <SuggestionList
              suggestions={suggestions}
              active={highlighted}
              onSelect={chooseSuggestion}
              setActive={setHighlighted}
            />
          ) : (
            noResult && <div style={styles.noResults}>No matches found 🚫</div>
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: { position: "relative", width: "100%", maxWidth: "480px" },
  form: { display: "flex" },
  input: {
    flex: 1,
    padding: "12px 14px",
    border: "1px solid #36a92cff",
    borderRadius: "8px 0 0 8px",
    outline: "none",
    fontSize: "15px",
  },
  btn: {
    border: "none",
    background: "#36a92cff",
    color: "#fff",
    padding: "0 18px",
    borderRadius: "0 8px 8px 0",
    fontWeight: "600",
    cursor: "pointer",
  },
  dropdown: { position: "absolute", top: "44px", left: 0, right: 0 },
  noResults: {
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px 14px",
    color: "#666",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  },
};
