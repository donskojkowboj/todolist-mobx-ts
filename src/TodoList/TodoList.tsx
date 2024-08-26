import React, {useState} from "react";

import {observer} from "mobx-react-lite";
import {Container} from "../Container";
import {TodoView} from "./TodoView";
import {RocketIcon, PlusIcon} from "../assets/icons/icons";
import img from "../assets/clipboard.png"

import styles from './TodoList.module.scss'

type TodoListProps = {
    store: any;
}

export const TodoList: React.FC<TodoListProps> = observer(({store}) => {
    const [text, setText] = useState('');

    const onTextChange = (e: any) => {
        setText(e.target.value)
    }

    const onNewTodo = () => {
        if (text.length === 0) return;
        store.addTodo(text);
        setText('')
    }

    const onRemoveTodo = (id: number) => {
        store.removeTodo(id);
    }


    return (
        <Container>
            <div className={styles.wrapper}>
                <div className={styles.iconWrapper}>
                    <RocketIcon/>
                    <div className={styles.textWrapper}>
                        <span className={styles.textTo}>to</span>
                        <span className={styles.textDo}>do</span>
                    </div>
                </div>

                <div className={styles.textArea}>
                    <textarea value={text}
                              onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            onNewTodo();
                        }
                    }} onChange={(e) => onTextChange(e)} placeholder='Добавь новую таску' className={styles.addItem}></textarea>
                    <button onClick={onNewTodo} className={styles.button}>Создать
                        <PlusIcon/>
                    </button>
                </div>


                <div className={styles.listWrapper}>

                    <div className={styles.innerWrapper}>
                        <div className={styles.createdBlock}>
                            <div className={styles.createdTasks}>Cозданные таски</div>
                            <div className={styles.number}>{store.todos.length}</div>
                        </div>

                        <div className={styles.doneBlock}>
                            <div className={styles.finishedTasks}>Завершенные таски</div>
                            <div className={styles.number}>{`${store.completedTodosCount} из ${store.todos.length}`}</div>
                        </div>
                    </div>

                    <div>
                        {store.todos.length === 0 ?
                            <div className={styles.noTasks}>
                                <img className={styles.img} src={img} alt="huita"/>
                                <div className={styles.noTasksText}>
                                    <span className={styles.bold}>  У тебя нет никаких задач</span>
                                    <span> Создай задачи и организуй свои дела</span>
                                   </div>
                             </div> :
                        <ul className={styles.list}>
                            { store.todos.length !== 0 && store.todos.map(
                                (todo: any) => {
                                    return <TodoView removeTodo={onRemoveTodo} todo={todo} id={todo.id} key={todo.id}></TodoView>;
                                }
                            )}
                        </ul>
                        }
                    </div>

                </div>


            </div>
        </Container>
    )
}
)
