# TRACCIA

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato. Potete anche usare immagini diverse e variare leggermente lo stile, l'importante è la logica!

## STEPS

- Creo il MarkUP soltanto di HTML e CSS già con la prospettiva di renderlo poi dinamico.
- Recupero tutti gli elementi necessari.
- Creo l'array con le immagini da inserire nel DOM.
- **FINO A CHE** Non ho inserito tutte le immagini nell'array.

  - Creo gli elementi da inserire nel DOM (all'interno di "gallery")
  - Aggiungo gli elementii che ho creato al DOM.

- Prendo tutti gli elementi dal DOM che ho creato precedentemente.
- Dichiaro l'indice corrente e lo inizializzo per prendere il primo elemento
  dell'Array.
- Aggiungo al primo elemento la classe "Active".

- **ATTENDO** il click della freccia avanti.

  - Rimuovo la classe con l'indice corrente.
  - Incremento l'indice corrente.
  - Aggiungo la classe con l'indice incrementato.

- **ATTENDO** il click della freccia indietro.
  - Rimuovo la classe con l'indice corrente.
  - Decremento una indice.
  - Aggiungo la classe con l'indice incrementato.

---

## BONUS

<br>

**BONUS 1:**
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparre l'ultima e viceversa!

## **Step Bonus 1**

- Qunado l'indice corrente arriva al minimo/massimo deve diventare uguale all'opposto.
- e rimuovo la classe precedente.

---

**BONUS 2:**
Aggiungere la visualizzazione di tutte le thumbnails in basso o sulla destra dell’immagine grande attiva, (usate lo screen in allegato come ispirazione). Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.

Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

## **Step Bonus 2**

- Creare l'HTML e CSS statico con le classi dedicate.
- Andre a prendere l'elemento creato dal DOM.
- Sostituire la classe al click di uno dei due bottoni.
