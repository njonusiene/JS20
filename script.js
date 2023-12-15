const API_URL = "https://open-long-puck.glitch.me/"
const form = document.getElementById("form")
const carInput = document.getElementById("car")
const modelInput = document.getElementById("model")
const notification = document.getElementById("notification")

const showNotification = (message, isSuccess) => {
    notification.textContent = message
    notification.classList.toggle("success", isSuccess)
    notification.classList.toggle("error", !isSuccess)

    setTimeout(() => {
        notification.textContent = ""
        notification.classList.remove("success", "error")
    }, 4000)
}

const submitData = (e) => {
    e.preventDefault()

    if (!carInput.value || !modelInput.value) {
        showNotification("Užpildykite visus laukelius, prašau. :)", false)
        return
    }

    const newCar = {
        brand: carInput.value,
        model: modelInput.value,
    };

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

        showNotification("Duomenys išsaugoti! :)", true)
    })
    .catch((error) => {
        console.error("Klaida:", error)
        showNotification("Įvyko klaida. Duomenys neišsaugoti. :(", false)
    });
};

form.addEventListener("submit", submitData)