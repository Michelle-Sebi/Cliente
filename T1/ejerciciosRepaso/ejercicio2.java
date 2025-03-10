import java.util.Scanner;

public class ejercicio2 {
    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);
		
        System.out.print("Por favor, escribe un número entero: ");
		
        int numero = in.nextInt();

        for(int i = 1; i <= numero; i ++){

            if (i == 1){
                System.out.print(i + " limón, y medio limón");
                System.out.println();
            }   
            
            else if (i == numero){
                System.out.print("¡¡¡Y " + numero + " LIMONES Y MEDIO LIMÓN!!!");
                System.out.println();
            }

            else {
                System.out.print(i + " limones, y medio limón");
                System.out.println();
            }
        }

    }
    
}
