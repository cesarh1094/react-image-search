import React, { FC } from 'react';
import styles from './pageControls.module.scss';
import { useThemeContext } from '../../context/ThemeContext/ThemeContext';

interface PageControlProps {
  maxPage: number;
  currentPage: number;
  setCurrentPage: Function;
}

const PageControls: FC<PageControlProps> = ({
  maxPage,
  currentPage,
  setCurrentPage,
}) => {
  const { theme } = useThemeContext();
  const onButtonClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.controls}>
      <div className={styles.control}>
        <button
          className={`${styles['button-' + theme]} ${styles.button}`}
          onClick={() => onButtonClick(currentPage - 1)}
          disabled={1 === currentPage}>
          Previous
        </button>
      </div>
      <div className={styles.control}>
        <button
          className={`${styles['button-' + theme]} ${styles.button}`}
          onClick={() => onButtonClick(currentPage + 1)}
          disabled={currentPage === maxPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PageControls;
