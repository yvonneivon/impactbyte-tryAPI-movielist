const form = document.getElementById('form');

form.addEventListener(`submit`, function(preventClick){
    login(event)
});

function login(event){
    event.preventDefault()

const url = 'https://5e90684d2810f4001648aeea.mockapi.io/users'
const userData = {
        email: document.getElementById('email'),
        password: document.getElementById ('password'),
        }

if (userData.email == ''){
    alert('E-mail cannot be empty')
} else if (userData.password == ''){
    alert('Please enter your password')
} else {
fetch (url)
    .then(response => response.json())
    .then(results => {
        const loginUser = results.find(result => result.email === userData.email) // for cross-checking to API

        // if for login validation
        if (loginUser === undefined){
            alert('Email not found. Please sign up')
        } else if ((loginUser.email === userData.email) && (loginUser.password === userData.password)){
            location.replace('./mainPage.html')
        } else {
            alert('Incorrect e-mail or password')
        }
    })
    .catch(error => {
        alert('Something is wrong, please try again')
    })
}   
    }
