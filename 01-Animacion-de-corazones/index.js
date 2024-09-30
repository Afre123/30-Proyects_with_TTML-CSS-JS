const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX      /* agarra el evento de la posicion del mouse */
    const yPos = event.offsetY      /* agarra el evento de la posicion del mouse */
    const spanEl = document.createElement("span")   /* crea un elemento "span" */
    spanEl.style.left = xPos + "px";    /* añade el span creado en la posicion del mouse del eje X */
    spanEl.style.top = yPos + "px";
    const size = Math.random()*100;     /* randomiza algunos span */
    spanEl.style.width = size + "px";   
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl)      /* buscar info */
    setTimeout(() => {              /* buscar info */
        spanEl.remove()             /* remueve el span creado */
    }, 3000);

})