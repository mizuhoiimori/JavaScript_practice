// let max = 100;
// let num = 1;
// let count = 0;

// while(num <max){
//   num = num*2;
//   count = count + 1;
// }

// alert("2をかけ続けて" + max + "を超えるのに必要だった回数は" + count +"回です");

let i;
let num = 0;

for (i = 1; i < 11; i++){ 
  // 「i++」は「i = i+1」と同じ
  num = num + i;
}

alert("1から10まで足し算した結果は" + num + "です");