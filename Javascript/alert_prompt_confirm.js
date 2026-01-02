//can't run on node as window functions

// let userName = prompt('Enter your name','Anonymous');
// alert(`Hi, ${userName}. Have a good day!`);

let isGay = confirm("Are you gay?")
if (isGay) {
    alert("I knew it");
}
else {
    while (isGay != true) {
        isGay = confirm("Tu hai tujhe pta nhi hai");
    }
    alert("I knew it");
}