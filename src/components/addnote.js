import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const charLimit = 200;

    const handleChange = (event) => {
        if (charLimit - event.target.value.length >= 0) 
            setNoteText(event.target.value);
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && e.ctrlKey) {
            handleSaveClick();
        }
    }

    return (
        <div className="note new">
            <textarea 
            rows="8" 
            cols="10"
            placeholder="Type to add a note..."
            value={noteText}
            onChange={handleChange}
            onKeyDown={(e) => handleKeyPress(e)}
            ></textarea>
            <div className="note-footer">
                <small>{charLimit - noteText.length} Remaining</small>
                <button 
                className="save"
                onClick={handleSaveClick}
                >Save</button>
            </div>
        </div>
    );
}

export default AddNote;