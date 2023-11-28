console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {
    function renderDog(url) {
        let div = document.querySelector('#dog-image-container');
        let li = document.createElement('li');

        div.appendChild(li);

        li.innerHTML = `
            <img src="${url}">
        `
    }
    
    function getDogImage() {
        fetch('https://dog.ceo/api/breeds/image/random/4')
        .then (res =>res.json())
        .then(data => {
            data.message.forEach(url => {
                renderDog(url);
            })
        })                    
    }

getDogImage()


    function addBreed(message){
        let ul = document.querySelector('#dog-breeds');
        let li = document.createElement('li');

        ul.appendChild(li);
        li.textContent = `${message}`
    }

    function getBreeds() {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(data => {
            Object.keys(data.message).forEach(breed => {
                addBreed(breed)
            })
        })
    }

getBreeds();

document.querySelector("#dog-breeds").addEventListener('click', (e) => {
    e.preventDefault()
    e.target.style.color = "blue"
})



const dropdown = document.querySelector("#breed-dropdown");
const list = document.querySelector("#dog-breeds");

dropdown.addEventListener('change', (event) => {
    const selectedLetter = event.target.value;

    Array.from(list.children).forEach((item) => {
        const firstLetter = item.textContent.charAt(0);
        if (firstLetter === selectedLetter) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});
})



