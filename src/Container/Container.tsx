import styles from './Container.module.scss';

export const Container = (props: any) => {
    return (
        <div className={styles.container}>{props.children}</div>
    )
}
