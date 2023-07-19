// Consegna: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus --> Aggiungere alla pagina un’immagine, presa anch’essa da un data.

// Procedimento logico:
// 1) Importo Vuejs nell'head del file html usando il link della CDN
// 2) Definisco l'elemento HTML dentro il quale Vue verrà utilizzato (<div id="app"></div>)
// 3) Salvo in una variabile locale la funzione createApp(), presa dalla variabile globale Vue
// 4) Attivo Vue sull'elemento con id app


"use script"

const app = Vue.createApp({
    data() {

        return {
            
        }

    }
})

app.mount("#id")