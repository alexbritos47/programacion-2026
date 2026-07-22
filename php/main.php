<?php

//ejercicio 1 con nahuel alba 

//$nombre = "ana";
//$edad = 17;
//$cuidad = "libertad";



//echo "me llamo $nombre" . " tengo $edad" . " y vivo en $cuidad" ;



//ejercicio 2 con nahuel alba 
 

//$nombre = "teclado";
//$precio = 1200;
//$stock = 5; 

//echo "nombre del producto: $nombre" .  " su precio es $precio"  .  " queadan $stock unidades";


//ejercicio 3 con nahuel alba 

//$nombredeljugador = "mateo";
//$nombredelpersonaje = "dragonX";
//$nivel = 25;
//$servidor = "latinoamerica";

//echo "=== PERFIL DEL JUGADOR ===\n";
//echo "$nombredeljugador\n";
//echo "personaje:$nombredelpersonaje\n";
//echo "💪:$nivel\n";
//echo "🌍: $servidor\n";
//echo "========================\n";


//ejercicio 4 con nahuel alba 

//$nombre = "Lucía";
//$curso = "Tercero";
//$materia = "Programación";

//echo "Nombre:$nombre\n" ;
//echo "Curso:$curso \n";
//echo "Materia:$materia \n";


//BLOQUE 2 parte 1 con Nahuel alba


//$numero1 = 1;
//$numero2 = 33;
//$total=$numero1 + $numero2 ;// 34
 //echo $calculo=($numero1+$numero2);

 //$total=$numero1 - $numero2 ;// 32
 //echo $calculo=($numero1-$numero2);

 //$total=$numero1 * $numero2 ;// 33
 //echo $calculo=($numero1*$numero2);

 //$total=$numero1 / $numero2 ;// 22
 //echo $calculo=($numero1/$numero2);

//ejercicio 2 con nahuel 

//$base = 2;
//$altura= 2;

//echo $area = "su area es:" ($base * $altura);

//$nota1 = 5;
//$nota2 = 10;
//$nota3 = 3; 
//echo "su nota es: " . (($nota1 + $nota2 + $nota3) / 3);



//ejercicio 3 con nahuel


$totalMinutos = 135;
$horas = intdiv($totalMinutos, 60);
$minutos = $totalMinutos % 60;

echo $totalMinutos . " minutos equivalen a " . $horas . " horas y " . $minutos . " minutos.";




//BLOQUE 3  EJERCICIO 1 con nahuel alba


$numero1 = 10;
$numero2 = 20;

if ($numero1 == $numero2) {
    echo "Los números son iguales\n";

} elseif ($numero1 > $numero2) {
    echo "El primer número es mayor\n";

} else {
    echo "El segundo número es mayor\n";
}


//BLOQUE 3  EJERCICIO 2 con nahuel alba


$edad = 20;

if ($edad >= 18) {
    echo "Es mayor de edad\n";

} else {
    
    echo "Es menor de edad\n";
}

//BLOQUE 3  EJERCICIO 3 con nahuel alba


$numero = 10;
$texto = "10";

if ($numero == $texto) {
    echo "Con == son iguales\n";

} else {
    echo "Con == son diferentes\n";
}


if ($numero === $texto) {
    echo "Con === son iguales\n";
    
} else {
    echo "Con === son diferentes\n";
}