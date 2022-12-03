import { useDebugValue, useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/noteslist";
import Search from "./components/search";
import Header from "./components/header";

const App = () => {
  const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '04/28/2022',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '11/21/2021',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '08/24/2022',
		},
		{
			id: nanoid(),
			text: 'This is my new note!',
			date: '11/30/2022',
		},
	]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}

	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
      <Header 
	    handleCount={notes.length}
	  	handleDarkMode={setDarkMode}
		/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList 
        notes={notes.filter((note) => 
          note.text.toLowerCase().includes(searchText))} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
      </div>
    </div>
    
  );
};

export default App;