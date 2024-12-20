// Assignment NO. 10
// Implement graph data structures 
// using adjacency matrix and adjacency list representation. 
// Perform the graph traversal such as 
// breadth-first-search (BFS) and depth-first-search (DFS).

// Program:-

#include <stdio.h>
#include <stdlib.h>

#define MAX_VERTICES 10
#define MAX_QUEUE_SIZE 100

typedef struct Queue {
    int items[MAX_QUEUE_SIZE];
    int front;
    int rear;
} Queue;

Queue* createQueue() {
    Queue* queue = (Queue*)malloc(sizeof(Queue));
    queue->front = -1;
    queue->rear = -1;
    return queue;
}

int isQueueEmpty(Queue* queue) {
    return queue->front == -1;
}

void enqueue(Queue* queue, int value) {
    if (queue->rear == MAX_QUEUE_SIZE - 1)
        return;
    if (isQueueEmpty(queue)) {
        queue->front = 0;
    }
    queue->rear++;
    queue->items[queue->rear] = value;
}

int dequeue(Queue* queue) {
    if (isQueueEmpty(queue))
        return -1;
    int item = queue->items[queue->front];
    queue->front++;
    if (queue->front > queue->rear) {
        queue->front = queue->rear = -1;
    }
    return item;
}

typedef struct GraphMatrix {
    int vertices;
    int adjMatrix[MAX_VERTICES][MAX_VERTICES];
} GraphMatrix;

GraphMatrix* createGraphMatrix(int vertices) {
    GraphMatrix* graph = (GraphMatrix*)malloc(sizeof(GraphMatrix));
    graph->vertices = vertices;
    for (int i = 0; i < vertices; i++) {
        for (int j = 0; j < vertices; j++) {
            graph->adjMatrix[i][j] = 0;
        }
    }
    return graph;
}

void addEdgeMatrix(GraphMatrix* graph, int src, int dest) {
    graph->adjMatrix[src][dest] = 1;
    graph->adjMatrix[dest][src] = 1;
}

void bfsMatrix(GraphMatrix* graph, int startVertex) {
    int visited[MAX_VERTICES] = {0};
    Queue* queue = createQueue();
    enqueue(queue, startVertex);
    visited[startVertex] = 1;

    printf("BFS (Adjacency Matrix): ");
    while (!isQueueEmpty(queue)) {
        int currentVertex = dequeue(queue);
        printf("%d ", currentVertex);

        for (int i = 0; i < graph->vertices; i++) {
            if (graph->adjMatrix[currentVertex][i] == 1 && !visited[i]) {
                enqueue(queue, i);
                visited[i] = 1;
            }
        }
    }
    printf("\n");
}

void dfsMatrixUtil(GraphMatrix* graph, int vertex, int visited[]) {
    visited[vertex] = 1;
    printf("%d ", vertex);

    for (int i = 0; i < graph->vertices; i++) {
        if (graph->adjMatrix[vertex][i] == 1 && !visited[i]) {
            dfsMatrixUtil(graph, i, visited);
        }
    }
}

void dfsMatrix(GraphMatrix* graph, int startVertex) {
    int visited[MAX_VERTICES] = {0};
    printf("DFS (Adjacency Matrix): ");
    dfsMatrixUtil(graph, startVertex, visited);
    printf("\n");
}

typedef struct Node {
    int vertex;
    struct Node* next;
} Node;

typedef struct GraphList {
    int vertices;
    Node* adjList[MAX_VERTICES];
} GraphList;

GraphList* createGraphList(int vertices) {
    GraphList* graph = (GraphList*)malloc(sizeof(GraphList));
    graph->vertices = vertices;
    for (int i = 0; i < vertices; i++) {
        graph->adjList[i] = NULL;
    }
    return graph;
}

Node* createNode(int vertex) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->vertex = vertex;
    newNode->next = NULL;
    return newNode;
}

void addEdgeList(GraphList* graph, int src, int dest) {
    Node* newNode = createNode(dest);
    newNode->next = graph->adjList[src];
    graph->adjList[src] = newNode;

    newNode = createNode(src);
    newNode->next = graph->adjList[dest];
    graph->adjList[dest] = newNode;
}

void bfsList(GraphList* graph, int startVertex) {
    int visited[MAX_VERTICES] = {0};
    Queue* queue = createQueue();
    enqueue(queue, startVertex);
    visited[startVertex] = 1;

    printf("BFS (Adjacency List): ");
    while (!isQueueEmpty(queue)) {
        int currentVertex = dequeue(queue);
        printf("%d ", currentVertex);

        Node* temp = graph->adjList[currentVertex];
        while (temp) {
            int adjVertex = temp->vertex;
            if (!visited[adjVertex]) {
                enqueue(queue, adjVertex);
                visited[adjVertex] = 1;
            }
            temp = temp->next;
        }
    }
    printf("\n");
}

void dfsListUtil(GraphList* graph, int vertex, int visited[]) {
    visited[vertex] = 1;
    printf("%d ", vertex);

    Node* temp = graph->adjList[vertex];
    while (temp) {
        int adjVertex = temp->vertex;
        if (!visited[adjVertex]) {
            dfsListUtil(graph, adjVertex, visited);
        }
        temp = temp->next;
    }
}

void dfsList(GraphList* graph, int startVertex) {
    int visited[MAX_VERTICES] = {0};
    printf("DFS (Adjacency List): ");
    dfsListUtil(graph, startVertex, visited);
    printf("\n");
}

int main() {
    int vertices = 5;

    GraphMatrix* graphMatrix = createGraphMatrix(vertices);
    addEdgeMatrix(graphMatrix, 0, 1);
    addEdgeMatrix(graphMatrix, 0, 2);
    addEdgeMatrix(graphMatrix, 1, 2);
    addEdgeMatrix(graphMatrix, 1, 3);
    addEdgeMatrix(graphMatrix, 2, 4);

    printf("Using Adjacency Matrix:\n");
    bfsMatrix(graphMatrix, 0);
    dfsMatrix(graphMatrix, 0);

    GraphList* graphList = createGraphList(vertices);
    addEdgeList(graphList, 0, 1);
    addEdgeList(graphList, 0, 2);
    addEdgeList(graphList, 1, 2);
    addEdgeList(graphList, 1, 3);
    addEdgeList(graphList, 2, 4);

    printf("\nUsing Adjacency List:\n");
    bfsList(graphList, 0);
    dfsList(graphList, 0);

    return 0;
}