const mergeStep = function mergeStep(array1, array2){
    //create array for result
    let result = [];
    //create pointer for array1 and array2 initialize to 0
    let pointer1 = 0;
    let pointer2 = 0;
    



    // while pointer1 < length of array1 and pointer2 < length of array 2
    while (pointer1 < array1.length && pointer2 < array2.length){

        //if array1[pointer1] < array2[pointer]
        if(array1[pointer1] < array2[pointer2]){

            //push array1[pointer1] to result array
            result.push(array1[pointer1]);
            //pointer1++
            pointer1 = pointer1 + 1;
        }
        //else 
        else{

            //push array2[pointer2] to result array
            result.push(array2[pointer2]);
            //pointer2++
            pointer2 = pointer2 + 1;
            

        }
    }

        
    //while pointer1 <  length of array1
    while (pointer1 < array1.length){
        //push array1[pointer1] to result array
        result.push(array1[pointer1]);
        //pointer1++
        pointer1 = pointer1 + 1;

    }
        
//while pointer1 <  length of array1
while (pointer2 < array2.length){
    //push array1[pointer1] to result array
    result.push(array2[pointer2]);
    //pointer1++
    pointer2 = pointer2 + 1;

}

    

    return result;

}

