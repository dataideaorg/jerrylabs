const computer_list = document.querySelector('.computer-list')

const displayComputers = async () => {
    const uri = "http://localhost:3000/computers"

    const res = await fetch(uri)
    const computers = await res.json()

    let template = ''

    computers.forEach(computer => {
        if(computer.booker_id == null){

            template += `
            <div class = "computer">
                <h1>${computer.name}</h1>
                <p>${computer.details}</p>
                <a href= "/book.html?id=${computer.id}">Book</a>
            </div>
        `

        }
        
    });

    computer_list.innerHTML = template
 }
window.addEventListener('DOMContentLoaded', () => displayComputers())