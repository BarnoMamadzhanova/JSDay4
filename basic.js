
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
}

sbmBtn.addEventListener('click', displayName)



