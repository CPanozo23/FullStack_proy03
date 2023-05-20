export const formatData = (datos, option) => {
    console.log(option)
    const month= ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    //console.log(datos)
    //elemento.data.Perfiles[0].Perfil.empleados
    
    let data= []
    let dataTitle=''
    console.log(datos)

    switch(option){
        case 1:
            data = datos.map((elemento) => elemento.data.Perfiles[0].Perfil.emp_mujereres_perm)
            dataTitle='Mujeres'
            break;
        case 2:
            data = datos.map((elemento) => elemento.data.Perfiles[0].Perfil.emp_hombres_perm)
            dataTitle='Hombres'
            break;
        case 3:
            data = datos.map((elemento) => elemento.data.Perfiles[0].Perfil.empleados)
            dataTitle='Total'
            break;
    }
    

    return {
        labels: month,
        title: dataTitle,
        values: data
    }
}