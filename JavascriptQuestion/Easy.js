console.log('\nEASY');
console.log('\nQ1 - Count Instances of a Character in a String\n\n');

let charCount = function(letter, str){
    let count=0;
    for(let i=0; i<str.length; i++)
    {
        if(letter === str[i])
        {
            count++;
        }
    }
    return count;
}

result = charCount('a', 'Be yourself; everyone else is already taken.');
console.log(`${result}`);

result = charCount('b', 'Be brave to stand for what you believe in even if you stand alone.');
console.log(`${result}`);

console.log('\nQ2 - Add up the Numbers from a Single Number\n\n');

function addUp(num){
    var sum = 0;
    for(var i = 1; i <= num; i++){
      sum += i;
    }
    return sum;
  } 
console.log(addUp(8));
console.log(addUp(14));  
console.log(addUp(135));

console.log('\nQ3 - Replace Vowel with Another Character\n\n');

let replaceVowel = function(name){
    let a = name.replace(/a/gi, '1');
    let e = a.replace(/e/gi, '2');
    let i = e.replace(/i/gi, '3');
    let o = i.replace(/o/gi, '4');
    let u = o.replace(/u/gi, '5');
    return u;
}
result = replaceVowel('karachi');
console.log(result);

result = replaceVowel('chembur');
console.log(result);

result = replaceVowel('khandbari');
console.log(result);