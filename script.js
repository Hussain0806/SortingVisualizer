const numberOfBars = 10;
const array = [];

function initialize() {
  for (let i = 0; i < numberOfBars; i++) {
    array[i] = Math.random();
  }
  console.log(array);
  showBars();
}

initialize();

function playBubbleSort() {
  const copy = [...array];
  console.log(copy);
  const swaps = BubbleSort(copy);
  console.log(copy);
  animate(swaps);
  console.log(copy);
}
function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
}

function animate(swaps) {
  if (swaps.length == 0) {
    showBars();
    return;
  }
  const [m, n] = swaps.shift();
  console.log([m, n]);

  console.log(array[m], array[n]);

  [array[m], array[n]] = [array[n], array[m]];
  console.log(array[m], array[n]);
  showBars([m, n]);
  setTimeout(function () {
    animate(swaps);
  }, 50);
}

function BubbleSort(array) {
  const swaps = [];
  for (let i = 0; i < array.length; i++) {
    // Last i elements are already in place
    for (let j = 0; j < array.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (array[j] > array[j + 1]) {
        // If the condition is true
        // then swap them
        swaps.push([j, j + 1]);
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return swaps;
}
// console.log(array);

function showBars(indices) {
  //Add the elements of the array as individual bars in the array.
  container.innerHTML = ""; //Very important line otherwise we will always end up showing the bars.
  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = array[i] * 100 + "%";
    bar.classList.add("bar");
    if (indices && indices.includes(i)) {
      bar.style.backgroundColor = "red";
    }
    container.appendChild(bar);
  }
}
