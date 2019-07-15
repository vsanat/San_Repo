class Tree {
    constructor(value = null, children = []) {
        this.value = value;
        this.children = children;
    }
    *printValue() {
        yield this.value;
        for (const child of this.children) {
            yield* child.printValue();
        }
    }
}

var tree = new Tree(1,
    [new Tree(2, [new Tree(4)]),
    new Tree(3)]
);

for (const value of tree.printValue()) {
    console.log(value);
}
