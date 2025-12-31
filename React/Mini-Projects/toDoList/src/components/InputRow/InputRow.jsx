import css from "./InputRow.module.css"

function InputRow() {
  return (
    <div class="container">
      <div class={`${css["pm-row"]} row`}>
        <div class="col-6">
          <input type="text" placeholder="Enter your task here" />
        </div>
        <div class="col-4">
          <input type="date" name="date" id="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-primary add-button">Primary</button>
        </div>

      </div>
    </div>
  );
}

export default InputRow;