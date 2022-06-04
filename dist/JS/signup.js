const form = document.querySelector('.signup-form')

const uri = "http://localhost:3000/users"
form.addEventListener('submit', async (event) => {
event.preventDefault()

const document = {
    name: form.name.value,
    number: form.number.value,
    password: form.password.value,
    computer_id: null
}

await fetch(uri,
{
    method: 'POST',
    body: JSON.stringify(document),
    headers: {
        'Content-Type': 'application/json'
    }
})
})