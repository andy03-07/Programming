// Assignment No. 7
// Circular Single Linked List
// Operations:
// Creation,insrte at beg and end
// deletion at beg and end
// Print and exit by using menu driven program

// Program

#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* head = NULL;

void create() {
    int n, data, i;
    printf("Enter the number of nodes to create:");
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        printf("Enter data for node %d: ", i);
        scanf("%d", &data);

        struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
        newNode->data = data;

        if (head == NULL) {
            head = newNode;
            newNode->next = head;  
        } else {
            struct Node* temp = head;
            while (temp->next != head) {
                temp = temp->next;
            }
            temp->next = newNode;
            newNode->next = head; 
        }
    }
    traverse();

}
void traverse() {
    if (head == NULL) {
        printf("List is empty.\n");
        return;
    }
    struct Node* temp = head;
    do {
        printf("%d -> ", temp->data);
        temp = temp->next;
    } while (temp != head);
    printf("(head)\n");
}

void insert_beg(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    if (head == NULL) {
        head = newNode;
        newNode->next = head;
    } else {
        struct Node* temp = head;
        while (temp->next != head) {
            temp = temp->next;
        }
        newNode->next = head;
        temp->next = newNode;
        head = newNode;
    }
    traverse();
}

void insert_end(int data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = data;
    if (head == NULL) {
        head = newNode;
        newNode->next = head;
    } else {
        struct Node* temp = head;
        while (temp->next != head) {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->next = head;
    }
    traverse();
}

void delete_beg() {
    if (head == NULL) {
        printf("List is empty.\n");
        return;
    }
    struct Node* temp = head;
    if (head->next == head) {
        free(head);
        head = NULL;
    } else {
        struct Node* last = head;
        while (last->next != head) {
            last = last->next;
        }
        head = head->next;
        last->next = head;
        free(temp);
    }
    traverse();
}

void delete_end() {
    if (head == NULL) {
        printf("List is empty.\n");
        return;
    }
    struct Node* temp = head;
    if (head->next == head) {
        free(head);
        head = NULL;
    } else {
        struct Node* prev = NULL;
        while (temp->next != head) {
            prev = temp;
            temp = temp->next;
        }
        prev->next = head;
        free(temp);
    }
    traverse();
}

int main() {
    int choice, data;
    while (1) {
        printf("\nCircular Singly Linked List Operations:\n");
        printf("1. Create\n");
        printf("2. Traverse\n");
        printf("3. Insert at Beginning\n");
        printf("4. Insert at End\n");
        printf("5. Delete from Beginning\n");
        printf("6. Delete from End\n");
        printf("7. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);
        switch (choice) {
            case 1:
                create();
                break;
            case 2:
                traverse();
                break;
            case 3:
                printf("Enter data to insert at the beginning: ");
                scanf("%d", &data);
                insert_beg(data);
                break;
            case 4:
                printf("Enter data to insert at the end: ");
                scanf("%d", &data);
                insert_end(data);
                break;
            case 5:
                delete_beg();
                break;
            case 6:
                delete_end();
                break;
            case 7:
                exit(0);
            default:
                printf("Invalid choice! Please try again.\n");
        }
    }
    return 0;
}

 