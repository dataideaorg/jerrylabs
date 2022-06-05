const computer_list = document.querySelector('.computer-list')

const displayComputers = async () => {
    const uri = "jerrylabs.herokuapp.com/computers"

    const res = await fetch(uri)
    const computers = await res.json()

    let template = ''

    computers.forEach(computer => {
        if(computer.booker_id == null){

            template += `
            <div class = "computer">
                <div>
                    <h2>${computer.name}</h2>
                    <a href= "/book.html?id=${computer.id}" class ="book-button">Book</a>
                </div>
                <p>${computer.details}</p>
            </div>
        `

        }
        
    });

    if(template == ''){
        computer_list.innerHTML = '<h1 class = "home-heading">No Free Computers Available</h1>'
    }else{
        computer_list.innerHTML = template
    }
 
 }
window.addEventListener('DOMContentLoaded', () => displayComputers())
