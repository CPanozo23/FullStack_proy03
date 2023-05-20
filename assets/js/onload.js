export const onload = async () =>{
    try {
        const banksList = [
            { CodigoInstitucion: '001', NombreInstitucion: 'BANCO DE CHILE' },
            { CodigoInstitucion: '009', NombreInstitucion: 'BANCO INTERNACIONAL' },
            { CodigoInstitucion: '012', NombreInstitucion: 'BANCO DEL ESTADO DE CHILE' },
            { CodigoInstitucion: '014', NombreInstitucion: 'SCOTIABANK CHILE' },
            { CodigoInstitucion: '016', NombreInstitucion: 'BANCO DE CRÉDITO E INVERSIONES' },
            { CodigoInstitucion: '028', NombreInstitucion: 'BANCO BICE' },
            { CodigoInstitucion: '031', NombreInstitucion: 'HSBC BANK CHILE' },
            { CodigoInstitucion: '037', NombreInstitucion: 'BANCO SANTANDER-CHILE' },
            { CodigoInstitucion: '039', NombreInstitucion: 'ITAÚ CORPBANCA' },
            { CodigoInstitucion: '041', NombreInstitucion: 'JP MORGAN CHASE BANK' },
            { CodigoInstitucion: '049', NombreInstitucion: 'BANCO SECURITY' },
            { CodigoInstitucion: '051', NombreInstitucion: 'BANCO FALABELLA' },
            { CodigoInstitucion: '053', NombreInstitucion: 'BANCO RIPLEY' },
            { CodigoInstitucion: '055', NombreInstitucion: 'BANCO CONSORCIO' },
            { CodigoInstitucion: '059', NombreInstitucion: 'BANCO BTG PACTUAL CHILE' },
            { CodigoInstitucion: '060', NombreInstitucion: 'CHINA CONSTRUCTION BANK' },
            { CodigoInstitucion: '061', NombreInstitucion: 'BANK OF CHINA, AGENCIA EN CHILE' },
          ];
          //console.log(banksList)

          
          banksList.forEach(elemento => {
              let url = (elemento.NombreInstitucion.toLowerCase().replace(/\s/g, "")+".html").normalize('NFD').replace(/[\u0300-\u036f]/g, '')
              let position = banksList.findIndex((element) => element.NombreInstitucion === elemento.NombreInstitucion)
              elemento.url=url

              banksList[position]=elemento
  
          })
          //console.log("despues")
          //console.log(banksList)

          let style="col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex align-items-center justify-content-center h-10 border border-primary bg-secondary-subtle text-decoration-none cursor-pointer"
          const banks = document.getElementById("banks")
          banksList.forEach(elemento => {
              /*banks.innerHTML += `
              <a href="./pages/${elemento.url}" class="${style}" id=${elemento.CodigoInstitucion} value=${elemento.CodigoInstitucion}>${elemento.NombreInstitucion}</a>`
              //<a href="${previo}${elemento[1]}" class="${style}">${elemento[0]}</a>`*/

              banks.innerHTML += `
              <div class="${style}" id=${elemento.CodigoInstitucion}>${elemento.NombreInstitucion}</div>`
              //<a href="${previo}${elemento[1]}" class="${style}">${elemento[0]}</a>`*/


              })

             return banksList
    } catch (error) {
        
    }
}

        