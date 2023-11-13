
let html=""
let propiedades_alquiler=[
    {
        id:1,
        Nombre: "Apartamento",
        src:"https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        Descripción:"Ubicado en el corazón de la ciudad",
        Ubicación: "123 Main Street, Anytown, CA 91234" ,
        Habitaciones:2,
        Costo: 2000,
        smoke:"false",
        pets:true,
       
    
    },
    
    {
        id:2,
        Nombre: "Apartamento",
        src:"https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        Descripción:"Vista al mar",
        Ubicación: "456 Ocean Avenue, Seaside Town, CA 56789 ",
        Habitaciones:3,
        Costo: 2500,
        smoke:"true",
        pets:false,
       
    
    
    },
    
    {
        id:3,
        Nombre: "Condominio",
        src:"https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        Descripción:"Zona residencial",
        Ubicación: "123 Main Street, Anytown, CA 91234" ,
        Habitaciones:2,
        Costo: 2200,
        smoke:"false",
        pets:true,
      
    },

    {
        id: 4,
        Nombre: "Departamento",
        src:"https://imgs.nestimg.com/piso_en_alquiler_en_madrid_5_habitaciones_5250120674645950526.jpg",
        Descripción:"Zona residencial",
        Ubicación: "100 Main Street,Anytown, CA 91234",
        Habitaciones:3,
        Costo: 2000,
        smoke: "false",
        pets: false,
       
    } ,
       
]
for(let alquiler of propiedades_alquiler){
    console.log(alquiler)
    
}


    for (let alquiler of propiedades_alquiler){

        let mostrar="";
        let mascotas="";
     
  
     let  mostrar= ` <li> Permitido</li> "${alquiler.smoke}"</li>`;
    } else {
        let mostrar = ` <li>No permitido</li> "${alquiler.smoke}"</li>`;
    }
   
  if(ventas.pets){
    let mascotas= `<li> permitido "${alquiler.pets}"</li>`;
     }else {
    let mostrar = ` <li>No permitido</li> "${alquiler.pets}"</li>`;
     }

    html += `<div id="class="card"> 
    <h1> ${alquiler.Nombre}</h1>
    <img style="width:300px" src= "${alquiler.src}"> 
    <li> ${alquiler.Descripción}</li>
    <li> ${alquiler.Ubicación}</li>
    <li> ${alquiler.Habitaciones}</li>
    <li> ${alquiler.Costo}</li>
    ${alquiler.smoke}
    ${alquiler.pets}
    </div>  `;
    
    }
    const ele = document.querySelector("#alquiler")
    ele.innerHTML = html
  

   
 




   
   



     
    
    
   
