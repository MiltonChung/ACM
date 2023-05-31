import styles from "@/styles/loading.module.scss";

export default function MainLoading() {
  return (
    <div className={styles.wavePage}>
      <div className={styles.ball} />
      <div className={styles.ball} />
      <div className={styles.ball} />
      <div className={styles.ball} />
      <div className={styles.ball} />
    </div>
  );
}
