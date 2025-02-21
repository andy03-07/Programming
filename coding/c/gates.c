// #include<stdio.h>

// int andfun(int one,int two){
//     if(one&&two == 1) printf("output is 1\n");
//     else printf("output is 0\n");
// }

// int orfun(int one,int two){
//     if(one==0 &&two == 0) printf("output is 0\n");
//     else printf("output is 1\n");
// }

// int xorfun(int one,int two){
//     if(one==1&&two==1 || one==0&&two==0) printf("output is 0\n");
//     else printf("output is 1\n");
// }
// int nandfun(int one,int two){
//       if(one==1&&two == 1) printf("output is 0\n");
//     else printf("output is 1\n");
// }

// int norfun(int one,int two){
//       if(one==0&&two == 0) printf("output is 1\n");
//     else printf("output is 0\n");
// }

// int main(){
//     int choice, input1,input2;
//     int changeinput=1;
//         printf("\nWelcome to the Logic Gates!\n");
//         printf("Choose the number accordingly:\n");
//         printf("1. AND Gate\n");
//         printf("2. OR Gate\n");
//         printf("3. XOR Gate\n");
//         printf("4. NAND Gate\n");
//         printf("5. NOR Gate\n");
//         printf("0 for exit\n");
        
//          while(1){
//         if(changeinput){
//         printf("Enter 2 inputs (only 1 and 0):\n");
//         do{
//         printf("Input 1:");
//         scanf("%d",&input1);
//         if(input1>1) printf("invalid number\n");
//         } while(input1>1);

//         do{
//         printf("Input 2:");
//         scanf("%d",&input2);
//         if(input2>1) printf("invalid number\n");
//         }while(input2>1);
//         }

//         printf("Enter your choice:");
//         scanf("%d",&choice);
        

//         switch (choice){
//             case 1:
//             printf("AND GATE:\n");
//             andfun(input1,input2);
//             break;

//             case 2:
//             printf("OR GATE:\n");
//             orfun(input1,input2);
//             break;

//             case 3:
//             printf("XOR GATE:\n");
//             xorfun(input1,input2);
//             break;

//             case 4:
//             printf("NAND GATE:\n");
//             nandfun(input1,input2);
//             break;

//             case 5:
//             printf("NOR GATE:\n");
//             norfun(input1,input2);
//             break;

//             case 0:
//             printf("Exiting...\n");
//             return 0;

//             default:
//             printf("Invalid choice!");
//             }
        
//         printf("Do you want to change the input (1 for yes , 0 for no )\n");
//         scanf("%d",&changeinput);
//          }
//          }

#include<stdio.h>

int main(){
    char c[5]="hello";
    // fgets(c,5,stdin);
    gets(c);
    printf("%s",strlen(c));
}