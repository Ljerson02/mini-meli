'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/items?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form className="w-100" role="search" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          id="search-box-input"
          className="form-control"
          type="search"
          placeholder="Buscar"
          aria-label="Buscar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="btn d-flex align-items-center justify-content-center bg-light"
          type="submit"
          style={{ minWidth: 40, padding: 0 }}
          aria-label="Buscar"
        >
          <i className="input-group-texbi bi-search" style={{ fontSize: 20, color: 'black' }}></i>
        </button>
      </div>
    </form>
  );
}
