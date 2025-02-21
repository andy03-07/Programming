#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() {
    char username[20];
    char password[20];
    int option;

    printf("Enter 1 to register: ");
    scanf("%d", &option);

    if (option == 1) {
        printf("Enter username: ");
        scanf("%s", username);

        printf("Enter password: ");
        scanf("%s", password);

        printf("Registration successful\n");
    }

    printf("Enter 2 to login: ");
    scanf("%d", &option);

    if (option == 2) {
        char username1[20];
        char password1[20];

        printf("Enter username: ");
        scanf("%s", username1);

        printf("Enter password: ");
        scanf("%s", password1);

        // Compare strings using strcmp
        if (
            // strcmp(username, username1) == 0 && strcmp(password, password1) == 0
            username.equals(username1) && password.equals(password1)
            ) {
            printf("Correct credentials\nLogin successful\n");
        } else {
            printf("Login failed\n");
        }
    }

    return 0;
}


