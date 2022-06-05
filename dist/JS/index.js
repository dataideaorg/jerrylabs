const computer_list = document.querySelector('.computer-list')

const displayComputers = async () => {
    const uri = "https://jerrylabs.herokuapp.com/computers"

    const res = await fetch(uri)
    const computers = await res.json()

    let template = ''

    computers.forEach(computer => {
        if(computer.booker_id == null){

            template += `
            <div class = "computer">
                <a type = "text/html" href= "book.html?id=${computer.id}">
                    <div>
                        <h2>${computer.name}</h2>
                    </div>
                    <p>${computer.details}</p>
                </a>
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
