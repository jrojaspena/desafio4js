let html = ""
let propiedades_venta=[
    {
    id: 1,    
    Nombre: "Apartamento",
    src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    Descripción: "Zona  exlcusiva",
    Ubicación: "123 Luxury Lane, Prestige Suburb, CA 45678" ,
    Habitaciones:4,
    Costo: 500,
    smoke: "false",
    pets: false
    

},

{
    id: 2,
    Nombre: "Apartamento",
    src:"https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    Descripción: "zona en la montaña",
    Ubicación: "789 Mountain Road, Summit Peaks, CA 23456",
    Habitaciones:2,
    Costo: 1200, 
    smoke: "true",
    pets: true
  

},

{
    id: 3,
    Nombre: "Penthouse",
    src:"https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    Descripción:"vista panorámica",
    Ubicación: "567 Skyline Avenue, Skyview City, CA 56789",
    Habitaciones:3,
    Costo: 4500 ,
    smoke: "false",
    pets: true
  

},

{ 
    id: 4,
    Nombre: "Departamento",
    src:"https://imgs.nestimg.com/piso_en_alquiler_en_madrid_5_habitaciones_5250120674645950526.jpg",
    Descripción:"Depto de lujo",
    Ubicación: "567 Skyline Avenue, Skyview City, CA 56789",
    Habitaciones:3,
    Costo: 3000 ,
    smoke: "false",
    pets: true
  

},
]
for(let venta of propiedades_venta){
    console.log(venta)
}


for (let ventas of propiedades_venta){
    let mostrar="";
    let mascotas="";
    if (ventas.smoke) {

       let  mostrar= ` <li> Permitido</li> "${ventas.smoke}"</li>`;
    } else {
        let mostrar = ` <li>No permitido</li> "${ventas.smoke}"</li>`;
    }
   
  if(ventas.pets){
    let mascotas= `<li> permitido "${ventas.pets}"</li>`;
}else {
    let mostrar = ` <li>No permitido</li> "${ventas.pets}"</li>`;
}
    
html += `<div id="${ventas.id} class="card">
<h1> ${ventas.Nombre}</h1>
<img style="width:300px" src= "${ventas.src}">
<li> ${ventas.Descripción}</li>
<li> ${ventas.Ubicación}</li>
<li> ${ventas.Habitaciones}</li>
<li> ${ventas.Costo}</li>
${ventas.smoke}
${ventas.pets}
</div> `
}
const ele = document.querySelector("#venta")
ele.innerHTML = html