#include <stdio.h>
#include <stdlib.h>

// Define the structure for a node
typedef struct Node {
    int data;
    struct Node* next;
} Node;

// Function to create a new node
Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// Function to print the linked list
void printList(Node* head) {
    Node* temp = head;
    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\n");
}

// Function to delete a node at a given position
void deleteNode(Node** head_ref, int position) {
    if (*head_ref == NULL) {
        return; // List is empty
    }
    
    Node* temp = *head_ref;
    
    // If the head needs to be removed
    if (position == 0) {
        *head_ref = temp->next; // Change head
        free(temp); // Free old head
        return;
    }

    // Find previous node of the node to be deleted
    for (int i = 0; temp != NULL && i < position - 1; i++) {
        temp = temp->next;
    }

    // If position is more than number of nodes
    if (temp == NULL || temp->next == NULL) {
        return;
    }

    // Node temp->next is the node to be deleted
    Node* next = temp->next->next;

    // Unlink the node from linked list
    free(temp->next); // Free memory of the node to be deleted
    temp->next = next; // Unlink the deleted node from list
}

int main() {
    Node* head = createNode(1);
    head->next = createNode(2);
    head->next->next = createNode(3);
    head->next->next->next = createNode(4);
    
    printf("Original List:\n");
    printList(head);

    int position = 2; // Position to delete (0-based index)
    deleteNode(&head, position);

    printf("List after deletion at position %d:\n", position);
    printList(head);

    return 0;
}