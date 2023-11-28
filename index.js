addEventListener('DOMContentLoaded', () => {
    function getDogImage() {
        fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(res => res.json)
        
    }
})
getDogImage()