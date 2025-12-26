let array = [];
const container = document.getElementById("array-container");

function generateArray() {
    container.innerHTML = "";
    array = [];

    for (let i = 0; i < 20; i++) {
        let value = Math.floor(Math.random() * 100) + 10;
        array.push(value);

        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 2}px`;
        container.appendChild(bar);
    }
}

async function bubbleSort() {
    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(j, j + 1);
                await delay(200);
            }
        }
    }
}

async function selectionSort() {
    const bars = document.getElementsByClassName("bar");

    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        swap(i, minIndex);
        await delay(200);
    }
}

function swap(i, j) {
    let bars = document.getElementsByClassName("bar");

    [array[i], array[j]] = [array[j], array[i]];
    [bars[i].style.height, bars[j].style.height] =
        [bars[j].style.height, bars[i].style.height];
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}