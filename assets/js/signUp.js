const form = document.getElementById('form')

form.addEventListener(`submit`, function(preventClick){
    register(event)
})

function register(event){
    event.preventDefault()

const fullName = document.getElementById('fullName').value 
const email = document.getElementById('email').value
const password = document.getElementById('password').value        

    if (fullName == ''){
        alert('Full name is required')
    } else if (email == '' || email == null){
        alert('Email is required')
    } else if (password === ''){
        alert('Your password cannot be empty');       
    } else if (password.length < 8){
        alert('Your password must be longer than 8 characters')
    } else {
        const userData = {
            fullName,
            email,
            password
        }

    const url = 'https://5e90684d2810f4001648aeea.mockapi.io/users'
    const option = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(userData) 
    }

    fetch(url, option)
        .then(response => response.json())
        .then(result => {
            alert('Registration succeed!')
                location.href = 'mainPage.html'
        })
        .catch(error => {
            alert('Registration failed!')
        })
    }
}
