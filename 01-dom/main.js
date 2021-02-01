const button = document.querySelector("button")
const input = document.querySelector("#text")
const chat = document.querySelector(".chat")
input.focus()

button.onclick = (e) => {
    const message = input.value
    if (message.trim().length > 0) {
        const spanSend = document.createElement("span")
        spanSend.className = "send"
        spanSend.innerText = message
        chat.appendChild(spanSend)


        const spanReceive = document.createElement("span")
        spanReceive.className = "receive"
        chat.appendChild(spanReceive)
        spanReceive.innerText = "typing..."
        setTimeout(() => {
            if (message === "wussap") {
                spanReceive.innerText = "cool u?"
            } else if (message === "What u doing?") {
                spanReceive.innerText = "sitting"
            } else {
                spanReceive.innerText = "what u say?"
            }
        }, 2000)
    }
    input.value = ""
    input.focus()

}

