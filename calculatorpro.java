import java.util.Scanner;
class Main
    {
        public static void main(String[] args)
        {
              double a,b;
              char choice;
              Scanner sc=new Scanner(System.in);
              do{
              System.out.println("enter the number 1: ");
              a=sc.nextDouble();
              System.out.println("enter the number 2: ");
              b=sc.nextDouble();
              char op;
              System.out.println("enter the operator from(+ , - , * , / , % ): ");
              op=sc.next().charAt(0);
              
                    double value=0.0d;
                    switch(op)
                    {
                        case '+':
                            value=a+b;
                            break;
                        case '-':
                            value=a-b;
                            break;
                        case '*':
                            value= a*b;
                            break;
                        case '/':
                            value=a/b;
                            break;
                        case '%':
                            value=a%b;
                            break;
                        default:
                            System.out.println("please enter proper operator:)");
                            break;                   

                    } 
                    if(value==(long)value)
                    		System.out.println("the value is: "+ (long)value);
                    else    
                                System.out.println("the value is: "+value);

		System.out.println("enter # to continue:");
                    choice=sc.next().charAt(0);
              }while(choice=='#');
        }
    }
