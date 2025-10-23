import React, { useState, useEffect, useRef } from 'react';
import SuggestionList from './SuggestionList';
import { fetchSuggestions } from '../Services/api';

export default function SearchBox({ onSelect }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [noResults, setNoResults] = useState(false);
  const containerRef = useRef(null);
  const timer = useRef(null);


  useEffect(() => {
    clearTimeout(timer.current);
    if (!query.trim()) {
      setSuggestions([]);
      setOpen(false);
      setNoResults(false);
      return;
    }

    timer.current = setTimeout(async () => {
      try {
        const result = await fetchSuggestions(query.trim());
        setSuggestions(result);
        setOpen(true);
        setActive(-1);
        setNoResults(result.length === 0);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    }, 300);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!containerRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectItem = (item) => {
    setQuery(item);
    setOpen(false);
    onSelect && onSelect(item);
  };

  const handleKey = (e) => {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      setActive((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && suggestions[active]) {
      e.preventDefault();
      selectItem(suggestions[active]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSelect(query.trim());
    setOpen(false);
  };

  return (
    <div ref={containerRef} style={styles.wrapper}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          id="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKey}
          onFocus={() => suggestions.length && setOpen(true)}
          placeholder="Search course, e.g. Java, AI/ML..."
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Search</button>
      </form>

      {open && (
        <div style={styles.dropdown}>
          {suggestions.length > 0 ? (
            <SuggestionList
              suggestions={suggestions}
              active={active}
              onSelect={selectItem}
              setActive={setActive}
            />
          ) : (
            noResults && (
              <div style={styles.noResults}>No results found</div>
            )
          )}
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: { position: 'relative', flex: 1, maxWidth: '500px' },
  form: { display: 'flex', width: '100%' },
  input: {
    flex: 1,
    padding: '12px 14px',
    border: '1px solid #36a92cff',
    borderRadius: '6px 0 0 6px',
    outline: 'none',
    fontSize: '15px',
    transition: 'border-color 0.2s ease',
  },
  button: {
    backgroundColor: '#36a92cff',
    color: 'white',
    border: 'none',
    borderRadius: '0 6px 6px 0',
    padding: '12px 18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
  },
  dropdown: { position: 'absolute', top: '45px', left: 0, right: 0 },
  noResults: {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '6px',
    padding: '10px 14px',
    color: '#666',
    boxShadow: '0 2px 5px rgba(0,0,0,0.08)',
  },
};
