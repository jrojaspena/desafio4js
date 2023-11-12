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
    pets: "false"
    

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
    pets: "true"
  

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
    pets: "true"
  

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
    pets: "true"
  

},
]
 let contador = 0;
for (let el of propiedades_venta){
 if (contador < 3) {
     console.log(el.Nombre,el.src,el.Descripción,el.Ubicación,el.Habitaciones,el.Costo, el.smoke,el.pets)
 }
contador++
}


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
        pets:"true"
       
    
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
        pets:"false"
       
    
    
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
        pets:"true"
      
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
        pets: "false"
       
    } ,
    
    ]
    
    
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
        pets:true
       
    
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
        pets:false
       
    
    
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
        pets:true
      
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
        pets: false
       
    } ,
    
    ]
    for(let alquiler of propiedades_alquiler){
        console.log(alquiler)
        
    }

    
    
    let contador1 = 0;
    for (let elem of propiedades_alquiler){
     if (contador1 < 3) {
         console.log(el.Nombre,el.src,el.Descripción,el.Ubicación,el.Habitaciones,el.Costo, el.smoke,el.pets)
     }
    contador1++
    }

   