# 🏆 Snack 2

- Crea la funzione <font color="red">lanciaDado()</font> che restituisce una **_Promise_** che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in **_reject_**.

## 🎯 Bonus: HOF con closure per memorizzare l'ultimo lancio

- Modifica la funzione in <font color="red">creaLanciaDado()</font>, che restituisce una **_closure_** che memorizza l'ultimo risultato. Se il numero esce **_due volte di fila_**, stampa "Incredibile!".
