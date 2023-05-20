export const graph2 = (datos1, datos2, contenedor) => {
    const grafico = new Chart(contenedor, {
      type: 'line',
      data: {
        labels: datos1.labels,
        datasets: [
          {
            label: 'Mujeres',
            data: datos1.values,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'mujeres-axis',
          },
          {
            label: 'Hombres',
            data: datos2.values,
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            yAxisID: 'hombres-axis',
          }
        ],
      },
      options: {
        scales: {
          y: [
            {
              id: 'hombres-axis',
              type: 'linear',
              display: true,
              position: 'left',
              grid: {
                drawOnChartArea: false,
              },
              scaleLabel: {
                display: true,
                labelString: 'Cantidad de Hombres',
              },
            },
            {
              id: 'mujeres-axis',
              type: 'linear',
              display: true,
              position: 'right',
              grid: {
                drawOnChartArea: false,
              },
              scaleLabel: {
                display: true,
                labelString: 'Cantidad de Mujeres',
              },
            }
          ],
        },
      },
    })
  }
  