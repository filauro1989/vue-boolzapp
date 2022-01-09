const wpmain = new Vue ({
    el: '#wp-main',
    data: {
        // assegno indexContact per avere un indice da utilizzare al click
        indexContact: 0,
        counter: 0,
        text: '',
        searchText: '',
        contacts: [
            {
            name: "Michele",
            avatar: "_1",
            visible: true,
            messages: [
                {
                    date: "10/01/2020 15:30:55",
                    text: "Hai portato a spasso il cane?",
                    status: "sent",
                    menuVisible: false
                },
                {
                    date: "10/01/2020 15:50:00",
                    text: "Ricordati di dargli da mangiare",
                    status: "sent",
                    menuVisible: false
                },
                {
                    date: "10/01/2020 16:15:22",
                    text: "Tutto fatto!",
                    status: "received",
                    menuVisible: false
                },
            ],
            },
            {
            name: "Fabio",
            avatar: "_2",
            visible: true,
            messages: [
                {
                    date: "20/03/2020 16:30:00",
                    text: "Ciao come stai?",
                    status: "sent",
                    menuVisible: false
                },
                {
                    date: "20/03/2020 16:30:55",
                    text: "Bene grazie! Stasera ci vediamo?",
                    status: "received",
                    menuVisible: false
                },
                {
                    date: "20/03/2020 16:35:00",
                    text: "Mi piacerebbe ma devo andare a fare la spesa.",
                    status: "sent",
                    menuVisible: false
                },
            ],
            },
        
            {
            name: "Marco",
            avatar: "_3",
            visible: true,
            messages: [
                {
                    date: "28/03/2020 10:10:40",
                    text: "La Marianna va in campagna",
                    status: "received",
                    menuVisible: false
                },
                {
                    date: "28/03/2020 10:20:10",
                    text: "Sicuro di non aver sbagliato chat?",
                    status: "sent",
                    menuVisible: false
                },
                {
                    date: "28/03/2020 16:15:22",
                    text: "Ah scusa!",
                    status: "received",
                    menuVisible: false
                },
            ],
            },
            {
            name: "Martina",
            avatar: "_4",
            visible: true,
            messages: [
                {
                    date: "10/01/2020 15:30:55",
                    text: "Lo sai che ha aperto una nuova pizzeria?",
                    status: "sent",
                    menuVisible: false
                },
                {
                    date: "10/01/2020 15:50:00",
                    text: "Si, ma preferirei andare al cinema",
                    status: "received",
                    menuVisible: false
                },
            ],
            },
        ]
    },
    created() {
        console.log(contact.messages[contact.messages.length - 1]);
    },
    methods: {
        // ultimo messaggio
        getLastMessage: function(index) {
            // seleziono l'ultimo elemento di messages in contacts
            let lastMessage = this.contacts[index].messages.length -1;
            // seleziono il text dell'ultimo elemento
            let lastMessageText = this.contacts[index].messages[lastMessage].text;

            return lastMessageText;
        },
        getLastDate: function(index) {
            // seleziono l'ultimo elemento di messages in contacts
            let lastMessage = this.contacts[index].messages.length -1;
            // seleziono il date dell'ultimo elemento
            let lastMessageDate = this.contacts[index].messages[lastMessage].date;

            return lastMessageDate;
        },

        changeContact: function(index){
            this.indexContact = index;
        },
        getText: function() {
            let messageArray = this.contacts[this.indexContact].messages;
            // il trim serve a eliminare gli spazi
            if(this.text.trim().length > 0) {
                messageArray.push({
                    date: "10/01/2021 15:30:22",
                    text: this.text,
                    status: "sent",
                    menuVisible: false
                });
            
            this.text = '';

                setTimeout(() => {
                    messageArray.push({
                        date: "10/01/2021 15:30:22",
                        text: 'ok',
                        status: "received",
                        menuVisible: false
                    });
                }, 1000);
            }
        },
        searchChat: function() {
            // per ogni contacts scansiono il name e assegno visible true o false se una lettera è contenuta nell'V-input nell'html
            this.contacts.forEach(contact => {
                if (contact.name.toLowerCase().includes(this.searchText.toLowerCase())){
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });
        },
        menuDropdown: function(index) {
            // assegno al counter il valore index definito nel v-for dell'html
            this.counter = index;
            // sostituisco la variabile booleana menuVisible col suo opposto
            this.contacts[this.indexContact].messages[this.counter].menuVisible = !this.contacts[this.indexContact].messages[this.counter].menuVisible;
        },
        deletingMessage: function() {
            this.contacts[this.indexContact].messages.splice(this.counter, 1);
        }
    },
});

// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

// Milestone 5
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 

