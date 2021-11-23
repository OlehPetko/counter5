import './App.css';
import {useEffect, useState} from "react";
import Panel from "./Panel";

function App() {
    const statuses = ['todo', 'progress', 'review', 'done']
    const itemList = [
        {id: Math.random(), name: 'Task1', status: statuses[0]},
        {id: Math.random(), name: 'Task2', status: statuses[1]},
        {id: Math.random(), name: 'Task3', status: statuses[2]},
        {id: Math.random(), name: 'Task4', status: statuses[3]},
    ]
    const [list, setList] = useState(itemList)
    const [newList, setNewList] = useState('')
    const getNewList = (newList) => {
        const updateNewList = [...list, {id: Math.random(), name: newList, status: statuses[0]}]
        setList(updateNewList)
    }
    const addList = () => {
      getNewList(newList)
        setNewList('')
    }
    const del = (id) => {
      const updateNewList = [...list].filter(el => el.id !== id)
        setList(updateNewList)
    }
    const up  = (id) => {
      const updateDirection = [...list].map(el => el.id === id ? {...el, status: statuses[statuses.indexOf(el.status) - 1]} : el)
    setList(updateDirection)
    }
    const down = (id) => {
      const updateDirection = [...list].map(el => el.id === id ? {...el, status: statuses[statuses.indexOf(el.status) + 1]} : el)
   setList(updateDirection)
    }

    return (
        <div className="App">
            <input placeholder='add' value={newList} onChange={event => setNewList(event.target.value)}/>
            <button onClick={() => addList(newList)}>add</button>
            {statuses.map(status =>
                <div key={status}>
                    <Panel status={status} up={up} list={list} del={del} down={down}/>
                </div>
            )}

        </div>
    );
}

export default App;
