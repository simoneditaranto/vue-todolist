const {createApp} = Vue;

createApp({
    data() {
        return {

            newTask: '',

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

        },

        addTask() {

            if(this.newTask != '') {
                const newTask = {
                    text: this.newTask,
                    done: false,
                };
    
                this.tasks.push(newTask);
            }

            
            this.newTask = "";

        },


    }


}).mount("#app");

