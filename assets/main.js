const vm = Vue.createApp({
  data() {
    return {
      taskInput: "",
      taskList: "",

      tasks: [],
    };
  },
  methods: {
    newTask() {
      newTask = {
        text: this.taskInput,
        done: false,
      };
      this.tasks.push(newTask);
      console.log(this.tasks);
    },
  },
}).mount("#todoApp");
