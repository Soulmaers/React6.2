import PropTypes from "prop-types";


export default function Update({ onUpdate }) {

    const onUpdateNotes = (event) => {
        event.preventDefault();
        onUpdate();
    }

    return (
        <div className="update">
            <label className="update_title">Notes </label>
            <button className="update_btn" onClick={onUpdateNotes}>
                ↺
            </button>
        </div>

    )
}
Update.propTypes = {
    onUpdate: PropTypes.func.isRequired,
};