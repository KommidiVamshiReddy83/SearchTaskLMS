import React from 'react';


export default function SuggestionList({ suggestions, active, onSelect, setActive }) {
return (
<ul style={styles.list}>
{suggestions.map((item, index) => (
<li
key={index}
style={{ ...styles.item, backgroundColor: index === active ? '#eef2ff' : 'white' }}
onMouseEnter={() => setActive(index)}
onMouseDown={(e) => { e.preventDefault(); onSelect(item); }}
>
{item}
</li>
))}
</ul>
);
}


const styles = {
list: {
position: 'absolute',
top: '40px',
left: 0,
right: 0,
backgroundColor: 'white',
border: '1px solid #ccc',
borderRadius: '5px',
listStyle: 'none',
margin: 0,
padding: 0,
maxHeight: '200px',
overflowY: 'auto',
zIndex: 1000,
},
item: {
padding: '8px 12px',
cursor: 'pointer',
},
};