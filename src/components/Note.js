
import PropTypes from "prop-types";

export default function Note({ note, handleRemove }) {

    const handle = () => {
        handleRemove(note.id)
    }

    return (
        <div className="node_item">
            <div className="item_value">{note.content}</div>
            <button
                className="remove_btn"
                onClick={handle}>
                ×</button>
        </div>


    )
}

Note.propTypes = {
    note: PropTypes.object,
    handleRemove: PropTypes.func.isRequired,
};