import java.util.ArrayList;
import java.util.Scanner;
class Parentdata
{
    final String user="yuvasri";
    final long phno=9384000002L;
    ArrayList<String> name=new ArrayList<String>();
    void chat(String message)
    {
        name.add(message);
    }
    void display()
    {   for(int i=0;i<name.size();i++)
        System.out.println(name.get(i));
    }

}
class data{

   String user1; long phno1;
   ArrayList<String> list=new ArrayList<String>();
   data(String user1,long phno1)
   {
       this.user1=user1;
       this.phno1=phno1;
   }
     void chat(String message){
      list.add(message);
    }
    void display()
    {   for(int i=0;i< list.size();i++)
        System.out.println(list.get(i));
    }
};
class Send{

}
public class Whatsapp {


    public static void main(String[] args)
    {         Scanner sc = new Scanner(System.in);
        String text;
        data[] d=new data[10];
        int choice=0,i=0;
        do{


            String user;
            long phno;
            System.out.println("enter the username:");
            user = sc.next();
            System.out.println("enter the phone number:");
            phno=sc.nextLong();
             d[i]=new data(user,phno);
            System.out.println("enter 1 to create contacts:");
            choice=sc.nextInt();
            i++;
        }while(choice==1 && i<10);
       long phnocheck;
        int value=0;
       do
       {
           System.out.println("enter the contact number to send a message:");

           phnocheck = sc.nextLong();
           sc.nextLine();
           for (int j = 0; j < i; j++) {
               if (d[j].phno1 == phnocheck) {
                   System.out.println("Type your chat:");
                   text = sc.nextLine();
                   d[j].chat(text);
                   break;
               }
           }
         System.out.print("Enter number 1 to continue chatting:");
           if (sc.hasNextInt()) {
               value = sc.nextInt();
               sc.nextLine();
           } else {
               value = 0;
               sc.nextLine();
           }

       }while(value==1);

       System.out.println("the message is received from:"+d[i-1].phno1);
       Parentdata pa=new Parentdata();
       pa.chat("hi! how are you? !!");
       System.out.println("\n\nchat history of "+pa.user+"\n\n");
       pa.display();
       for(int num=0;num<i;num++)
       {   System.out.println("\n\nchat history of "+d[num].user1+"\n\n");
           d[num].display();
       }
    }

};
