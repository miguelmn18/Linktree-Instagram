const grafico = document.getElementById("meuGrafico");
const ctx = grafico.getContext("2d");

const myChart = new Chart(ctx, {
  type: "bar", // gráfico de barras
  data: {
    labels: ["Python", "Java", "JavaScript"], // linguagens
    datasets: [
      {
        label: "Nível de conhecimento",
        data: [3, 2, 1], // 3=Avançado, 2=Intermediário, 1=Iniciante
        backgroundColor: ["#3498db", "#2ecc71", "#e74c3c"],
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
       x: {
      ticks: {
        color: "white", 
        font: {
          weight: "bold"
        }
      }
    },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          callback: function (value) {
            if (value === 1) return "Iniciante";
            if (value === 2) return "Intermediário";
            if (value === 3) return "Avançado";
            return value;
          },
          color:"white",
          font: {
            weight:"bold" ,

          }
          
        },
      },
    },
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw;
            let nivel = "";
            if (value === 1) nivel = "Iniciante";
            if (value === 2) nivel = "Intermediário";
            if (value === 3) nivel = "Avançado";
            return context.label + ": " + nivel;
          },
          color:"white",
          font: {
            weight:"bold",
          }
        },
      },
    },
  },
});
