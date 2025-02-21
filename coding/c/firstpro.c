// // // Assignment NO 5
// // // Implement stacks by using array and linked list
// // // Perform operation like
// // // (push,pop,print,exit) 

// // // Program A- Array based


// #include <stdio.h>
// // #define MAX 5

// // int stack[MAX];
// // int top = -1;

// // void push() {
// //     int x;
// //     printf("Enter data: ");
// //     scanf("%d", &x);
// //     if (top == MAX - 1) {
// //         printf("Overflow: Stack is full.\n");
// //     } else {
// //         top++;
// //         stack[top] = x;
// //     }
// // }

// // void pop() {
// //     if (top == -1) {
// //         printf("Underflow: Stack is empty.\n");
// //     } else {
// //         int item = stack[top--];
// //         printf("Popped item :%d\n",item);
// //     }
// // }

// // void print() {
// //     if (top == -1) {
// //         printf("Stack is empty.\n");
// //     } else {
// //         printf("Stack contents: ");
// //         for (int i = 0; i <= top; i++) {
// //             printf("%d ", stack[i]);
// //         }
// //         printf("\n");
// //     }
// // }

// int main() {
// //     int ch = -1;
// //     while (1) { 
// //         printf("Enter choice: 1 for push, 2 for pop, 3 for print, 0 to exit: ");
// //         scanf("%d", &ch);
        
// //         switch (ch) {
// //             case 1: 
// //                 push();
// //                 break;
// //             case 2: 
// //                 pop();
// //                 break;
// //             case 3: 
// //                 print();
// //                 break;
// //             case 0: 
// //                 printf("Exiting...\n");
// //                 return 0;
// //             default: 
// //                 printf("Invalid choice. Please try again.\n");
// //         }
// //     }
// int a=0b1000;
// printf("%d\n",a);
// }

// #include <stdio.h>
// #include <stdlib.h> 

// int main() {
//     int a, b, q, r;

//     // Input dividend and divisor
//     printf("Enter the dividend (a): ");
//     scanf("%d", &a);
//     printf("Enter the divisor (b): ");
//     scanf("%d", &b);

//     // Check for division by zero
//     if (b == 0) {
//         printf("Error: Division by zero is not allowed.\n");
//         return 1;
//     }

//     // Calculate quotient and remainder
//     q = a / b; // Integer division gives quotient
//     r = a % b; // Modulus gives remainder

//     // Adjust remainder to satisfy 0 <= r < |b|
//     if (r < 0) {
//         r += abs(b);
//         q -= (b > 0) ? 1 : -1; // Adjust quotient accordingly
//     }

//     // Output results
//     printf("Quotient (q): %d\n", q);
//     printf("Remainder (r): %d\n", r);

//     return 0;
// }
#include <stdio.h>
#include <ctype.h>
void caesar_encrypt(char plaintext[], int key, char ciphertext[]) {
    for (int i = 0; plaintext[i] != '\0'; i++) {
        char ch = plaintext[i];

        if (isupper(ch)) {
            ciphertext[i] = ((ch - 'A' + key) % 26) + 'A';
        }
        else if (islower(ch)) {
            ciphertext[i] = ((ch - 'a' + key) % 26) + 'a';
        }
        else {
            ciphertext[i] = ch;
        }
    }
}
void caesar_decrypt(char ciphertext[], int key, char plaintext[]) {
    for (int i = 0; ciphertext[i] != '\0'; i++) {
        char ch = ciphertext[i];

        if (isupper(ch)) {
            plaintext[i] = ((ch - 'A' - key + 26) % 26) + 'A';
        }
        else if (islower(ch)) {
            plaintext[i] = ((ch - 'a' - key + 26) % 26) + 'a';
        }
        else {
            plaintext[i] = ch;
        }
    }
}
int main() {
    char plaintext[100], ciphertext[100], decrypted[100];
    int key;
    printf("Enter the plaintext: ");
    fgets(plaintext, sizeof(plaintext), stdin);
    printf("Enter the key : ");
    scanf("%d", &key);
    caesar_encrypt(plaintext, key, ciphertext);
    printf("Ciphertext: %s\n", ciphertext);
    caesar_decrypt(ciphertext, key, decrypted);
    printf("Decrypted text: %s\n", decrypted);
    return 0;
}
