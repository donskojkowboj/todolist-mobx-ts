import {observer} from "mobx-react-lite";
import {PendingIcon} from "../../assets/icons/PendingIcon";
import {RemoveIcon} from "../../assets/icons/RemoveIcon";
import {DoneIcon} from "../../assets/icons/DoneIcon";
import styles from './TodoView.module.scss'
import {useState} from "react";



export const TodoView = observer(({todo, id, removeTodo}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(todo.task);
    const finishedTask = `${styles.listItem} ${styles.finished}`;
    const unfinished = `${styles.listItem}`

    const onToggleCompleted = () => {
        todo.completed = !todo.completed;
    }
    const onRename = () => {
        if (newTask.length === 0) return;
        if (isEditing) {
            todo.task = newTask;
        }
        setIsEditing(!isEditing);
    }

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const onRemove = (id) => {
        removeTodo(id);
    }

    return (
            <>
                <li id={`todo-${id}`}  onDoubleClick={onRename} className={todo.completed ? finishedTask : unfinished}>
                    <input
                        id={`checkbox-${id}`}
                        className={styles.checkbox}
                        type='checkbox'
                        checked={todo.completed}
                        onChange={onToggleCompleted}
                    />
                    <label htmlFor={`checkbox-${id}`}>{todo.completed ? <DoneIcon/> : <PendingIcon/>}</label>
                    {isEditing ? (
                        <input
                            type='text'
                            value={newTask}
                            onChange={handleChange}
                            onBlur={onRename}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    onRename();
                                }
                            }}
                            autoFocus
                        />
                    ) : (
                        <span onDoubleClick={onRename}>{todo.task}</span>
                    )}

                    <button onClick={() => onRemove(id)} className={styles.btnRemove}><RemoveIcon/></button>
                </li>

            </>
        )
    })
