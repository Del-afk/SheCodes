import react from "react";
import "./searchbar.css";

export default function Searchbar() {
  <div class="input-group mb-3 searchholder">
    <input
      type="text"
      class="form-control"
      placeholder="search city here..."
      aria-label="search city here..."
      aria-describedby="button-addon2"
      id="searchinput"
      autocomplete="off"
    />
    <button
      class="btn btn-outline-secondary searchbutton"
      type="button"
      id="button-addon2"
    >
      <i class="fa-solid fa-magnifying-glass-location"></i>
    </button>
  </div>;
}
