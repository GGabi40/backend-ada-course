// Accesando un servidor con fetch


// Forma 1:
const response = fetch('http://localhost:3000')
    .then(response => (response.text()
    .then(data => console.log(data))
));


// Forma 2:
async function makeRequest() {
    const response = await fetch('http://localhost:3000')
    const data = await response.text()

    console.log(data);
}

makeRequest();