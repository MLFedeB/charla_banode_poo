# Eliminando if/switch de nuestro código?

Este es un workshop que plantea un ejercicio a modo de [Kata](http://www.codekatas.org/) para reflexionar acerca de:
1. Ventajas y Desventajas de utilizar if/switchs
2. Alternativas a estas estructuras de control.
3. Reducir el número de if/switch utilizando POO.
4. Ventajas y desventajas
5. Áreas de aplicación

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
````
