import Note from './Note'
import PropTypes from "prop-types";
import uuid from "react-uuid";

export default function Notelist({ list, onRemove }) {

    const onRemoveItem = (id) => {
        onRemove(id);

    }





    return (
        <div className="node_list">
            {list.map((o) => (
                <Note note={o} handleRemove={onRemoveItem} key={uuid()} />
            ))}


        </div>


    )
}

Notelist.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
    onRemove: PropTypes.func.isRequired,
};