import Form from './Form'
import Update from './Update'
import Notelist from './Notelist'
import { useState } from "react";
import { useEffect } from "react";

export default function NoteState() {
    const [noteList, setNoteList] = useState([])


    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        fetch(process.env.REACT_APP_NOTES_URL)
            .then((response) => response.json())
            .then((notes) => {
                setNoteList(notes);
            });
    };

    const postNotes = (item) => {
        fetch(process.env.REACT_APP_NOTES_URL, {
            method: "POST",
            body: JSON.stringify({ content: item }),
        }).then(getNotes());
    };

    const deleteNote = (noteId) => {
        fetch(`${process.env.REACT_APP_NOTES_URL}/${noteId}`, {
            method: "DELETE",
        }).then(() => {
            getNotes();
        });
    };

    const addNote = (item) => {
        postNotes(item);
    };

    const updateNote = () => {
        getNotes();
    };

    return (
        <>
            <Notelist list={noteList} onRemove={deleteNote} />
            <Form onAdd={addNote} />
            <Update onUpdate={updateNote} />
        </>
    )
}