const API_URL = "https://open-long-puck.glitch.me/"
const dataPlace = document.getElementById("dataPlace")

fetch(API_URL, {
    method: "GET",
})
.then((resp) => resp.json())
.then((data) => {
    console.log(data)
    data.map((item) => {
        const newRow = document.createElement("tr")
        newRow.innerHTML = `
            <td>${item.brand}</td>
            <td>${item.model}</td>
        `
        dataPlace.querySelector("tbody").append(newRow)
    })
})
.catch((error) => {
    console.error("Klaida:", error)
});

const icon = document.querySelector(".fa-angles-down")
icon.addEventListener("click", function(){
    window.scrollBy(0, window.innerHeight)
})

const icon2 = document.querySelector(".fa-angles-up")
icon2.addEventListener("click", function(){
    window.scrollBy(0, -window.innerHeight)
})
