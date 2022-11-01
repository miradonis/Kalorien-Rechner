
const calculate = (event) => {
    event.preventDefault();

    // elemente und werte holen
    const bodySize = document.getElementById("bodySize").value;
    const bodySizeToNumber = Number(bodySize.replace(",", "").replace(".", ""));
    const ageToNumber = Number(document.getElementById("age").value);
    const weight = document.getElementById("weight").value;
    const weightToNumber = Number(weight.replace(",", ".")); 
    const chooseActivity = document.getElementById("chooseActivity").value;
    const grundumsatzKcal = document.getElementById("grundumsatzKcal");
    const grundumsatzKJ = document.getElementById("grundumsatzKJ");
    const gesamtumsatzKcal = document.getElementById("gesamtumsatzKcal");
    const gesamtumsatzKJ = document.getElementById("gesamtumsatzKJ");
    const requiredInformation = document.getElementById("requiredInformation");
    let calculation = 0;
    let total = 0;

    // const female = document.querySelector("#female").checked;
    // const male = document.querySelector("#male").checked;

    if(!(bodySizeToNumber && ageToNumber && weightToNumber)) {
        console.error("Eingabe fehlt");
        requiredInformation.innerHTML = "Bitte alle Felder ausfüllen";
        return;
    }

    if((bodySizeToNumber && ageToNumber && weightToNumber)) {
        requiredInformation.innerHTML = "";
    }

    // berechnung gesamtumsatz
    const totalScore = (calculation) => {
                switch (chooseActivity) {
            case "1":
                total = calculation * 0.95;
                break;
            case "2":
                total = calculation * 1.2;
                break;
            case "3":
                total = calculation * 1.5;
                break;
            case "4":
                total = calculation * 1.7;
                break;
            case "5":
                total = calculation * 1.9;
                break;
            case "6":
                total = calculation * 2.2;
                break;
            default:
                console.log("war wohl nüscht");
                break;
        }
    }

    // berechnung für female
    if (female) {
        calculation = 655.1 + (9.6 * weightToNumber) + (1.8 * bodySizeToNumber) - (4.7 * ageToNumber);
        totalScore(calculation);

        // berechnung für male
    } else {
        calculation = 664.7 + (13.7 * weightToNumber) + (5 * bodySizeToNumber) - (6.8 * ageToNumber);
        totalScore(calculation);
    }

    // werte zurück ins html
    grundumsatzKcal.innerHTML = calculation.toFixed(2);
    grundumsatzKJ.innerHTML = (calculation * 4.184).toFixed(2);
    gesamtumsatzKcal.innerHTML = total.toFixed(2);
    gesamtumsatzKJ.innerHTML = (total * 4.184).toFixed(2);
}

