const mesNameEl = document.getElementById("mes");   /* se llaman a los elementos por el ID */
const diaNameEl = document.getElementById("dia");   /* x2 */
const diaNumEl  = document.getElementById("dia-num"); /* x3 */
const añoNameEl = document.getElementById("año");   /* x4 */

const date = new Date();    /* se crea la variable date para llamar los datos del calendario local */

const mes = date.getMonth(); /* se le asigna las variables dentro del date */


mesNameEl.innerText = date.toLocaleString("es", {   /* se le cambia el string por el string pedido del mes, "("es")" se configura el idioma, y en "{}" se pide el dato a devolver*/
    month:"long"    /* se llama la variable del "month" del tipo long */
});

diaNameEl.innerText = date.toLocaleString("es",{
    weekday:"long"  
});

diaNumEl.innerText = date.getDate();    /* se obvia los pasos anteriores porque solo se necesita el valor tipo INT */

añoNameEl.innerText = date.getFullYear();   /* x2 */