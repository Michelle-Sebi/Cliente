
import java.util.*;

public class ejercicio3 {
    public static void main(String[] args) {

        double [] monedasBilletesDisponibles = { 0.10, 0.50, 1, 2, 5};

	    double cambio = 9.5;
	
        Double[] monedas = Arrays.stream(monedasBilletesDisponibles).boxed().toArray(Double[]::new);
	    Arrays.sort(monedas, Collections.reverseOrder());
        double suma = 0.0;
        
        for (int i = 0;i < monedas.length ; i++ ){
            
            int contador = 0;
 
            while (suma + monedas[i] <= cambio) {
                suma += monedas[i];
                contador++;
            }
                 
            if(contador > 0){
                System.out.print(contador + " x " + monedas[i]+ ", ");  
            }
        }
    }
}
