// import React from 'react';
// import './styles/_variables.css';
// import './styles/base.css';
// import './styles/components.css';
// import Header from './components/Header';
// import EntriesList from './components/EntriesList';
// import EntryForm from './components/EntryForm';
// import { useState } from 'react';

// function App() {
//   // State for managing entries
//   const [entries, setEntries] = useState([]);
//   const [showEntryForm, setShowEntryForm] = useState(false);
//   const [selectedItemType, setSelectedItemType] = useState('note');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filterType, setFilterType] = useState('all');

//   // Function to add a new entry
//   const handleAddEntry = (newEntry) => {
//     setEntries([newEntry, ...entries]);
//     setShowEntryForm(false);
//   };

//   // Function to delete an entry
//   const handleDeleteEntry = (id) => {
//     setEntries(entries.filter(entry => entry.id !== id));
//   };

//   // Function to edit an entry
//   const handleEditEntry = (updatedEntry) => {
//     setEntries(entries.map(entry => 
//       entry.id === updatedEntry.id ? updatedEntry : entry
//     ));
//   };

//   // Filter entries based on search query and filter type
//   const filteredEntries = entries
//     .filter(entry => {
//       if (filterType === 'all') return true;
//       return entry.type === filterType;
//     })
//     .filter(entry => {
//       if (!searchQuery) return true;
      
//       const query = searchQuery.toLowerCase();
//       return (
//         entry.title.toLowerCase().includes(query) ||
//         (entry.content && entry.content.toLowerCase().includes(query)) ||
//         (entry.tags && entry.tags.some(tag => tag.toLowerCase().includes(query)))
//       );
//     });

//   return (
//     <div className="app-container">
//       <Header 
//         onSearch={setSearchQuery} 
//         searchQuery={searchQuery}
//         filterType={filterType}
//         onFilterChange={setFilterType}
//       />
      
//       <main className="main-content">
//         <div className="container">
//           <button 
//             className="btn btn-primary"
//             onClick={() => setShowEntryForm(true)}
//             style={{ marginBottom: 'var(--spacing-4)' }}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon" width="16" height="16">
//               <path d="M12 5v14M5 12h14" />
//             </svg>
//             Add New Item
//           </button>
          
//           <EntriesList 
//             entries={filteredEntries}
//             onDelete={handleDeleteEntry}
//             onEdit={handleEditEntry}
//           />
//         </div>
//       </main>
      
//       {showEntryForm && (
//         <EntryForm
//           onSubmit={handleAddEntry}
//           onCancel={() => setShowEntryForm(false)}
//           initialType={selectedItemType}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import './styles/_variables.css';
import './styles/base.css';
import './styles/components.css';
import Header from './components/Header';
import EntriesList from './components/EntriesList';
import EntryForm from './components/EntryForm';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';
import { supabase } from './supabaseClient';
import { v4 as uuidv4 } from 'uuid';
function App() {
  // State for managing entries
  const [entries, setEntries] = useState([]);
  const [showEntryForm, setShowEntryForm] = useState(false);
  const [selectedItemType, setSelectedItemType] = useState('note');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Fetch entries from Supabase on mount
  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    const { data, error } = await supabase
      .from('entries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching entries:', error);
    } else {
      setEntries(data);
    }
  };

  // Function to add a new entry
  const handleAddEntry = async (newEntry) => {
    console.log('Adding new entry:', newEntry);

    // Remove createdAt and file before insert to avoid schema error
    const { createdAt, file, ...entryWithoutCreatedAtAndFile } = newEntry;
    // Generate a valid UUID for id
    const entryToInsert = { ...entryWithoutCreatedAtAndFile, id: uuidv4() };
    const { data, error } = await supabase
      .from('entries')
      .insert([entryToInsert])
      .select();

    if (error) {
      console.error('Error adding entry:', error);
      alert('Failed to add entry: ' + error.message);
    } else {
      console.log('Entry added:', data);
      setEntries([data[0], ...entries]);
      setShowEntryForm(false);
    }
  };

  // Function to delete an entry
  const handleDeleteEntry = async (id) => {
    const { error } = await supabase
      .from('entries')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting entry:', error);
    } else {
      setEntries(entries.filter(entry => entry.id !== id));
    }
  };

  // Function to edit an entry
  const handleEditEntry = async (updatedEntry) => {
    // Remove createdAt before update to avoid schema error
    const { createdAt, ...entryWithoutCreatedAt } = updatedEntry;
    const { data, error } = await supabase
      .from('entries')
      .update(entryWithoutCreatedAt)
      .eq('id', updatedEntry.id)
      .select();

    if (error) {
      console.error('Error updating entry:', error);
    } else {
      setEntries(entries.map(entry => 
        entry.id === updatedEntry.id ? data[0] : entry
      ));
    }
  };

  // Filter entries based on search query and filter type
  const filteredEntries = entries
    .filter(entry => {
      if (filterType === 'all') return true;
      return entry.type === filterType;
    })
    .filter(entry => {
      if (!searchQuery) return true;

      const query = searchQuery.toLowerCase();
      return (
        entry.title.toLowerCase().includes(query) ||
        (entry.content && entry.content.toLowerCase().includes(query)) ||
        (entry.tags && entry.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    });

  return (
    <ThemeProvider>
      <div className="app">
        <Header 
          onSearch={setSearchQuery}
          searchQuery={searchQuery}
          filterType={filterType}
          onFilterChange={setFilterType}
        />
        
        <main className="main-content">
          <div className="container">
            <div className="action-bar">
              <button 
                className="btn btn-primary"
                onClick={() => setShowEntryForm(true)}
                style={{ marginBottom: 'var(--spacing-4)' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon" width="16" height="16">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Add New Item
              </button>
            </div>
            
            <EntriesList
              entries={filteredEntries}
              onDelete={handleDeleteEntry}
              onEdit={handleEditEntry}
            />
          </div>
        </main>
        
        <Footer />
        
        {showEntryForm && (
          <EntryForm
            onSubmit={handleAddEntry}
            onCancel={() => setShowEntryForm(false)}
            initialType={selectedItemType}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

