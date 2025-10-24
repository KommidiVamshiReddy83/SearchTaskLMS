import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';

export default function App() {
return (
<div>
<Navbar />
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