import Button from "../Button/Button";
import css from "./AddRow.module.css";

const AddRow = ({ keys, handleOnClick }) => {
  return (
    <>
      <div className={`${css.calcKeys}`}>
        {keys.map((item) => {
          return (
            <div onClick={handleOnClick} key={item} className={`col-1 ${css.key}`}>
              <Button  btn={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AddRow;
