class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    push(item: T) {
        this.items.push(item);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.items.pop();
        }
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}

export default Stack;
