Aplicarle dark mode a un sitio web, aplicación o cualquier sistema que posea una interfaz, consiste en darle la opción al usuario de alternar la paleta de colores predeterminada de la interfaz entre la original (que suele tener como principal color el blanco o colores claros) y una paleta "oscura" en la que los colores protagonistas sean, por ejemplo, el negro o similares.

Esta técnica últimamente se ha vuelto muy popular entre los sitios web, principalmente por sus beneficios con respecto a la salud de nuestro ojos, pero también por las posibilidades creativas que ofrece a los desarrolladores web que quieran crear experiencias en la que hagan sentir a los usuarios que pueden decidir ellos mismos el aspecto que quieren que tenga el sitio web en el que se encuentran consumiendo contenido.

Si te preguntas cómo puedes implementar el dark mode en tu proyecto, pues hay varias formas de hacerlo. En este artículo voy a explicarte una manera de implementarlo muy fácil utilizando los atributos de datos en HTML, las variables de CSS y un poco de Javascript.

**Estructura de archivos:**

Primero que nada, vamos a crear los archivos y carpetas que utilizaremos, que únicamente serán tres: el **index.html** en la raíz del proyecto y los archivos **global.css** y **variables.css** dentro de una carpeta que llamaremos "styles". De la siguiente forma:

```txt
📦root
 ┣ 📂styles
 ┃ ┣ 📜global.css
 ┃ ┗ 📜variables.css
 ┗ 📜index.html
```

El archivo **index.html** tendrá una estructura básica que, de momento, solo contendrá un texto en <h1/> y un botón que posteriormente ubicaremos en la parte superior de la pantalla que nos servirá para alternar entre el modo predeterminado y el dark mode, así como también el link al archivo **global.css**.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Tutorial Dark Mode</title>
    <link rel="stylesheet" href="styles/global.css" />
  </head>
  <body>
    <header>
      <button id="button">Cambiar colores</button>
    </header>
    <main>
      <h1>Mi página web</h1>
    </main>
  </body>
</html>
```

Luego, el archivo **variables.css** lo utilizaremos para definir las variables que contendrán los colores predeterminados del documento. Para esto puedes utilizar la etiqueta **html** o la [pseudo-clase **:root**](https://developer.mozilla.org/es/docs/Web/CSS/:root).

Para simplificar, utilizando la etiqueta **html** quedaría así:

```css
html {
  --black: #1d1d1f;
  --white: #ffffff;
}
```

Finalmente, en el archivo **global.css** aplicaremos un reset simple, los estilos correspondientes a cada etiqueta del HTML y la importación del archivo con las variables en la parte superior.

```css
@import './variables.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  width: 100%;
  height: 100vh;
  background: var(--white);
  overflow: hidden;
}

header {
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

header button {
  padding: 10px;
  background: transparent;
  border: 2px solid var(--black);
  border-radius: 10px;
  color: var(--black);
  cursor: pointer;
  font-weight: bold;
}

main {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

main h1 {
  font-size: 5rem;
  color: var(--black);
  text-align: center;
}
```

Ahora que tenemos lista la estructura base de nuestra página, pasemos a la aplicación del dark mode.

**Aplicando el dark mode:**

Primero, en el archivo **index.html** debemos de agregarle a la etiqueta <html/> un atributo de datos el cual definiremos como data-theme y por defecto de asignaremos el valor "light". Esto nos permitirá tener en nuestro documento una especie de "estado global" que vamos a aprovechar mas adelante.

```html
<html lang="en" data-theme="light"></html>
```

Si quieres aprender más sobre atributos de datos en html te recomiendo visitar la [documentación de MDN](https://developer.mozilla.org/es/docs/Learn/HTML/Howto/Use_data_attributes) donde se explica más a profundidad.

Ahora que tenemos una forma de saber el estado actual del documento, pasemos a definir condicionalmente las variables con los nuevos colores en el archivo **variables.css** utilizando la sintaxis etiqueta[data-nombre="valor"] {}.

```css
html {
  --black: #1d1d1f;
  --white: #ffffff;
}

html[data-theme='dark'] {
  --black: #ffffff;
  --white: #1d1d1f;
}
```

Con esto listo ya podemos cambiar de un modo a otro de forma manual cambiando el valor de atributo data-theme a "dark". Pero obviamente, queremos que este cambio ocurra de forma dinámica cuando el usuario presione el botón de la parte superior de la página. Pues es acá donde entra Javascript.

**Alternando estilos con Javascript:**

Dentro del archivo **index.html** abramos una etiqueta <script/> en la que haremos dos cosas: primero, hay que capturar el elemento <button/> del documento a través de su ID, y segundo, le asignamos un evento de "click" que ejecutará una función que cambie el valor del atributo data-theme del <html/>.

```html
<script>
  const $html = document.documentElement;
  const $button = document.getElementById('button');

  $button.addEventListener('click', () => {
    if ($html.getAttribute('data-theme') === 'light') {
      $html.setAttribute('data-theme', 'dark');
    } else {
      $html.setAttribute('data-theme', 'light');
    }
  });
</script>
```

Ahora, tal como queríamos, cada vez que el usuario presione el botón se activará o desactivará el dark mode.

¡Y eso es todo!

Así de fácil puedes implementar el dark mode en tu página sin complicaciones. Sin embargo, si eres como yo y no solo buscas que las cosas "funcionen" sino que además se vean bien, entonces acompáñame a la siguiente sección en la que agregaremos dos extras que mejorarán mucho la experiencia de nuestros usuarios. Estos serán:

- Reemplazar el texto "Cambiar colores" del botón por íconos de sol y luna para identificar respectivamente si la página se encuentra en el modo predeterminado o en el dark mode.

- Aplicar un efecto de transición suave para que el cambio de un modo a otro no se vea tan brusco.

**Extras**

Para utilizar íconos en nuestra página utilizaremos el link hacia los Material Icons de Google, que los puedes encontrar en su [documentación oficial](https://developers.google.com/fonts/docs/material_icons).

Para importarlos solo basta con agregarlos dentro de la etiqueta <head/> del archivo **index.html**.

```html
<link
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"
/>
```

Para que esto funcione, vamos a la etiqueta del botón, borramos su contenido, y abrimos una etiqueta <i/> (comúnmente utilizada para íconos) a la cual debemos de agregarle la clase "material-icons" (class="material-icons") y dentro escribir el nombre del ícono, en este caso "dark_mode".

```html
<button id="button">
  <i id="icon" class="material-icons icon">dark_mode</i>
</button>
```

Ahora, capturamos el ícono en una constante y dentro del evento click del botón agregamos dos líneas más en las que cambiamos el interior de la etiqueta <i/> a través de su propiedad innerHTML.

```javascript
const $html = document.documentElement;
const $button = document.getElementById('button');
const $icon = document.getElementById('icon');

$button.addEventListener('click', () => {
  if ($html.getAttribute('data-theme') === 'light') {
    $html.setAttribute('data-theme', 'dark');
    $icon.innerHTML = 'light_mode';
  } else {
    $html.setAttribute('data-theme', 'light');
    $icon.innerHTML = 'dark_mode';
  }
});
```

Listo con los íconos. Ahora la transición.

Para eso primero debemos de crear una clase en el archivo **global.css** llamada "transition" (puedes ponerle el nombre que desees). Esta clase la asignaremos de una forma un poco diferente a como estamos acostumbrados:

```css
html.transition,
html.transition *,
html.transition *::after,
html.transition *::before {
  transition: all 0.4s;
}
```

Al asignarla de esta forma básicamente le estamos diciendo a nuestro CSS "Asígnale la propiedad transition: all 0.4s al elemento <html/> y a todos sus elementos hijos".

Finalmente creamos una función dentro de nuestro código de Javascript en la que le asignamos, por un lapso de 1 segundo, la clase "transition" a todos los elementos del documento. Con esto conseguimos que, al momento de que ocurra el cambio de color, todos los elementos cuenten con la propiedad transition: all 0.4s, por lo tanto, el cambio no será instantáneo sino que tardara 0.4 segundos, lo cual es mucho mas agradable a la vista.

```javascript
const $html = document.documentElement;
const $button = document.getElementById('button');
const $icon = document.getElementById('icon');

const setTransition = () => {
  $html.classList.add('transition');

  setTimeout(() => {
    $html.classList.remove('transition');
  }, 1000);
};

$button.addEventListener('click', () => {
  setTransition();
  if ($html.getAttribute('data-theme') === 'light') {
    $html.setAttribute('data-theme', 'dark');
    $icon.innerHTML = 'light_mode';
  } else {
    $html.setAttribute('data-theme', 'light');
    $icon.innerHTML = 'dark_mode';
  }
});
```

¡Ahora sí, nuestra página web con dark mode esta lista!

Espero te haya servido el tutorial, si tienes alguna duda no dudes en contactarme por [twitter](https://twitter.com/aviliomoz) y te responderé lo más pronto posible.

Acá debajo te dejo el resultado final.
