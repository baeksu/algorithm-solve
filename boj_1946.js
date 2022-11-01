const solution = (scores)=>{
  let arr = [];
  for(score of scores){
    arr.push(score.split(' ').map((el)=>{return parseInt(el)}));
  }

  //정렬
  arr.sort((a,b)=>{
    return a[0] - b[0];
  })

  //for문 돌면서 자기보다 못한 사람이 있는지 체크
  let prev = arr[0][1];
  let ans = 1;
  for(let i=1; i<arr.length ; i++){
    if(arr[i][1] < prev){
      ans++;
      prev = arr[i][1];
    }
  }
  console.log(ans);
  
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});





let input = [];

rl.on('line',(line)=>{
  input.push(line);
  if(line === '') rl.close();
}).on('close',()=>{
  let n;
  let scores = [];
  let testcase = parseInt(input[0]);
  let row = 1;

  for(let tc = 1 ; tc<= testcase ; tc++){
    n = parseInt(input[row]);// 몇명읽을지 정하고
    // console.log(n);
    row++;
    for(let i = row ; i < row+n ; i++){
      scores.push(input[i]);
    }
    solution(scores);
    row+= n;
    scores = [];
  }

  process.exit(0);
})