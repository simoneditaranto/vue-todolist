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

            // const newTasks = [];

            if(this.newTask != '') {
                const newTask = {
                    text: this.newTask,
                    done: false,
                };

                // newTasks.push(newTask);
    
                this.tasks.push(newTask);
                // this.tasks = [...this.tasks, ...newTasks];
            }

            
            this.newTask = "";

        },

        changeTaskComplete(index) {

            if(this.tasks[index].done) {
                this.tasks[index].done = false;
            } else if(!this.tasks[index].done) {
                this.tasks[index].done = true;
            }
        }


    }


}).mount("#app");

