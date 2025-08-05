
import java.util.Scanner;
class Game {
    public int secret = 45;
    public int guess;
    public int total_games = 0;
    public int total_guess = 0;
    double average_guess;
    Scanner sc=new Scanner(System.in);

    void playGame() {
        int count = 0;
        total_games++;
        do {
            System.out.println("enter the guessed number:");
            guess = sc.nextInt();
            if (guess >1 && guess <100) {
                count++;
                total_guess++;
                if (guess > secret)
                    System.out.println("your guess is too high");
                else if (guess < secret)
                    System.out.println("your guess is too low");
                else {
                    System.out.println("your guess is true");
                    break;
                }
            } else if (guess == -1)
                break;
            else
                System.out.println("invalid guess");
        } while (count != 10);
    }

    void viewStatus() {
        if (total_games > 0) {
            System.out.println("Total games played:" + total_games);
            System.out.println("Total guess:" + total_guess);
            average_guess = total_guess / total_games;
            System.out.println("Average guess:" + average_guess);
        } else
            System.out.println("no games played");
    }

    public static void main(String[] arg) {
        System.out.println("yuvasri \n 2024503029");
        int menu, guess;
        Scanner sc = new Scanner(System.in);
        Game obj = new Game();
        do{
            System.out.println("---menu offers---");
            System.out.println("1.Play games\n 2.View status\n 3.Quit");
            System.out.println("enter your option:");
            menu = sc.nextInt();
            switch (menu) {
                case 1:
                    int count = 0;
                    obj.playGame();
                    break;
                case 2:
                    obj.viewStatus();
                    break;
                case 3:
                    System.out.println("quit the game");
                    break;
                default:
                    System.out.println("wrong options");
                    break;
            }
        } while (menu != 3);
    }
}


class guessgame {
    public int secret = 45;
    public int guess;
    public int total_games = 0;
    public int total_guess = 0;
    double average_guess;
    Scanner sc=new Scanner(System.in);

    void playGame() {
        int count = 0;
        total_games++;
        do {
            System.out.println("enter the guessed number:");
            guess = sc.nextInt();
            if (guess >1 && guess <100) {
                count++;
                total_guess++;
                if (guess > secret)
                    System.out.println("your guess is too high");
                else if (guess < secret)
                    System.out.println("your guess is too low");
                else {
                    System.out.println("your guess is true");
                    break;
                }
            } else if (guess == -1)
                break;
            else
                System.out.println("invalid guess");
        } while (count != 10);
    }

    void viewStatus() {
        if (total_games > 0) {
            System.out.println("Total games played:" + total_games);
            System.out.println("Total guess:" + total_guess);
            average_guess = total_guess / total_games;
            System.out.println("Average guess:" + average_guess);
        } else
            System.out.println("no games played");
    }

    public static void main(String[] arg) {
        int menu, guess;
        Scanner sc = new Scanner(System.in);
        Game obj = new Game();
        do{
            System.out.println("---menu offers---");
            System.out.println("1.Play games\n 2.View status\n 3.Quit");
            System.out.println("enter your option:");
            menu = sc.nextInt();
            switch (menu) {
                case 1:
                    int count = 0;
                    obj.playGame();
                    break;
                case 2:
                    obj.viewStatus();
                    break;
                case 3:
                    System.out.println("quit the game");
                    break;
                default:
                    System.out.println("wrong options");
                    break;
            }
        } while (menu != 3);
    }
}

