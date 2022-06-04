import { counter } from "./counterObj";

const button = document.getElementById("red");
button.addEventListener("click", () => {
    console.log("Counter total: ", counter.increment());
});
