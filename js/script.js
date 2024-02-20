const {createApp} = Vue;

createApp({
    data() {
        return {

            tasks: [

                {
                    text: "Fare la spesa",
                    done: false,
                },

                {
                    text: "Andare a correre",
                    done: true,
                },

                {
                    text: "Preparare il pranzo per domani",
                    done: false,
                }

            ],

        

        }
    },

    methods: {

        removeTask(index) {

            this.tasks.splice(index, 1);

        }

    }


}).mount("#app");

