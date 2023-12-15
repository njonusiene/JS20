// Sukurkite papildomą puslapį, add.html, kuriame būtų forma su dviem inputais - brand ir model; šie paduotų su post'u informaciją į base url (formatas: objektas su dviem properties: brand ir model).
// Sukurkite notification - t.y. sėkmingai užpildžius formą ir gavus patvirtinimą, turi virš formos rašyti, kad duomenys sėkmingai išsaugoti; o jei blogai - išmesti errorą.
// Sukurkite navigaciją, kad galėtumėte tarp puslapių vaikščioti ir patikrinkite ar įrašyti duomenys atsivaizduoja :)

const API_URL = "https://open-long-puck.glitch.me/"
const form = document.getElementById("form")
const carInput = document.getElementById("car")
const modelInput = document.getElementById("model")

const submitData = (e) => {
    e.preventDefault()

    if (!carInput.value || !modelInput.value) {
        alert("Užpildykite visus laukelius")
        return
    }

    const newCar = {
        brand: carInput.value,
        model: modelInput.value,
    }

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCar),
    })
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)

        carInput.value = ""
        modelInput.value = ""

        alert("Duomenys sėkmingai išsaugoti")
    })
    .catch((error) => {
        console.error("Klaida:", error)
        alert("Įvyko klaida. Duomenys neišsaugoti.")
    })
}

form.addEventListener("submit", submitData)
