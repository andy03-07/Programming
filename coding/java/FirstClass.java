// import java.util.*;

// class FirstClass {

//    // public static void printMyname(String name) {
//    //    System.out.println(name);
//    //    return;
//    // }

//    // public static void factorial(int n) {
//    //    int factorial=1;

//    //    for(int i=n;i>=1;i--) 
//    //    {
//    //       factorial*=i;
//    //    }
//    //    System.out.println(factorial);
//    // }

//    // public static void gcd(int v1,int v2) {
//    //    while(v2!=0){
//    //       int remainder=(v1%v2);
//    //       v1=v2;
//    //       v2=remainder;
//    //    }
//    //     System.out.println(v1);
//    // }


//    // public static void printf(int n) {
//    //    if(n==0) return;

//    //    int f=0,s=1;
//    //    for(int i=0;i<=n;i++){
//    //       System.out.println(f+" ");
//    //       int next=f+s;
//    //       f=s;
//    //       s=next;
//    //    }

//    // }







//    public static void main(String[] args){
//       // System.out.println("hello");
//       // System.out.println("hello");
//       // System.out.println("*");

//       // String name="tony";
//       // int age=10,age2=11;
//       // System.out.println(age+age2);
//       // System.out.println(name);

    
//       // System.out.println("enter name");
//       Scanner sc = new Scanner(System.in);
//       // String name =sc.next();
//       // // String name =sc.nextLine();
//       // int nam =sc.nextInt();
//       // System.out.println(name);

//    //    System.out.println("enter a");
//    //    int a=sc.nextInt();
//    //    System.out.println("enter b");
//    //    int b=sc.nextInt();
//    //    System.out.println(a+b);


//    //   System.out.println("enter c");
//    //   int age=sc.nextInt();
//    //   System.out.println(age);

//    //   if(age>18){
//    //    System.out.println("adult");
//    //   }
//    //  else System.out.println("not");

//    // int btn=sc.nextInt();

//    // if(btn==1) System.out.println("hello");
//    // else if(btn==2) System.out.println("namaste");
//    // else if(btn==3) System.out.println("ram ram");
//    // else System.out.println("invalid");

// //   System.out.println("enter choice");
// //   int ch=sc.nextInt();
// //   switch(ch){
// //    case 1: 
// //    System.out.println("hello");
// //    break;
// //    case 2: 
// //    System.out.println("hello 2");
// //    break;
// //    case 3: 
// //    System.out.println("hello 3");
// //    break;
    
// //    default: System.out.println("invalid ch");

// //   }



//    // for(int i=0;i<10;i++){
//    //    System.out.println("hello"+i);
//    // }
//    // int i=0;
//    // while(i<10){
//    //    System.out.println(i);
//    //    i++;
//    // }
//    // int i=0;
//    // do {
//    //    System.out.println(0);
//    //    i++;
//    // } while(i<0);

//    // System.out.println("enter no");
//    // int n=sc.nextInt();

//    // for(int i=1;i<=10;i++) System.out.println(n*i);


//    //    System.out.print("enter name: ");
//    //    String name= sc.nextLine();
//    // printMyname(name);
    
//    // System.out.println("enter a number");
//    // int n=sc.nextInt();
//    // factorial(n);

//    // System.out.println("enter the numbers to find gcd");
//    // int v1=sc.nextInt();
//    // int v2=sc.nextInt();

//    // gcd(v1, v2);

//    //  System.out.println("enter no:");
//    //  int n=sc.nextInt();
//    //  printf(n);


//    //  int[] marks=new int[3];
//    //  marks[0]=55;
//    //  marks[1]=55;
//    //  marks[2]=55;




//    //      // Input number of rows and columns
//    //      System.out.println("Enter the number of rows: ");
//    //      int rows = sc.nextInt();
//    //      System.out.println("Enter the number of columns: ");
//    //      int col = sc.nextInt();

//    //      // Declare the 2D array
//    //      int[][] arr = new int[rows][col];

//    //      // Input elements into the array
//    //      System.out.println("Enter the elements of the array:");
//    //      for (int i = 0; i < rows; i++) { // Use 0-based indexing
//    //          for (int j = 0; j < col; j++) {
//    //              arr[i][j] = sc.nextInt();
//    //          }
//    //      }

//    //      // Display the elements of the array
//    //      System.out.println("The elements of the array are:");
//    //      for (int i = 0; i < rows; i++) { // Use 0-based indexing
//    //          for (int j = 0; j < col; j++) {
//    //              System.out.print(arr[i][j] + " "); // Print elements in row format
//    //          }
//    //          System.out.println(); // New line after each row
//    //      }

//    //    //   sc.close();
//    //         System.out.println("to search");
//    //         int x=sc.nextInt();
//    //    for (int i = 0; i < rows; i++) { // Use 0-based indexing
//    //       for (int j = 0; j < col; j++) {
//    //           if(arr[i][j]==x) System.out.print(i+"i"+j+"j");
//    //       }
//    //   }
//    // String name=sc.next();
//    // String name2=sc.next();
//    // System.out.println(name);
//    // System.out.println(name.length());
//    // System.out.println(name.charAt(1));

//    // int n=name.compareTo(name2);
//    // System.out.println(n);

//    // System.out.println(name.substring(0,4 ));      

//    // StringBuilder str=new StringBuilder("andy");
//    // str.setCharAt(0, 's');
//    // System.out.println(str);
//    // str.insert(1, 'a');
//    // System.out.println(str);
//    // str.delete(2 ,5);
//    // System.out.println(str);
//    // str.append('d');
//    // System.out.println(str);

//    // for(int i=0;i<str.length()/2;i++){
//    //    int f=i;
//    //    int back=str.length()-1-i;
//    //    char ft=str.charAt(f);
//    //    char b=str.charAt(back);

//    //    str.setCharAt(f, b);
//    //    str.setCharAt(back, ft);

//    // }
//    // System.out.println(str);

//    // int n=5;
//    // int pos=1;
//    // int bitMask= 1<<pos;
//    // int notbitMask= ~(bitMask);
//    // int op=1;

//    // if((bitMask & n)==0) System.out.println("zero");
//    // else System.out.println("non-zero");
//       //   int newn=bitMask|n;
//       //   System.out.println(newn);
//       // System.out.println((n & notbitMask));

//       // if(op==1){
//       //    System.out.println((bitMask|n));
//       // }
//       // else System.out.println((notbitMask&n));


//      }
// }

class Test {
    public static void main(String[] args) {
        System.out.println("Java is working perfectly!");
        Test obj = new Test();
        System.out.println(obj);
    }
}

