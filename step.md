# TRACCIA

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato. Potete anche usare immagini diverse e variare leggermente lo stile, l'importante è la logica!

## STEPS

- Creo il MarkUP soltanto di HTML e CSS già con la prospettiva di renderlo poi dinamico.
- Recupero tutti gli elementi necessari.
- Creo l'array con le immagini da inserire nel DOM.
- **FINO A CHE** Non ho inserito tutte le immagini nell'array.
  - Creo il template literal per aggiungere ogni singola immagine nell'array.
- Aggiungo il template che ho creato nel ciclo al DOM.
- **ATTENDO** il click della freccia avanti.
  **SCORRO** l'array

  - Rimuovo la classe con l'indice corrente.
  - Incremento una indice.
  - Aggiungo la classe con l'indice incrementato.

- **ATTENDO** il click della freccia indietro.
  **SCORRO** l'array
  - Rimuovo la classe con l'indice corrente.
  - Decremento una indice.
  - Aggiungo la classe con l'indice incrementato.
