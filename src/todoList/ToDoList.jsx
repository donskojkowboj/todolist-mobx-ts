import {Container} from "../Container";
import {RocketIcon, PlusIcon, DoneIcon, RemoveIcon, PendingIcon} from "../assets/icons/icons";
import styles from './ToDoList.module.scss'


export const ToDoList = () => {

    const finishedTask = `${styles.listItem} ${styles.finished}`;
    const finishedButton = `<DoneIcon />`;

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
                    <textarea placeholder='Добавьте новое дело' className={styles.addItem}></textarea>
                    <button className={styles.button}>Создать
                        <PlusIcon/>
                    </button>
                </div>


                <div className={styles.listWrapper}>

                    <div className={styles.innerWrapper}>
                        <div className={styles.createdBlock}>
                            <div className={styles.createdTasks}>Cозданные таски</div>
                            <div className={styles.number}>5</div>
                        </div>

                        <div className={styles.doneBlock}>
                            <div className={styles.finishedTasks}>Завершенные таски</div>
                            <div className={styles.number}>2 из 5</div>
                        </div>
                    </div>


                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <button className={styles.btnPending}><PendingIcon/></button>
                            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames
                            integer.
                            <button className={styles.btnRemove}><RemoveIcon/></button>
                        </li>
                        <li className={styles.listItem}>
                            <button className={styles.btnPending}><PendingIcon/></button>
                            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames
                            integer.
                            <button className={styles.btnRemove}><RemoveIcon/></button>
                        </li>
                        <li className={finishedTask}>
                            <button className={styles.btnPending}><DoneIcon/></button>
                            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames
                            integer.
                            <button className={styles.btnRemove}><RemoveIcon/></button>
                        </li>
                    </ul>
                </div>


            </div>
        </Container>

    )
}
