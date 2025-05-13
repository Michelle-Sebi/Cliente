import java.util.ArrayList;

import java.util.Arrays;

public class ejercicio1{

    public static void main(String[] args){

        double [] serie = {1, 5 ,8,40, 100, -3, 2.5, 3000};
        
        Arrays.sort(serie);

        double valorMedio;
        if (serie.length % 2 == 0) {

            valorMedio = serie[(serie.length / 2) - 1];
        }
        else {
            
            valorMedio = serie[((serie.length + 1)/ 2) - 1];
        }

        ArrayList<Double> pequeños = new ArrayList<>();
        ArrayList<Double> grandes = new ArrayList<>();

        for (int i = 0; i < serie.length; i ++){

            if (serie[i] <= valorMedio){
                pequeños.add(serie[i]);
            }
            else{
                grandes.add(serie[i]);
            }
        }

        double[]ListaPequeños = new double[pequeños.size()];
        double[]ListaGrandes = new double[grandes.size()];

        for (int i = 0; i < pequeños.size(); i++) {

            ListaPequeños[i] = pequeños.get(i);
        }

        for (int i = 0; i < grandes.size(); i++) {

            ListaGrandes[i] = grandes.get(i);
        }


        System.out.print("Pequeños: ");
        for (int i = 0; i < ListaPequeños.length; i++) {

            System.out.print(ListaPequeños[i] + " ");
        }
        System.out.println();

        System.out.print("Grandes: ");
        for (int i = 0; i < ListaGrandes.length; i++) {

            System.out.print(ListaGrandes[i] + " ");
        }
        System.out.println();
    }
}
