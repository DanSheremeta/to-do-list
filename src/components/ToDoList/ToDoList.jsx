import React, {useState} from "react";
import styles from "./ToDoList.module.css";


function ToDoList() {

    const [tasks, setTasks] = useState(["Eat some food", "Take a shower"]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
        else {
            alert("Please enter some text to add task!")
        }
    };

    const deleteTask = (index) => {
        setTasks(t => t.filter((_, i) => i !== index))
    };

    const moveTaskUp = (index) => {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    const moveTaskDown = (index) => {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    return (
        <div className={styles.toDoList}>
            <h1>To-Do List</h1>

            <div>
                <input
                    type="text" placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button
                    className={styles.addButton}
                    onClick={addTask}
                >
                    Add
                </button>
            </div>

            <ol>
                {
                    tasks.map(
                        (task, index) =>
                            <li key={index}>
                                <span className={styles.text}>{task}</span>
                                <button
                                    className={styles.deleteButton}
                                    onClick={() => deleteTask(index)}
                                >
                                    Delete
                                </button>
                                <button
                                    className={styles.moveButton}
                                    onClick={() => moveTaskUp(index)}
                                >
                                    ☝️
                                </button>
                                <button
                                    className={styles.moveButton}
                                    onClick={() => moveTaskDown(index)}
                                >
                                    👇
                                </button>
                            </li>
                    )
                }
            </ol>
        </div>
    );
}

export default ToDoList
