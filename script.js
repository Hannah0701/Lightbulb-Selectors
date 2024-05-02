const lightbulb1 = document.querySelector("#lightbulb1");
const lightbulb2 = document.querySelector("#lightbulb2");
const lightbulb3 = document.querySelector("#lightbulb3");

const subTitle = document.querySelector(".subtitle");

let count = 0;

function addOneToCount(event){
    count++;
    subTitle.innerHTML = `You've clicked the lights ${count} times`;
    event.target.classList.toggle("active");
}

lightbulb1.addEventListener("click", addOneToCount);
lightbulb2.addEventListener("click", addOneToCount);
lightbulb3.addEventListener("click", addOneToCount);

// alternative way of writing it out
// lightbulb1.addEventListener("click", () => {
//     count++;
//     subTitle.innerHTML = `You've clicked the lights ${count} times`;
//     lightbulb1.classList.toggle("active");
// });
// lightbulb2.addEventListener("click", () => {
//     count++;
//     subTitle.innerHTML = `You've clicked the lights ${count} times`;
//     lightbulb2.classList.toggle("active");
// });
// lightbulb3.addEventListener("click", () => {
//     count++;
//     subTitle.innerHTML = `You've clicked the lights ${count} times`;
//     lightbulb3.classList.toggle("active");
// });

