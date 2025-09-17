var eventHolder = Math.floor(Math.random() * 6);
var Ammu = ["một", "hai", "ba", "bốn", "năm", "sáu"];
let cylinder = {
    1: "X",
    2: "X",
    3: "X",
    4: "X",
    5: "X",
    6: "X",
    }
const count = 2;
let valueRecall = Reloaded();
 
function Reloaded() {
    const cylinderCloned = structuredClone(cylinder)
    var numConverted = Object.keys(cylinderCloned);
    var usedNum = new Set();
    
    while (usedNum.size < count) {
        var randIndex_loaded = Math.floor(Math.random() * numConverted.length);
        // Phần tử thứ numConverted = phần tử thứ obj - 1. 
        var key = numConverted[randIndex_loaded];
        if(!usedNum.has(key)) {
            // Ví dụ: random key[3] = 4 -> obj[4] = null
            cylinderCloned[key] = null;
            usedNum.add(key);   
        }
    }
    // console.log(usedNum);
    console.log(cylinderCloned);

    return numConverted;
}

function Try() {
    var numLocal = valueRecall;
    var randIndex_check = Math.floor(Math.random() * numLocal.length);
    var checkNum = numLocal[randIndex_check];

    for (i = 0; i < 1; i++) {
        if (numLocal[checkNum] == null) {
            console.log("you won")
        } else {
            console.log("you loss")
        }
    }
    
}

document.getElementById("reload").onclick = Reloaded;
document.getElementById("try").onclick = Try;
