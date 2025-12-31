import Button from "../Button/Button";
import css from "./AddRow.module.css";

const AddRow = ({ keys }) => {
  return (
    <>
      <div class={`${css.calcKeys}`}>
        {keys.map((item) => {
          return (
            <div class={`col-1 ${css.key}`}>
              <Button btn={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AddRow;
