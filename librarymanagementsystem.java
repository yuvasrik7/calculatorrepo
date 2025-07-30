import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Vector;
import java.util.Scanner;
import java.lang.String;
class Book{
    String author,title;
    float price;
    long totfine=0L;
    String input1,input2;
    LocalDate date1;LocalDate date2;

    Book (){};
    Book( java.lang.String a,java.lang.String t,float p)
    {
        author=a;
        title=t;
        price=p;
    }
    Scanner sc=new Scanner(System.in);
    void daysdelay()
    {
        System.out.println("give the date of renewal:");
        input2=sc.nextLine();
        DateTimeFormatter formatter= DateTimeFormatter.ofPattern("dd-MM-yyyy");
        date2=LocalDate.parse(input2,formatter);
        long delay=ChronoUnit.DAYS.between(date1,date2);
        if(delay>14)
            totfine=delay*2;
    }
    void display()
    {
        System.out.println("Author name:"+author);
        System.out.println("Title name:"+title);
        System.out.println("Fine amount:"+totfine);
    }
    void getbook(Vector<Book> vectb)
    {

        String a,t;
        float p;
        System.out.println("enter the author:");
        a=sc.nextLine();
        System.out.println("enter the title of book:");
        t=sc.nextLine();
        System.out.println("give the date of book taken:");
        input1=sc.nextLine();
        DateTimeFormatter formatter= DateTimeFormatter.ofPattern("dd-MM-yyyy");
        date1=LocalDate.parse(input1,formatter);
        Book newb=new Book(a,t,p);
        newb.date1=date1;
        vectb.add(newb);
    }
    void renewal()
    {
        daysdelay();
        date1=date2;
        System.out.println("RENEWAL");
        display();

    }
    void Returnbook()
    {
        daysdelay();
        System.out.println("RETURN");
        display();
    }
};
public class librarymanagementsystem{
    public static void main(String[] args)
    {     Scanner sc=new Scanner(System.in);
        String a,t;
        float p;
        Book b=new Book();
        Vector<Book> vectb= new Vector<>();
        int choice=0;

        do {



            System.out.println("enter \n1.get book \n2. renewal\n 3.return\n 4.exit");
            choice=sc.nextInt();
             sc.nextLine();
            switch (choice) {
                case 1:

                    b.getbook(vectb);

                    break;
                case 2:
                    int found=1;
                    System.out.println("enter the author:");
                    a = sc.nextLine();
                    System.out.println("enter the title of book:");
                    t = sc.nextLine();
                    for (int i = 0; i < vectb.size(); i++) {
                        Book c = vectb.get(i);
                        if (a .equalsIgnoreCase(c.author) && t.equalsIgnoreCase(c.title) ) {
                            c.renewal();found=0;
                            break;
                        }
                    }
                    if(found==1)
                        System.out.println("the book is not found");
                    break;


                case 3:
                    System.out.println("enter the author:");
                    a = sc.nextLine();
                    System.out.println("enter the title of book:");
                    t = sc.nextLine();
                    sc.nextLine();
                    for (int i = 0; i < vectb.size(); i++) {
                        Book c = vectb.get(i);
                        if (a .equalsIgnoreCase(c.author) && t.equalsIgnoreCase(c.title) ) {
                            c.Returnbook();
                            break;
                        }
                    }
                    break;
            }
        }while(choice!=4);
    }
}

