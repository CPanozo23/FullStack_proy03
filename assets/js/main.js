import { onload } from "./onload.js"
//[1] - ONLOAD 
const readData = async () => {
  try {
    await onload()
  }catch(error){

  }
}

document.addEventListener('DOMContentLoaded', readData())