// Assignment NO 8 C
// Implement a Circular queue using Stack
// use menu driven program
// (1.enqueue, 2.dequeue, 3.print, 4.exit)

// Program

#include <stdio.h>
#include <stdlib.h>

#define SIZE 5

struct CircularQueue {
    int items[SIZE];
    int front, rear;
};

void initializeQueue(struct CircularQueue* q) {
    q->front = -1;
    q->rear = -1;
}

int isFull(struct CircularQueue* q) {
    return ((q->rear + 1) % SIZE == q->front);
}

int isEmpty(struct CircularQueue* q) {
    return (q->front == -1);
}

void enqueue(struct CircularQueue* q, int value) {
    if (isFull(q)) {
        printf("Queue is full. Cannot enqueue.\n");
        return;
    }
    if (isEmpty(q)) 
        q->front = 0;
    q->rear = (q->rear + 1) % SIZE;
    q->items[q->rear] = value;
    printf("%d enqueued to the queue\n", value);
}

void dequeue(struct CircularQueue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty. Cannot dequeue.\n");
        return;
    }
    int removedValue = q->items[q->front];
    if (q->front == q->rear)
        q->front = q->rear = -1;
    else
        q->front = (q->front + 1) % SIZE;
    printf("%d dequeued from the queue\n", removedValue);
}

void printQueue(struct CircularQueue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty.\n");
        return;
    }
    printf("Queue: ");
    int i = q->front;
    while (1) {
        printf("%d ", q->items[i]);
        if (i == q->rear) break;
        i = (i + 1) % SIZE;
    }
    printf("\n");
}

int main() {
    struct CircularQueue q;
    initializeQueue(&q);
    int choice, value;

    while (1) {
        printf("Menu:\n");
        printf("1. Add (Enqueue) ");
        printf("2. Delete (Dequeue) ");
        printf("3. Print ");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter value to enqueue: ");
                scanf("%d", &value);
                enqueue(&q, value);
                break;
            case 2:
                dequeue(&q);
                break;
            case 3:
                printQueue(&q);
                break;
            case 4:
                printf("Exiting...\n");
                return 0;
            default:
                printf("Invalid choice. Please try again.\n");
        }
    }
}



