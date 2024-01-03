const convertButton = document.querySelector(".convert-button")
const segundoSelect = document.querySelector(".segundo-select")
const primeiroSelect = document.querySelector(".primeiro-select")



function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const valoraConverter = document.querySelector(".valor-a-converter")
    const valorConvertido = document.querySelector(".valor-convertido")

    console.log(segundoSelect.value)

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.5
    const bitcoinToday = 8.5


    if (segundoSelect.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USS"
        }).format(inputValue / dolarToday)
    }

    if (segundoSelect.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    if (segundoSelect.value == "libra") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBT"
        }).format(inputValue / libraToday)
    }
    if (segundoSelect.value == "bitcoin") {
        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BCT"
        }).format(inputValue / bitcoinToday)
    }
    if (segundoSelect.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }

    
    if (primeiroSelect.value == "real") {
        valoraConverter.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }
    if (primeiroSelect.value == "dolar") {
        valoraConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USS"
        }).format(inputValue)
    }
    if (primeiroSelect.value == "euro") {
        valoraConverter.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
    }

    

    if (primeiroSelect.value == "dolar" && segundoSelect.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * 5.2)
    }

    if (primeiroSelect.value == "euro" && segundoSelect.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * 6.2)
    }


}

function change() {
    const nameSecondCurrency = document.getElementById("name-second-currency")
    const imgCurrency = document.querySelector(".img-currency-2")
    const nameFirstCurrency = document.getElementById("name-first-currency")
    const imgCurrency2 = document.querySelector(".img-currency-1")

    if (segundoSelect.value == "dolar") {
        nameSecondCurrency.innerHTML = "Dólar americano"
        imgCurrency.src = "./assets/estados-unidos (1) 1.png"

    }
    if (segundoSelect.value == "euro") {
        nameSecondCurrency.innerHTML = "Euro"
        imgCurrency.src = "./assets/euro.png"

    }
    if (segundoSelect.value == "libra") {
        nameSecondCurrency.innerHTML = "Libra"
        imgCurrency.src = "./assets/libra 1.png"

    }
    if (segundoSelect.value == "bitcoin") {
        nameSecondCurrency.innerHTML = "Bitcoin"
        imgCurrency.src = "./assets/bitcoin 1.png"

    }
    if (segundoSelect.value == "real") {
        nameSecondCurrency.innerHTML = "Real brasileiro"
        imgCurrency.src = "./assets/brasil 2.png"
    }
    

    if (primeiroSelect.value == "real") {
        nameFirstCurrency.innerHTML = "Real brasileiro"
        imgCurrency2.src = "./assets/brasil 2.png"

    }
    if (primeiroSelect.value == "dolar") {
        nameFirstCurrency.innerHTML = "Dólar americano"
        imgCurrency2.src = "./assets/estados-unidos (1) 1.png"

    }
    if (primeiroSelect.value == "euro") {
        nameFirstCurrency.innerHTML = "Euro"
        imgCurrency2.src = "./assets/euro.png"

    }

    convertValues()

}


primeiroSelect.addEventListener("change", change)
segundoSelect.addEventListener("change", change)
convertButton.addEventListener("click", convertValues)




