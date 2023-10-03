
const sbmBtn = document.getElementById('sbmBtn')


function displayName() {

    let fname = document.getElementById('firstname').value
    let lname = document.getElementById('lastname').value
    let age = document.getElementById('age').value
    const input = document.getElementById('display-input')
    input.innerHTML = `<p class='lead display'>${fname} ${lname} ${age} years old.</p>`
    const reaction = document.getElementById('display-input')
    
      if (fname.length + lname.length > 5){
        input.style.color = 'green'
      } else {
        input.style.color = 'red'
        reaction.innerHTML = `<p>Please put your full name</p>`
      }

    let profession = document.getElementById('selector').value
     
     if(profession == "1") {
        input.style.backgroundColor = 'lightblue'
     } else if(profession == "2") {
        input.style.backgroundColor = 'purple'
     } else if(profession == "3") {
        input.style.backgroundColor = 'lightcoral'
     } else if(profession == "4") {
        input.style.backgroundColor = 'lightyellow'
     } else if(profession == "5") {
        input.style.backgroundColor = 'magenta'
     } else if(profession == "6") {
        input.style.backgroundColor = 'orchid'
     } else {
        input.style.backgroundColor = 'grey'
     }
}

sbmBtn.addEventListener('click', displayName)


