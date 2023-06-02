import { validateList, validateTarget } from './utils.js';

class TodoList {
    constructor(todoList, elementId) {
        this.$target = document.querySelector(elementId);
        this.propertyType = { text: 'string', isCompleted: 'boolean'}
        
        const ul = document.createElement('ul');
        this.$ul = ul;
        this.$target.appendChild(this.$ul);
        this.todos = todoList;

        this.setState(this.todos);
        this.render();
    }

    render() {
        this.$ul.innerHTML = this.todos
            .map(data => data.isCompleted ? `<li><del>${data.text}</del></li>` : `<li>${data.text}</li>`)
            .join('');
    }

    setState(nextData) {
        validateTarget(this.$target)
        validateList(nextData, this.propertyType);
        this.todos = nextData;
    }
}

export default TodoList;
