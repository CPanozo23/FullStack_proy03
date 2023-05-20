export const drawTable = (datos, contenedor) =>{

    //console.log(respuesta.data.DescripcionesCodigosDeInstituciones[0].NombreInstitucion) //ESTE FUNCIONA
    console.log("datos dentro de draw-01")
    //const contenedor = document.getElementById('resultados')
    console.log("datos dentro de draw")
    //console.log(datos.NombreInstitucion) //no definido
    //console.log(typeof(datos))//es un bjeto, debe ser un array

    /*datos.forEach((element) => {
        console.log(element)
      })
  
      datos.forEach(elemento => {
        contenedor.innerHTML += `
              <div>
                <p><span class="fw-bold">Fecha</span>: ${elemento.NombreInstitucion}</p>
              </div>
              `
        })
        
    
    */
   //let month= [[1,'Enero'], [2,'Febrero'], [3,'Marzo'], [4,'Abril'], [5,'Mayo'], [6,'Junio'], [7,'Julio'], [8,'Agosto'], [9,'Septiembre'], [10,'Octubre'], [11,'Noviembre'], [12,'Diciembre']]
   const month= ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
   let i=0
        datos.forEach(elemento => {
          contenedor.innerHTML += `
                <div>
                  <span class="fw-bold">Mes</span>: ${month[i]} | <span class="fw-bold">Hombres</span>: ${elemento.data.Perfiles[0].Perfil.emp_hombres_perm} | <span class="fw-bold">Mujeres</span>: ${elemento.data.Perfiles[0].Perfil.emp_mujereres_perm} | <span class="fw-bold">Total</span>: ${elemento.data.Perfiles[0].Perfil.empleados}</p>
                </div>
                `
                i++
          })
 
}