// Assignment NO 5
// Implement stacks by using array and linked list
// Perform operation like
// (push,pop,print,exit) 

// Program A- Array based

#include <stdio.h>
#define MAX 5

int stack[MAX];
int top = -1;

void push() {
    int x;
    if (top == MAX - 1) {
        printf("Overflow: Stack is full.\n");
    } else {
        printf("Enter data: ");
        scanf("%d", &x);
        stack[++top] = x;
    }
}

void pop() {
    if (top == -1) {
        printf("Underflow: Stack is empty.\n");
    } else {
        int item = stack[top--];
        printf("Popped item: %d\n", item);
    }
}

void print() {
    if (top == -1) {
        printf("Stack is empty.\n");
    } else {
        printf("Stack contents: ");
        for (int i = 0; i <= top; i++) {
            printf("%d ", stack[i]);
        }
        printf("\n");
    }
}

int main() {
    int ch;
    while (1) {
        printf("Enter choice: 1 for push, 2 for pop, 3 for print, 0 to exit: ");
        scanf("%d", &ch);
        
        switch (ch) {
            case 1:
                push();
                break;
            case 2:
                pop();
                break;
            case 3:
                print();
                break;
            case 0:
                printf("Exiting...\n");
                return 0;
            default:
                printf("Invalid choice. Please try again.\n");
        }
    }
}


