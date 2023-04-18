import { useState } from "react"

const AddNote = ({ addNote }) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (e) => {
        if (characterLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    }

    const handleSave = () => {
        if (noteText.trim().length > 0) {
            addNote(noteText);
            setNoteText('')
        }
    }

    return (
        <div className="note new">
            <textarea
                placeholder="Type to add a note..."
                cols="10"
                rows="8"
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remainig</small>
                <button className="save" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default AddNote