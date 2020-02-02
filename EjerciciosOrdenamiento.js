// Bubble Sort

const items = [0, 3, 2, 5, -1, 4]

function Bubble(items) {
    for (let h = 0; h <= items.length; h++) {
        for (let i = 0; i <= items.length; i++) {
            if (items[i] > items[i + 1]) {
                temp = items[i];
                items[i] = items[i + 1];
                items[i + 1] = temp;
            }
        }
    }
    return items
}
console.log("Bubble Sort:", Bubble(items));

// Selection Sort

const items1 = [6, 7, 3, 8, -3, -2]

function Selection(items1) {
    let min;
    let minposition;
    for (let j = 0; j <= items1.length; j++) {
        for (let i = j + 1; i <= items1.length; i++) {
            if (items1[j] > items1[i]) {
                min = items1[i];
                minposition = i;
                let temp = items1[j];
                items1[j] = min;
                items1[minposition] = temp;
            }
        }
    }
    return items1
}
console.log("Selection Sort:", Selection(items1));

// Insertion Sort

const items2 = [3, -2, -6, 5, 4, 0]

function Insertion(items2) {
    for (i = 0; i < items2.length; i++) {
        let x = items2[i];
        j = i - 1
        while (j >= 0 && items2[j] > x) {
            items2[j + 1] = items2[j];
            j = j - 1
        }
        items2[j + 1] = x
    }
    return items2
}
console.log("Insertion Sort:", Insertion(items2));

//Factorial
/*function factorialize(num){
    if (num < 0){
        return -1;
    }
    else if (num == 0){
        return 1;
    }
    else{
        return (num*factorialize(num - 1));
    }
}*/

//Merge Sort

const i3 = [7, 3, -2, -6, 5, 4, 0, 2]

function merge(i3) {
    if (i3.length === 1) {
        return i3;
    }
    redondeo = Math.floor(i3.length / 2);
    let itDer = i3.slice(0, redondeo);
    let itIzq = i3.slice(redondeo);

    var derO = merge(itDer);
    var izqO = merge(itIzq);
    let newO = [];

    while (derO.length > 0 && izqO.length > 0) {
        if (izqO[0] > derO[0]) {
            newO.push(derO[0]);
            derO.shift();
        }
        else {
            newO.push(izqO[0]);
            izqO.shift();
        }
    }

    return newO = [...newO, ...derO, ...izqO]
}
console.log("Merge Sort: ", merge(i3));

//QuickSort

const i5 = [3,-5,-2,7, 1, 8, 0]

function quickSort(i5) {
    if (i5.length <= 1) {
        return i5;
    }
    let menores = [];
    let mayores = [];
    let pivote = i5[0];
    for (i = 1; i < i5.length; i++) {
        if (pivote > i5[i]) {
            menores.push(i5[i]);
        }
        else {
            mayores.push(i5[i]);
        }
    }
    let menoresO = quickSort(menores);
    let mayoresO = quickSort(mayores);
    let acomodo = [...menoresO, pivote, ...mayoresO];
    return acomodo;
}
console.log("Quick Sort :", quickSort(i5));

//ShellSort

/*const i4 = [6, -8, -9, -7, 0, 8, 4, 5, 9, 3, 7, 32, 12];

function shell(i5){
    let gap = Math.floor(i4.length/2)
}
function Insertion(items2) {
    for (i = gap; i < items2.length; i + gap) {
        let x = items2[i];
        j = i - 1
        while (j >= 0 && items2[j] > x) {
            items2[j + 1] = items2[j];
            j = j - 1
        }
        items2[j + 1] = x
    }
    return items2
}
console.log("Insertion Sort:", Insertion(items2));*/

const randomArray = [6,-8,-7,0,4,5,9,3,7,12];

function shellSort(arr) {

    var len = arr.length;
    var gapSize = Math.floor(len / 2);

    while (gapSize > 0) {
        for (var i = gapSize; i < len; i++) {

            var temp = arr[i];
            var j = i;

            while (j >= gapSize && arr[j - gapSize] > temp) {
                arr[j] = arr[j - gapSize];
                j -= gapSize;
            }
            arr[j] = temp;
        }
        gapSize = Math.floor(gapSize / 2);
    }
    return arr;
}
console.log(shellSort(randomArray));

/*function isSorted(array) {
  for(let i = 1, size = array.length; i < size; i++) {
    if (array[i] < array[i-1]) {
      return false;
    }
  }
  return true;
} */

//var mySortedArray = shellSort(randomArray);

//console.log(isSorted(mySortedArray));