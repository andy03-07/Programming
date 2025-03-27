#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

// Function to convert binary to decimal
int binaryToDecimal(const char *binary) {
    int decimalNumber = 0;
    int length = strlen(binary);
    for (int i = 2; i < length; i++) {
        if (binary[i] == '0' || binary[i] == '1') {
            decimalNumber += (binary[i] - '0') * pow(2, length - i - 1);
        } else {
            printf("Invalid binary number!\n");
            return -1;
        }
    }
    return decimalNumber;
}

// Function to convert hexadecimal to decimal
int hexToDecimal(const char *hex) {
    int decimalNumber = 0;
    int length = strlen(hex);
    for (int i = 2; i < length; i++) {
        if ((hex[i] >= '0' && hex[i] <= '9') || (hex[i] >= 'a' && hex[i] <= 'f') || (hex[i] >= 'A' && hex[i] <= 'F')) {
            decimalNumber += (hex[i] >= '0' && hex[i] <= '9' ? hex[i] - '0' : (hex[i] >= 'A' && hex[i] <= 'F' ? hex[i] - 'A' + 10 : hex[i] - 'a' + 10)) * pow(16, length - i - 1);
        } else {
            printf("Invalid hexadecimal number!\n");
            return -1;
        }
    }
    return decimalNumber;
}

// Function to convert octal to decimal
int octalToDecimal(const char *octal) {
    int decimalNumber = 0;
    int length = strlen(octal);
    for (int i = 1; i < length; i++) {
        if (octal[i] >= '0' && octal[i] <= '7') {
            decimalNumber += (octal[i] - '0') * pow(8, length - i - 1);
        } else {
            printf("Invalid octal number!\n");
            return -1;
        }
    }
    return decimalNumber;
}

// Function to convert decimal to binary
void decimalToBinary(int decimal) {
    if (decimal == 0) {
        printf("0B0\n");
        return;
    }
    char binary[32];
    int index = 0;
    while (decimal > 0) {
        binary[index++] = (decimal % 2) + '0';
        decimal /= 2;
    }
    printf("0B");
    for (int i = index - 1; i >= 0; i--) {
        printf("%c", binary[i]);
    }
    printf("\n");
}

// Function to convert decimal to hexadecimal
void decimalToHex(int decimal) {
    if (decimal == 0) {
        printf("0X0\n");
        return;
    }
    char hex[32];
    int index = 0;
    while (decimal > 0) {
        int remainder = decimal % 16;
        hex[index++] = (remainder < 10) ? (remainder + '0') : (remainder - 10 + 'A');
        decimal /= 16;
    }
    printf("0X");
    for (int i = index - 1; i >= 0; i--) {
        printf("%c", hex[i]);
    }
    printf("\n");
}

// Function to convert decimal to octal
void decimalToOctal(int decimal) {
    if (decimal == 0) {
        printf("00\n");
        return;
    }
    char octal[32];
    int index = 0;
    while (decimal > 0) {
        octal[index++] = (decimal % 8) + '0';
        decimal /= 8;
    }
    printf("0");
    for (int i = index - 1; i >= 0; i--) {
        printf("%c", octal[i]);
    }
    printf("\n");
}

int main() {
    char value[20];
    printf("Enter a number to convert: ");
    scanf("%s", value);

    if (strncmp(value, "0B", 2) == 0 || strncmp(value, "0b", 2) == 0) {
        int result = binaryToDecimal(value);
        if (result != -1) {
            printf("Binary --> Decimal: %d\n", result);
        }
    } else if (strncmp(value, "0X", 2) == 0 || strncmp(value, "0x", 2) == 0) {
        int result = hexToDecimal(value);
        if (result != -1) {
            printf("Hexadecimal --> Decimal: %d\n", result);
        }
    } else if (value[0] == '0' && strlen(value) > 1) {
        int result = octalToDecimal(value);
        if (result != -1) {
            printf("Octal --> Decimal: %d\n", result);
        }
    } else {
        int decimalValue = atoi(value);
        printf("Decimal: %d\n", decimalValue);
        decimalToBinary(decimalValue);
        decimalToHex(decimalValue);
        decimalToOctal(decimalValue);
    }
    return 0;
}
