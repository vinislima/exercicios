function solution (inputArray) {

    let maior = 0;

    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > maior) {
            maior = inputArray[i].length;
        }   
    }
    return inputArray.filter(el => el.length === maior);
}    