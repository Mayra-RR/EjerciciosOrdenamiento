function shellSort(array) {
    let size = array.length;
    let gapSize = Math.floor((size) / 2);
    while (gapSize > 0) {
        for (i = 0; i < gapSize; i++) {
            let temp = array[i];
            console.log(array[gapSize + i],"-", gapSize, "-", i, "-", array[0]);
            for (j = gapSize + i; j >= 0 && array[gapSize + i] < temp; j = j - gapSize){
                array[i] = array[gapSize + i];
                array[gapSize + i] = temp;
            }
            console.log(array);
        }
        gapSize = Math.floor(gapSize/2) 
    }
    return array;
};
console.log(shellSort([3,4,0,-1,1,-4,7,9,2]));
