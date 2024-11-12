import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <div className={s.header}>
      <button className={s.button} onClick={handleLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
