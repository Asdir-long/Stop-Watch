let sec = 00;
let min = 00;
let hrs = 00;
let intervalId = null;
let counting = false;

let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');
let resetBtn = document.querySelector('#reset');

let secDis = document.querySelector('#sec');
let minDis = document.querySelector('#min');
let hrsDis = document.querySelector('#hrs');

const updatePage = () => {
    secDis.innerText = sec;
    minDis.innerText = min;
    hrsDis.innerText = hrs;

};

// button methods
startBtn.addEventListener('click', () => {
    if(counting)
        return;
    counting = true;
    intervalId = setInterval(() => {
        console.log(intervalId);
        sec++;
        updateTime();
        updatePage();
    }, 1000);
})

stopBtn.addEventListener("click", () => {
    console.log("stop",intervalId);
    if (intervalId == null) {
        return;
    }
    console.log(intervalId);
    clearInterval(intervalId);
    counting = false;
})
resetBtn.addEventListener('click', () => {
    sec = 0;
    min = 0;
    hrs = 0;
    updatePage();
})


// helper functions
const updateTime = () => {
    if (sec > 60) {
        sec = 0;
        min++;
    }

    if (min > 60) {
        min = 0;
        hrs++;
    }
    console.log(hrs, min, sec);

}







