console.log('\nVERY EASY');
console.log('\nQ1 - Convert minutes into seconds\n\n');

function time_convert(num)
 { 
  var seconds = Math.floor(num * 60);  
  return `${seconds}`;         
}

console.log(time_convert(5));
console.log(time_convert(3));
console.log(time_convert(2));

console.log('\nQ2 - Divides Evenly\n\n');

let dividesEvenly = function(a,b){
  if(a%b === 0){
    return 'true';
  }else{
    return 'false';
  }
}
result = dividesEvenly(22,2);
console.log(`${result}`);

result = dividesEvenly(39,7);
console.log(`${result}`);
