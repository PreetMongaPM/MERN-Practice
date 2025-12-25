let cntBtn = document.querySelector(".cntBtn");
let cntBtn2 = document.querySelector(".cntBtn2");
let heading = document.querySelector(".heading");
let multiply = document.querySelector(".multiply");
let reset = document.querySelector(".reset");

// let cnt1 = 0;
// let cnt2 = 0;
cntBtn.onclick = (e)=>{
    let cnt1 = document.querySelector(".cnt1");
    let cnt2 = document.querySelector(".cnt2");

    let currentCnt1 = cnt1.textContent - '0';
    currentCnt1++;
    let currentCnt2 = cnt2.textContent - '0';

    cnt1.textContent = `${currentCnt1}`;
    heading.textContent = `Counter : ${currentCnt1 + currentCnt2}`;
    cnt2.textContent = `${currentCnt2}`;
    multiply.textContent = `X : ${currentCnt1*currentCnt2}`;
}
cntBtn2.onclick = (e)=>{
    let cnt1 = document.querySelector(".cnt1");
    let cnt2 = document.querySelector(".cnt2");

    let currentCnt1 = cnt1.textContent - '0';
    let currentCnt2 = cnt2.textContent - '0';
    currentCnt2++;

    cnt1.textContent = `${currentCnt1}`;
    heading.textContent = `Counter : ${currentCnt1 + currentCnt2}`;
    cnt2.textContent = `${currentCnt2}`;
    multiply.textContent = `X : ${currentCnt1*currentCnt2}`;
}


reset.onclick = (e)=>{
    let cnt1 = document.querySelector(".cnt1");
    let cnt2 = document.querySelector(".cnt2");

    // // let currentCnt1 = cnt1.textContent - '0';
    // let currentCnt2 = cnt2.textContent - '0';
    // currentCnt2++;

    cnt1.textContent = `0`;
    heading.textContent = `Counter : 0`;
    cnt2.textContent = `0`;
    multiply.textContent = `X : 0`;
}