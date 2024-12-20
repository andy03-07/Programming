#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// struct Node {
//     int data;
//     struct Node *left ,*right; 
    
// };

//   struct Node* root=NULL;
// struct Node *left=NULL;
// struct Node *right=NULL;

// struct Node *createbinarytree(int data){
//     struct Node* BT = (struct Node*)malloc(sizeof(struct Node));
//     BT->data=data;
//     BT->left=NULL;
//     BT->right=NULL;

// }


// int countheight(struct Node* root){
//     int height=0;
//     if (root==NULL){
//         return 0;
    
//     }if (left==NULL && right==NULL){
//         return 1;
//     }else{
//         while(left!=NULL || right!=NULL){
            
//           height++;
// }
//     return height;
//     }

// }

// int main (){
  
//     root=createbinarytree(1);
//     root->left=createbinarytree(2);
//     root->right=createbinarytree(3);
//     root->left->left=createbinarytree(4);
//     root->left->right=createbinarytree(5);
//     root->right->left=createbinarytree(6);
//     root->right->left=createbinarytree(7);

//     int height=countheight(root);

//     printf("The height of binary tree is %d",height);
 
  
// }

// int myfun(int *x,int *y){
//     int *ptr;
//     *x=0;
//     ptr=x;
//     *y=*ptr;
//     ptr=y;
//     *ptr=9;
//     printf("%d,%d",*x,*y);
// }
// int main(){
//     int x=5,y=7;
//     myfun(&x,&y);
//     printf("\n %d,%d,%d",x,y,(x+y));
// }
// int main(){
// int *p, a;
// // a=5;
// *p=5;
// printf("%d",*p);
// }

//  int main(){
//     int arr[]={10,20,30,40,50,60};
//     int*ptr1=arr;
//     int *ptr2;
//     int i=0;
//     ptr1++;
//     ptr2=ptr1+3;
//     ptr1=ptr2+1;
//     int x=*ptr1-*ptr2;
//     int y=*ptr2+*ptr1;
//     *ptr1=x;
//     *ptr2=y;
//     for(int i;i<6;i++){
//       printf("%d\t",*(arr+i));
//     }
//  }

// int main(){
//    int arr[]={1,2,3,4,5};
//    int i,sum=0,*ptr=arr+3;
//    for(int i=0;i<5;i++){
//    sum+=*ptr;
//    arr[i]=sum;
//    }

//    for(int i=0;i<5;i++){
//       printf("%d",*(arr+i));
//    }
// }


//  int main() {
//     int arr[] = { 10, 20, 30, 40, 50 };
//     int* p = arr;
//     printf("Value of *p: %d\n", *p);
//     printf("Value of *(p + 1): %d\n", *(p + 1));
//     printf("Value of *(p + 2): %d\n", *(p + 2));
//     *p = 100;
//     *(p + 1) = 200;
//     *(p + 2) = 300;
//     printf("New values in array: %d %d %d %d %d\n", 
//         arr[0], arr[1], arr[2], arr[3], arr[4]);
//     return 0;
//  }

//  int main()
//  {
//  char str[20] = "SGGS Nanded";
//  int s = strlen(str);
//  str[3] = '\0';
//  s = strlen(str);
//  printf("%d\n", s);
//  return 0;
//  }
// int main()
//  {
//     int a = 6;
//     int b = 0;
//     while (a < 10)
//     {
//         a = a / 12 + 1;
//         a += b;
//  printf("%d\n", a);
//     }
//     printf("%d", a);
//     return 0;
//  }
