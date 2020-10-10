// Code your solutions in this file


function writeCards(array, string) {
    
    let output = []
    for (let i = 0; i < array.length; i++) {
        output.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
    }

    return output

}

function countDown(num) {

    let i = 0

    while (i <= num) {
        console.log(num)
        num--
    }
    
}