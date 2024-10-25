const App = {
    data() {
        return {
            counter: 0,
            text: "Input something",
            inputValue: "",
            notes: ["First note"]
        }
    }, // data()
    methods: {
        inputString(event) {
            this.inputValue = event.target.value;  
        },
        newNote() {
            if (this.inputValue !== "") {
                this.notes.unshift(this.inputValue);
            };
            document.querySelector(".input").value = "";
            this.inputValue = "";
        },
        inputKeyPress(e) {
            if (e.key == "Enter") {
                this.newNote()
            }
        }

    } // methods
}

Vue.createApp(App).mount("#app")