import React, { useState } from 'react';

export default function Search({ onChange, value }) {
  const [search, setSearch] = useState('');
  return (
    <div>
      <input
        autoFocus
        type="text"
        // value={value && ''}
        onChange={e => setSearch(e.target.value)}
      />
      <input type="submit" onClick={() => onChange(search)} />
    </div>
  );
}
