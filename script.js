var names = []
let button = document.getElementById('button')
const appenChil = function (){
    let newChil= document.createElement('li')
    let userInput = document.getElementById('userInput')
    newChil.innerText = userInput.value
    let parent4Input = document.getElementById('names')
    parent4Input.appendChild(newChil)
    names.push(userInput.value)
    userInput.value = ''
}

// let userInput = document.getElementById('newTask').value
//                     let newLi = document.createElement('li')
//                     document.getElementById('myTaskList').appendChild(newLi)
//                     let myLiis = document.getElementsByTagName('li')
//                     newLi.innerText = userInput
//                     userInput.innerHTML = ' '


button.addEventListener('click', appenChil)


const sfuffle = function(n){
    let names= document.querySelectorAll('li')
      let myTeam = names[n]
    let teams = document.getElementById('teams')
    let teamsPlace = document.createElement('ol')
    let teamer = document.createElement('li')
teamer.innerText = myTeam



    teams.appendChild(teamsPlace).appendChild(teamer)

}


    
// for(let i = 0; i < arr.length; i++){
// if (n === 4){
//    let myRand = Math.floor(Math.random() * arr.length)+1
// for(let j = 0; j < n; j++ ){


// }

// }
// }




// let names= document.querySelectorAll('li')
//     let arr = Array.from(names)
//     console.log('my ---------------------------------------------------------------arr', ar);