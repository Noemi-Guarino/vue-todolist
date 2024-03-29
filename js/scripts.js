// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.


const { createApp } = Vue

  createApp({
    data() {
      return {
        titlelist:"Cose da fare",
        newlist: '',
        todolist:[
            {
                text:"alzarsi",
                done:true,
            },
            {
                text:"fare colazione",
                done:true,
            },
            {
                text:"lavarsi",
                done:false,
            },
            {
                text:"fare skincare",
                done:false,
            },
        ]
      };
    },
    methods: {
        remove(index){
        this.todolist.splice(index,1);
    },
    add(){
        let newObject = {
            text:this.newlist,
            done:false,
        }
        this.todolist.push(newObject);
        console.log(newObject,"questa è al nuova nota")
        this.newlist = '';
    }
    }
  }).mount('#app')


