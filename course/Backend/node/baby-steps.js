
let sum = 0

process.argv.forEach((val, index) => {

    if ( index > 1) sum += parseFloat(val)

  });

console.log(sum)