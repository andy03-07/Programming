   int x,y,nst,nsp,ml;

     printf("enter the no of rows you want to print:");
     scanf("%d",&x);
     printf("enter the no of columns you want to print:");
     scanf("%d",&y);
    nsp=y/2;
    nst=1;
    ml=x/2 + 1;
     for(int i=1;i<=x;i++){
        for(int j=1;j<=nsp;j++){
            printf("  ");
        }
        for(int k=1;k<=nst;k++){
        printf("* ");
        }
        if(i<=ml){
             nsp--;
             nst+=2;
        }
        else {
            nsp++;
            nst-=2;
        }
//         // for(int l=1;l<i;l++){
//         // printf("* ");
//         // }

        printf("\n");
//      }


}