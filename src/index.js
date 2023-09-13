import { Popup } from "./popup";

const body = document.body;

body.addEventListener("click", (e) => {
  Popup.open(e);
  Popup.close(e);
});
