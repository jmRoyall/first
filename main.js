const App = {
    data() {
        return {
            counter: 0,
            text: "Input something",
            inputValue: "",
            notes: ["First note"],
        }
    }, // data()
    methods: {
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
        },
        removeNote(i) {
            this.notes.splice(i, 1)
        }

    }, // methods
    computed: {
      doubleCount() {
        return this.notes.length * 2;
      }  
    }, // computed
    watch: {
        inputValue(value) {
            if (value.length >= 10) {
                this.inputValue = "";
            }
        }
    }, // watch
}

Vue.createApp(App).mount("#app")