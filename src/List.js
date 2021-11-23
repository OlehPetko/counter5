import './App.css';
import {useState} from "react";

function List(props) {
    const {list, del, up, down} = props
    const [visible, setVisible] = useState(true)
    return (
        <div className="App">
            {list.name}
            {list.status !== 'todo' && <button onClick={() => up(list.id)}>up</button>}
            {list.status !== 'done' && <button onClick={() => down(list.id)}>down</button>}
            <button onClick={() => del(list.id)}>delete</button>
            {visible ? (

                <button onClick={() => setVisible(!visible)}>done</button>
            ) : (
                <div>
                    <input/>
                    <button>save</button>
                    <button onClick={() => setVisible(true)}>cancel</button>
                </div>
            )}
        </div>
    );
}

export default List;
