const formularioEdad = document.getElementById("formularioEdad");

const productosContainer = document.getElementById("productosContainer");


formularioEdad.addEventListener("submit", (event) => {

    event.preventDefault();    
    let edadUsuario = parseInt(document.getElementById("edadUsuario").value);
    
    if (edadUsuario >= 18) {
        Swal.fire(
            '¡Bienvenido!',
            'Estos son nuestros vinitos disponibles!',
            'success'
        );

        productos.forEach((producto) => {
            let card = document.createElement("div");
            card.classList.add("card");
            card.className = "card";
        
            card.innerHTML = `
                <h3 class = "nombre-producto">Nombre: ${producto.nombre}</h3>
                <p>Variedad: ${producto.varietal}</p>
                <p>Descripción: ${producto.descripcion}</p>
                <p>Precio: $${producto.precio}</p>
                <img src="${producto.imagen}" alt="Imagen del producto" width="150" height="200">
            `;

            productosContainer.append(card);

            let comprar = document.createElement("button");
            comprar.innerText = "comprar";

            card.append(comprar);
        });
        
    } else {
        alert("Lo sentimos, este sitio es solo para mayores de edad.");
        document.body.innerHTML = ""; 
    }
});







    /*let condicionIngreso = parseInt(prompt("Estás por ingresar a un sitio de venta alcohólica. Ingresa tu edad por favor"));
    
    if (condicionIngreso >= 18) {
        Swal.fire(
               '¡Bienvenido!',
               'estos son nuestros vinitos disponibles!',
               'success'
             )
        //alert("¡Bienvenido, estos son nuestros vinitos disponibles!");

        productos.forEach((producto) => {
            let div = document.createElement("div");
            div.innerHTML = `
              Id: ${producto.codigo}
              <h3>Nombre: ${producto.nombre}</h3>
              <p>${producto.varietal}</p>
              <p>${producto.descripcion}</p>
              Precio: $${producto.precio}
              <hr/>
            `;          
            document.body.append(div);
          });
        
    } else{
        alert("Lo sentimos, este sitio es solo para mayores de edad.");
        document.body.innerHTML = "";
    };
*/    