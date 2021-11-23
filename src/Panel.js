import './App.css';
import List from "./List";

function Panel(props) {
    const {status, list, del, up, down} = props
    return (
        <div className="App">
            <h4>
                {status}
            </h4>
            {list.filter(list => list.status === status)
                .map(list =>
                <div key={list.id}>
                    <List list={list} del={del} up={up} down={down}/>
                </div>
                )}
        </div>
    );
}

export default Panel;
