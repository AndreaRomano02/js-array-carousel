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

**BONUS 1:**
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparre l'ultima e viceversa!

## **Step Bonus 1**

-
