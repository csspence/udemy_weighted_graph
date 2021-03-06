/*
Udemy JavaScript Algorithms and Data Structures Masterclass
Weighted Graph
*/

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertexName) {
        this.adjacencyList[vertexName] = [];
    };
    
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight}); 
    };
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    };

    dequeue() {
        return this.values.shift();
    };

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    };
}
