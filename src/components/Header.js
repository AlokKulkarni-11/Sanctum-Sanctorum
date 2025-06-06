import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Header({ onSearch, searchQuery, filterType, onFilterChange, user, onLogout, onShowLogin }) {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="logo-icon">
              {/* Sanctum Sanctorum Logo - Eye of Agamotto Image */}
              <img src="https://i.imgur.com/nVHfbPO.png" alt="Eye of Agamotto" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            </div>
            <h1 className="logo-text" style={{ marginLeft: '10px' }}>Sanctum Sanctorum</h1>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {user ? (
              <div className="user-info" style={{ marginRight: '10px' }}>
                <span>Welcome, {user.email}</span>
                <button className="btn btn-logout" onClick={onLogout} style={{ marginLeft: '10px',backgroundColor: 'var(--btn-primary-bg-light,#2e0a4f',
                  border: '1px solid var(--border-color-light,#4b0082 )', }}>
                  Logout
                </button>
              </div>
            ) : (
              <button
                className="btn btn-login"
                onClick={onShowLogin}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: 'var(--btn-primary-bg-light,#2e0a4f',
                  border: '1px solid var(--border-color-light,#4b0082 )',
                  color: '',
                  fontWeight: 'revert ' ,
                  cursor: 'pointer',
                  fontSize: '1rem',
                  padding: '0.375rem 0.75rem',
                  marginRight: '10px',
                }}
              >
                Login
              </button>
            )}

            <button className="theme-toggle btn" onClick={toggleDarkMode} style={{ display: 'flex', alignItems: 'center' }}>
              {darkMode ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" style={{ marginRight: '5px' }}>
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                  Light Mode
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" style={{ marginRight: '5px' }}>
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                  Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
        
        <div className="search-bar">
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search your items..." 
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        
        <div className="filter-bar">
          <svg className="filter-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          <select 
            className="filter-select" 
            value={filterType}
            onChange={(e) => onFilterChange(e.target.value)}
          >
            <option value="all">All Items</option>
            <option value="note">Notes</option>
            <option value="link">Links</option>
            <option value="youtube">YouTube</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
