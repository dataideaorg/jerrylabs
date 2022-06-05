const computer_details = document.querySelector('.computer-details')

const form = document.querySelector('.book-form')

const computer_id = new URLSearchParams(location.search).get('id')

const computer_uri = `https://jerrylabs.herokuapp.com/computers/${computer_id}`

const users_uri = 'https://jerrylabs.herokuapp.com/users'

const displayDetails = async () => {

    const res = await fetch(computer_uri)
    const computer = await res.json()

    const template = `
        <div>
            <p><span class = "label">Name: </span> ${computer.name}</p>
            <p><span class = "label">Details: </span> ${computer.details}</p>
        </div>
    `
    computer_details.innerHTML = template

    return computer.name

}

const bookComputer = async (event) => {
    event.preventDefault()
    
    const user_number = form.number.value
    const res = await fetch(`${users_uri}?number=${user_number}`)
    const data = await res.json()
    const user = data[0]

    if(user){
        if(user.computer_id == null){

            await fetch(computer_uri, 
                {
                    method: 'PATCH',
                    body: JSON.stringify({booker_id: user.id}),
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
            
            await fetch(`${users_uri}/${user.id}`, 
                {
                    method: 'PATCH',
                    body: JSON.stringify({computer_id: parseInt(computer_id)}),
                    headers: {
                        'Content-Type' : 'application/json'
                    }
                })
    
                alert(`You've booked computer ${computer_id}`)
                location.assign('/index.html')
            }else{
                alert(`User already booked computer ${user.computer_id}`)
                location.assign('/index.html')
            }
    }else{
        alert('User not registered!')
        location.assign('/signup.html')
    }

    }

form.addEventListener('submit', bookComputer )

window.addEventListener('DOMContentLoaded', () => displayDetails())
