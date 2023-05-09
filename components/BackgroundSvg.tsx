import styles from "../styles/backgroundsvg.module.scss";
import {
  Circle1Icon,
  Circle2Icon,
  DoubleLinesDotIcon,
  DoubleLinesIcon,
  TripleLinesIcon,
} from "../components/svg/icons";

// TODO: randomize svg positions

const BackgroundSVG = () => {
  return (
    <>
      <Circle1Icon className={styles.svg1} />
      <TripleLinesIcon className={styles.svg2} />
      <DoubleLinesDotIcon className={styles.svg3} />
      <DoubleLinesDotIcon className={styles.svg4} />
      <Circle2Icon className={styles.svg5} />
      <TripleLinesIcon className={styles.svg6} />
      <Circle2Icon className={styles.svg7} />
      <Circle2Icon className={styles.svg8} />
      <DoubleLinesIcon className={styles.svg9} />
      <Circle1Icon className={styles.svg10} />
    </>
  );
};

export default BackgroundSVG;
