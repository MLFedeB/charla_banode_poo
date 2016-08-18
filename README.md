# Eliminando if/switch de nuestro código?

Este es un workshop que plantea un ejercicio a modo de [Kata](http://www.codekatas.org/) para reflexionar acerca de:

1. Ventajas y Desventajas de utilizar if/switchs
2. Alternativas a estas estructuras de control
3. Ventajas y desventajas (alternativas)
4. Reducir el número de if/switch utilizando POO
5. Áreas de aplicación
6. Que significa escribir "buen código"?

Si queres realizar el workshop te proponemos que leas: *La problemática* (se lee rápido), *Paso para realizar el workshop* y *Qué necesito?*.

## Descripción de la problemática

En la [FIUBA](www.fi.uba.ar) planteamos un ejercicio que permitía modelar un calendario en el cuál dado una cita varias personas y recursos pueden participar de esta última. A los efectos de este workshop planteamos un subconjunto de requerimientos. Consideremos solo los siguientes casos de uso:

1. Una persona está ocupada desde (hora - fecha) hasta (hora - fecha).
2. Un recurso está ocupado desde (hora - fecha) hasta (hora - fecha).
3. El recurso **no** puede participar simultaneamente en dos citas.


    > A modo de ejemplo: *Proyector* puede participar del evento 'X' que se extiende desde 21/10/2016 12:00 hasta 21/10/2016 12:30 pero **no** en simultaneo del evento 'Y' que se extiende desde 21/10/2016 12:10 hasta 21/10/2016 13:00

4. La persona puede participar simultaneamente en dos citas.

    > A modo de ejemplo: Carlos puede participar del evento 'X' que se extiende desde 21/10/2016 12:00 hasta 21/10/2016 12:30 y en simultaneo el evento 'Y' que se extiende desde 21/10/2016 12:10 hasta 21/10/2016 13:00

```json
{
    "participantes": [
        {
            "tipo": 0,
            "nombre": "Carlos",
            "citas": [
                { 
                    "desde": "2016-08-09T12:00:00.349Z",
                    "hasta": "2016-08-09T12:30:00.349Z"
                },
                { 
                    "desde": "2016-08-09T12:10:00.349Z",
                    "hasta": "2016-08-09T13:00:00.349Z"
                }
            ]
        },
        {
            "tipo": 1,
            "nombre": "Proyector",
            "citas": [
                { 
                    "desde": "2016-08-09T12:00:00.349Z",
                    "hasta": "2016-08-09T12:30:00.349Z"
                },
                { 
                    "desde": "2016-08-09T12:40:00.349Z",
                    "hasta": "2016-08-09T13:00:00.349Z"
                },
            ]
        }
    ]
}
```

A los efectos de realizar el workshop proveemos un ambiente de pruebas ya configurado. Porqué?:

1. Facilita la aplicación de la metodología [TDD](https://en.wikipedia.org/wiki/Test-driven_development) ( Test Driven Design).
2. Permite realizar sucesivas refactorizaciones ([Code Refactor](https://en.wikipedia.org/wiki/Code_refactoring)).
3. Disminuye la frustración del participante a la hora de configurar entorno de desarrollo.
4. Permite focalizarce en el problema a resolver.

## Pasos para realizar el workshop

1. Clonamos el repo:

    ```bash
        git clone https://github.com/diegosanchez/charla_banode_poo.git
    ```

2. Descargamos el branch remote correspondiente al workshop:

    ```bash
        git checkout workshop
    ```

3. Instalamos módulos

    ```bash
        npm install
    ```

4. Ejecutamos los tests

    ```bash
        npm run test
    ```
    
    o
    
    ```bash
        make
    ```

Esto es lo que deberíamos ver luego de seguir todos estos pasos:

![Producto Final][1]


## Qué necesito?

1. Notebook para realizar workshop (si queres hacerlo, sino podes venir a compartir tus experiencias)
2. node 4.2.3
3. npm  2.14.7
4. Ganas de compartir tu solución.

[1]: https://s5.postimg.org/4d1b3rlpz/producto_final.png

