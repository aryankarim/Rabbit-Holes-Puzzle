let arr = []
let rabbitHole = Math.floor(Math.random()*4)

console.log('rabbit is in:',rabbitHole)

for (let i = 0; i < 4; i++) {
 if(rabbitHole===i)
   arr[i]='G'
 else
   arr[i]='.'
}


while (true) {
  if(checkHole(1))
    return
}


function checkHole(index){
 if(arr[index]==="G"){
   console.log('you won')
   return true
 }
 else {
   arr[rabbitHole]="."
   if (Math.random() < 0.5) {
     changeRabbit("left")
   } else{
     changeRabbit("right")
   }
   return false
 }
}

function changeRabbit(direction){
  if(direction==="right"){
    if(rabbitHole===arr.length-1){
      arr[rabbitHole-1]= "G"
      rabbitHole--
    }else{
      arr[rabbitHole+1]= "G"
      rabbitHole++
    }
  }
 if(direction==="left"){
   if(rabbitHole===0){
     arr[rabbitHole+1]= "G"
     rabbitHole++
   }else{
     arr[rabbitHole-1]= "G"
     rabbitHole--
   }
 }
 console.log(arr)
}
