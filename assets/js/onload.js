
export const onload = () =>{
    try {
        const bankList = [
            'BANCO DE CHILE',
            'BANCO INTERNACIONAL',
            'BANCO DEL ESTADO DE CHILE',
            'SCOTIABANK CHILE',
            'BANCO DE CRÉDITO E INVERSIONES',
            'BANCO BICE',
            'HSBC BANK CHILE',
            'BANCO SANTANDER-CHILE',
            'ITAÚ CORPBANCA',
            'JP MORGAN CHASE BANK',
            'BANCO SECURITY',
            'BANCO FALABELLA',
            'BANCO RIPLEY',  
            'BANCO CONSORCIO',
            'BANCO BTG PACTUAL CHILE',
            'CHINA CONSTRUCTION BANK',
            'BANK OF CHINA, AGENCIA EN CHILE'
        ]
        
        let banks = document.getElementById('banks')
        
        let rutaCompleta = window.location.pathname;
        let nombreArchivo = rutaCompleta.split('/').pop();
        console.log(nombreArchivo);

        bankList.forEach(elemento => {
            let url = (elemento.toLowerCase().replace(/\s/g, "")+".html").normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            let position = bankList.findIndex((element) => element === elemento)

            bankList[position]=[elemento,url]

        })

        let style="col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex align-items-center justify-content-center h-10 border border-primary bg-secondary-subtle text-decoration-none"

        let previo ="./pages/"
        if(nombreArchivo !== "index.html"){
            previo ="./"
        }
        
        bankList.forEach(elemento => {
            banks.innerHTML += `
            <a href="${previo}${elemento[1]}" class="${style}">${elemento[0]}</a>`
            })
            
    } catch (error) {
        
    }
}