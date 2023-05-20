export const graph = (datos, contenedor, colorLine) => {
    const grafico = new Chart(contenedor, {
      type: 'line',
      data: {
        labels: datos.labels,
        datasets: [
          {
            label: datos.title,
            data: datos.values,
            borderColor: colorLine,
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    })
  }
  