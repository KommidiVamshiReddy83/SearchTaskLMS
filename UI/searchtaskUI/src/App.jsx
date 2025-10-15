import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';

export default function App() {
const [selected, setSelected] = useState(null);
return (
<div>
<Navbar onSelect={(p) => setSelected(p)} />
<div style={styles.main}>
{selected && <div style={styles.resultBox}>You selected: <strong>{selected}</strong></div>}
</div>
</div>
);
}


const styles = {
main: { padding: '30px' },
resultBox: {
backgroundColor: '#f9fafb',
border: '1px solid #ccc',
padding: '10px',
borderRadius: '5px',
marginTop: '20px',
},
};