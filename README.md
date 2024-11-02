## Esercizio
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

## Dati
Variabile i=1

## Esecuzione Logica

Prendo in analisi i e apro il ciclo FOR
    Se il resto tra la divisione di i e 15 è zero
        Stampo FizzBuzz
    Altrimenti Se il resto tra la divisione di i e 3 è zero
        Stampo Fizz
    Altrimenti Se il resto tra la la divisione di i e 5 è zero
        Stampo Buzz
    Altrimenti
        Stampo i

    Se i è minore di 100
        Sommo 1 ad i
        Torno all'inizio del ciclo FOR
