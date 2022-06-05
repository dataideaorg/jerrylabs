const form = document.querySelector('.addpc-form')

const uri = "https://jerrylabs.herokuapp.com/computers/"

const handleAddPc = async (event) => {
    event.preventDefault()
    
    const info = {
        name: form.name.value,
        details: form.details.value
    }

    await fetch(uri, 
        {
            method: 'POST',
            body: JSON.stringify(info),
            headers: {
                'Content-Type':'application/json'
            }
        })

        alert(info.name + "has been added")
}

form.addEventListener('submit', handleAddPc)