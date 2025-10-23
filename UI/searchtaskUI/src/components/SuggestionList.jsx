import React from 'react';

export default function SuggestionList({ suggestions, active, onSelect, setActive }) {
  return (
    <ul style={styles.list}>
      {suggestions.map((item, index) => (
        <li
          key={index}
          style={{
            ...styles.item,
            backgroundColor: index === active ? '#f1f5ff' : 'white',
            fontWeight: index === active ? '600' : '400',
          }}
          onMouseEnter={() => setActive(index)}
          onMouseDown={(e) => {
            e.preventDefault(); 
            onSelect(item);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

const styles = {
  list: {
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '6px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    maxHeight: '220px',
    overflowY: 'auto',
    boxShadow: '0 3px 8px rgba(0,0,0,0.08)',
    zIndex: 1000,
  },
  item: {
    padding: '10px 14px',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
  },
};
