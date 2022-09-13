import { useState } from "react";
import PropTypes from "prop-types";


export default function Form({ onAdd }) {

    const [note, setNote] = useState('')

    const onFieldChange = event => {
        const { target } = event
        setNote(target.value);
    }


    const onAddNotes = (event) => {
        event.preventDefult();
        onAdd(note);
        setNote('');


    }


    return (
        <form className="note">
            <div className="note_input">
                <label className="note_title">New Note</label>
                <textarea
                    className="note_value"
                    value={note}
                    onChange={onFieldChange} />
            </div>
            <button
                className="add_btn"
                onClick={onAddNotes}>
                ➤
            </button>
        </form >


    )
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired,
};