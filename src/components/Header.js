// import React, { useState } from 'react';

// function Header({ onSearch, searchQuery, filterType, onFilterChange }) {
//   const [isDarkMode, setIsDarkMode] = useState(true);
  
//   // This would toggle light/dark mode in a real implementation
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     // Here you would apply the theme change to the document
//   };
  
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="header-content">
//           <div className="logo">
//             <div className="logo-icon">
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
//                 <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
//               </svg>
//             </div>
//             <h1 className="logo-text">Sanctum Sanctorum</h1>
//           </div>
          
//           <button className="theme-toggle" onClick={toggleTheme}>
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
//               <circle cx="12" cy="12" r="5" />
//               <line x1="12" y1="1" x2="12" y2="3" />
//               <line x1="12" y1="21" x2="12" y2="23" />
//               <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
//               <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
//               <line x1="1" y1="12" x2="3" y2="12" />
//               <line x1="21" y1="12" x2="23" y2="12" />
//               <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
//               <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
//             </svg>
//             Light
//           </button>
//         </div>
        
//         <div className="search-bar">
//           <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
//             <circle cx="11" cy="11" r="8" />
//             <line x1="21" y1="21" x2="16.65" y2="16.65" />
//           </svg>
//           <input 
//             type="text" 
//             className="search-input" 
//             placeholder="Search your items..." 
//             value={searchQuery}
//             onChange={(e) => onSearch(e.target.value)}
//           />
//         </div>
        
//         <div className="filter-bar">
//           <svg className="filter-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
//             <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
//           </svg>
//           <select 
//             className="filter-select" 
//             value={filterType}
//             onChange={(e) => onFilterChange(e.target.value)}
//           >
//             <option value="all">All Items</option>
//             <option value="note">Notes</option>
//             <option value="link">Links</option>
//             <option value="youtube">YouTube</option>
//           </select>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


// import React, { useContext } from 'react';
// import { ThemeContext } from './ThemeContext';

// function Header({ onSearch, searchQuery, filterType, onFilterChange }) {
//   const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="header-content">
//           <div className="logo">
//             <div className="logo-icon">
//               {/* Sanctum Sanctorum Logo - Mystic Eye */}
//               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                 <circle cx="12" cy="12" r="10" />
//                 <circle cx="12" cy="12" r="4" />
//                 <line x1="12" y1="2" x2="12" y2="4" />
//                 <line x1="12" y1="20" x2="12" y2="22" />
//                 <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
//                 <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
//                 <line x1="2" y1="12" x2="4" y2="12" />
//                 <line x1="20" y1="12" x2="22" y2="12" />
//                 <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
//                 <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
//               </svg>
//             </div>
//             <h1 className="logo-text">Sanctum Sanctorum</h1>
//           </div>
          
//           <button className="theme-toggle" onClick={toggleDarkMode}>
//             {darkMode ? (
//               <>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
//                   <circle cx="12" cy="12" r="5" />
//                   <line x1="12" y1="1" x2="12" y2="3" />
//                   <line x1="12" y1="21" x2="12" y2="23" />
//                   <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
//                   <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
//                   <line x1="1" y1="12" x2="3" y2="12" />
//                   <line x1="21" y1="12" x2="23" y2="12" />
//                   <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
//                   <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
//                 </svg>
//                 Light Mode
//               </>
//             ) : (
//               <>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
//                   <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
//                 </svg>
//                 Dark Mode
//               </>
//             )}
//           </button>
//         </div>
        
//         <div className="search-bar">
//           <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
//             <circle cx="11" cy="11" r="8" />
//             <line x1="21" y1="21" x2="16.65" y2="16.65" />
//           </svg>
//           <input 
//             type="text" 
//             className="search-input" 
//             placeholder="Search your items..." 
//             value={searchQuery}
//             onChange={(e) => onSearch(e.target.value)}
//           />
//         </div>
        
//         <div className="filter-bar">
//           <svg className="filter-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
//             <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
//           </svg>
//           <select 
//             className="filter-select" 
//             value={filterType}
//             onChange={(e) => onFilterChange(e.target.value)}
//           >
//             <option value="all">All Items</option>
//             <option value="note">Notes</option>
//             <option value="link">Links</option>
//             <option value="youtube">YouTube</option>
//           </select>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';



function Header({ onSearch, searchQuery, filterType, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              {/* Sanctum Sanctorum Logo - Eye of Agamotto Image */}
              <img src="https://i.imgur.com/nVHfbPO.png" alt="Eye of Agamotto" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            </div>
            <h1 className="logo-text">Sanctum Sanctorum</h1>
          </div>
          
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                Dark Mode
              </>
            )}
          </button>
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
