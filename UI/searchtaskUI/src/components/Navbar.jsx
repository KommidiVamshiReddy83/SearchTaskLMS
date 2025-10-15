import React from 'react';
import SearchBox from './Searchbox';


export default function Navbar({ onSelect }) {
return (
<div style={styles.navbar}>
<div style={styles.logo}>LMS Universe</div>
<SearchBox onSelect={onSelect} />
<div style={styles.buttons}>

</div>
</div>
);
}


const styles = {
navbar: {
display: 'flex',
alignItems: 'center',
justifyContent: 'space-between',
padding: '10px 20px',
backgroundColor: '#fff',
boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
},
logo: { fontSize: '20px', fontWeight: 'bold' },
buttons: { display: 'flex', gap: '10px' },
button: {
border: '1px solid #ccc',
backgroundColor: '#fff',
borderRadius: '5px',
padding: '5px 10px',
cursor: 'pointer',
},
};