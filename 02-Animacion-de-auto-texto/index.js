const containerEl = document.querySelector(".container")

const personalidades = ["fucking bullshit", "a fucking lazy", "and a fuck stupid"]

let personalidadesIndex = 0

let characterIndex = 0;

updateText()

    function updateText() {
        characterIndex++;    
    containerEl.innerHTML = `   
        <h1>Im a ${personalidades[personalidadesIndex].slice(0,1) === "Im" ? "a" : "an"} ${personalidades[personalidadesIndex].slice(0,characterIndex)}</h1>
    `;   /* usar esas comillas para crear un elemento */
        if (characterIndex === personalidades[personalidadesIndex].length){
            personalidadesIndex++
            characterIndex = 0;
        }
        setTimeout(updateText, 200);

        if (personalidadesIndex === personalidades.length){
            personalidadesIndex = 0;
        }
}

