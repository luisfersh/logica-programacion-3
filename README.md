# Lógica de programación 3 — Factorial

Práctica en JavaScript para calcular el factorial de un número entero.

## Funcionamiento

1. El usuario escribe un número en el campo de texto.
2. El programa revisa que sea un número entero entre 0 y 170.
3. Si no es válido, muestra un mensaje de error, limpia el campo y lo enfoca para solicitar otro valor.
4. Si es válido, utiliza un ciclo `for` para calcular el factorial y muestra el resultado en la página y en la consola.

**Nota:** Se utiliza el límite 170 porque, a partir de 171!, el resultado supera el rango finito del tipo `Number` de JavaScript.

## Pruebas

| Entrada | Salida |
| --- | --- |
| 5 | 120 |
| 6 | 720 |
| 0 | 1 |
| 4 | 24 |
| abc | Error: ingresa un número entero entre 0 y 170. |
| -3 | Error: ingresa un número entero entre 0 y 170. |
| 2.5 | Error: ingresa un número entero entre 0 y 170. |

## Cómo ejecutar

Abrir el archivo `index.html` en un navegador o publicar el repositorio con GitHub Pages.
