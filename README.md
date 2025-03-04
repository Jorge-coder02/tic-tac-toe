# Tic Tac Toe (React)

# Enlace a la página del juego:
https://tictactoebyjorge.netlify.app/

## Descripción

Una implementación simple del clásico juego de **Tic Tac Toe** (Tres en raya) hecha con **React**. El juego permite a dos jugadores tomar turnos para colocar sus fichas (X o O) en una cuadrícula de 3x3 hasta que haya un ganador o empate. Al final del juego, se muestra un modal con el ganador.

## Funcionalidades

- Dos jugadores pueden jugar alternando turnos entre "X" y "O".
- El juego detecta automáticamente un ganador o un empate.
- Al finalizar el juego, se muestra un modal con el ganador.
- Los jugadores pueden reiniciar la partida en cualquier momento.
- El diseño es completamente adaptable a diferentes tamaños de pantalla.

## Tecnologías

- **React** - Biblioteca de JavaScript para construir interfaces de usuario.
- **Tailwind CSS** - Framework CSS para un diseño limpio y responsivo.
- **DaisyUI** - Un plugin de componentes UI basado en Tailwind CSS.

## Instalación

1. **Clona el repositorio**:

git clone https://github.com/Jorge-coder02/tic-tac-toe.git

2. **Navega a la carpeta del proyecto:**:

cd tic-tac-toe

3. **Instala las dependencias:**

- Si usas npm:\*\*:

  npm install

- O si usas yarn:
  yarn install

4. **Ejecuta la aplicación:**:

npm start

## Uso

Al cargar la página, verás una cuadrícula 3x3 donde los jugadores podrán hacer clic para colocar sus fichas ("X" o "O").
El turno alterna automáticamente entre "X" y "O".
Cuando un jugador gane o haya un empate, aparecerá un modal indicando el resultado.
Puedes hacer clic en "Resetear partida" para empezar de nuevo en cualquier momento.

## Estructura del Proyecto

/public
/img - Imágenes utilizadas, como el favicon.
index.html - Archivo HTML principal.
favicon.ico - Ícono de la página.

/src
/Componentes
Cuadrado.tsx - Componente para cada casilla en la cuadrícula.
MostrarTurno.tsx - Componente que muestra quién es el siguiente jugador.
GanadorModal.tsx - Componente para mostrar el modal con el ganador.
App.tsx - Componente principal donde se gestionan las partidas y el estado.
index.tsx - Punto de entrada de la aplicación.
index.css - Estilos principales.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar el proyecto o agregar nuevas características, siéntete libre de hacer un fork y enviar un pull request.

## Autor

Desarrollado por Jorge-coder02.
