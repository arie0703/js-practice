var todo = new Vue ({
	el: '#todo',
  data: {
  	newItem: '',
    todos: [],
    counter: 0,
  },
  methods: {
  	addItem: function(event) {
    
    	if(this.newItem == "") return;
      
    	var todo = {
      	item: this.newItem,
        isDone: false,
      };
      this.todos.push(todo);
      this.newItem = "";
    },
    deleteItem: function(index) {
    	this.todos.splice(index, 1);
    }
  },
  computed: {
    //todosを降順に表示させる。
    desc_todos() {
      return this.todos.slice().reverse();
    },
  }
})