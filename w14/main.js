OUTPUT = document.getElementById("output")

function renderImg (data){
    const section = document.createElement("section")
    let i = 0
    while(i<=20){
        const img = document.createElement("img")
        img.src = data[i].thumbnailUrl
            section.appendChild(img)
            i++
    }
    OUTPUT.appendChild(section)
}

async function attempt2 (data){
    const section = document.createElement("section")
    data.forEach((img) => {
        const imgEl = document.createElement("img")
        imgEl.setAttribute("src", img.thumbnailUrl)
        section.appendChild(imgEl)        
    });
    OUTPUT.appendChild(section)
}

async function start(){
    try{
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => renderImg(json))
            .catch(console.log(`Failed to fetch data`))
    } catch{
        console.log(`Failed to get a response from the server.`)
    }
}

start()

function test(){
    const img = document.createElement("img") 
    img.src = 'https://picsum.photos/150'
        OUTPUT.appendChild(img)
}
test()