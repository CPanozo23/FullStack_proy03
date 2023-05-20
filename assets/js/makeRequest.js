export const makeRequest = async (inputYear, id) =>{
    try {
        //console.log("en make")
        //console.log(id)
        
        //console.log("en make2")
      
        //console.log(inputYear)
        let month
        const respuestas = []
        //para banco y año
        /*let respuesta = await axios.get(`https://api.sbif.cl/api-sbifv3/recursos_api/perfil/instituciones/001/2022/01?apikey=5598691df818f21be6278618948092222c0ff50f&formato=json`)
        console.log(respuesta.data.Perfiles[0].Perfil.nombre)
        console.log(respuesta.data.Perfiles[0].Perfil.empleados)
        console.log(respuesta.data.Perfiles[0].Perfil.emp_hombres_perm)
        console.log(respuesta.data.Perfiles[0].Perfil.emp_mujereres_perm)
*/
        //let respuesta = await axios.get(`https://api.sbif.cl/api-sbifv3/datasets/EMPLEADOS/instituciones/001/2013?apikey=5598691df818f21be6278618948092222c0ff50f&formato=json`)

        //console.log(respuesta)
        //console.log(respuesta.data)
        for (let i = 0; i < 12; i++) {
            i+1<10 ? month="0"+(i+1) : month=i+1

            //console.log(month)
            let respuesta = await axios.get(`https://api.sbif.cl/api-sbifv3/recursos_api/perfil/instituciones/${id}/${inputYear}/${month}?apikey=5598691df818f21be6278618948092222c0ff50f&formato=json`)

            /*console.log(respuesta.data.Perfiles[0].Perfil.nombre)
            console.log(respuesta.data.Perfiles[0].Perfil.empleados)
            console.log(respuesta.data.Perfiles[0].Perfil.emp_hombres_perm)
            console.log(respuesta.data.Perfiles[0].Perfil.emp_mujereres_perm)*/
            //console.log(respuesta.data)
            respuestas.push(respuesta)
            
        }
        document.getElementById("titlePage").innerHTML=`${respuestas[0].data.Perfiles[0].Perfil.nombre} - ${inputYear}`
        //respuesta = await axios.get(`https://api.sbif.cl/api-sbifv3/recursos_api/perfil/instituciones/001/2013/08?apikey=5598691df818f21be6278618948092222c0ff50f&formato=json`)
        /*console.log("aaa2")

        console.log(respuestas)
        respuestas.forEach(el => {
            console.log(`Nombre: ${el.data.Perfiles[0].Perfil.nombre}
            Empleados: ${el.data.Perfiles[0].Perfil.empleados}
            Hombres: ${el.data.Perfiles[0].Perfil.emp_hombres_perm}
            Mujeres: ${el.data.Perfiles[0].Perfil.emp_mujereres_perm}`)
        });
*/
        return respuestas
    } catch (error) {
        
    }
}