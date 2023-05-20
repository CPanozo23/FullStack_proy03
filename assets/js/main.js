import { onload } from "./onload.js"
import { makeRequest } from "./makeRequest.js"
import { drawTable } from "./drawTable.js"
import { graph } from "./graph.js"
import { graph2 } from "./graph2.js"
import { formatData } from './formatData.js'

let paginaActual = '/pages/inicio.html';
const bankList = []

const handleRequest = async () => {
  let id=document.getElementById("idBank").value
  if(id===""){
    document.getElementById("titlePage").innerHTML="Primero seleccione un banco"
  }else{

  //alert(id)
  let inputYear=document.getElementById("selectYear")
  //console.log(inputYear.value)
try {
  
    
    const datos = await makeRequest(inputYear.value, id)
    //console.log("despues make")
    //console.log(datos)
    
    const container = document.getElementById('resultados')
    
    //console.log("imprimir datos")
    //console.log(datos)
    //drawTable(datos, container)

    //GRÁFICO 01
    //const canva01 = document.getElementById('graph01')
    const datosFormateados = formatData(datos, 1)
    //graph(datosFormateados, canva01, 'purple')

    //GRÁFICO 02
    //const canva02 = document.getElementById('graph02')
    const datosFormateados2 = formatData(datos, 2)
    //graph(datosFormateados2, canva02, 'blue')

    //GRÁFICO 03
    const canva03 = document.getElementById('graph03')
    const datosFormateados3 = formatData(datos, 3)
    graph(datosFormateados3, canva03, 'purple')
    
    //GRÁFICO 04
    const canva04 = document.getElementById('graph04')
    graph2(datosFormateados, datosFormateados2, canva04)
  //}
  
  
    
} catch (error) {

  console.log(error.message)
  let texto
  if(error.message.includes('internal')){
    texto = 'Intente más tarde'
  }else{
    texto= 'Algo salió mal'
  }

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })

  Toast.fire({
    icon: 'error',
    title: texto,
  })
}
  }

}

const readData = async () => {
  try {
    const bankList= await onload()
    //console.log("en main")
    //console.log(bankList)
    cargarContenido('/pages/inicio.html'); // Carga la página de inicio por defecto

    $('nav a').click(function(event) {
      event.preventDefault();
  
      const pagina = $(this).attr('href');
      cargarContenido(pagina);
      paginaActual = pagina;
    });
    
    const button = document.getElementById('btnGeneralYear');
    
    button.addEventListener('click', handleRequest)
    
  } catch(error) {
    // Manejar el error
  }
}

function cargarContenido(pagina) {
  $('#contenido').load(pagina + ' .containerMain');
}

document.addEventListener('DOMContentLoaded', readData);


/**************************************************/
// Obtener el elemento div específico
const divClick = document.getElementById('banks');

const selectedBank = async (event) => {
  // Verificar si el elemento clickeado es un enlace con el ID "001"
  const enlaces = divClick.querySelectorAll('div');
  enlaces.forEach(enlace => {
    //console.log('Valor del enlace seleccionado:', enlace.id);
    if (event.target.id === enlace.id) {
      //console.log(event.target.id);
      document.getElementById("idBank").value=event.target.id
      handleRequest(event.target.id)
      //buscar la info del banco específico con request
    }
  });

};

divClick.addEventListener('click', selectedBank);

