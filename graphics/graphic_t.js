
var temp = document.getElementById("Graphic_t").getContext("2d");
var myLineChart = new Chart(temp, {
   type: 'line',
   data: {
      labels: ['0','10','20','30','40','50','60'],
      datasets: [{
         label: "Показания температуры",
         fill: true,
         backgroundColor: "rgba(255, 159, 118, 0.42)",
         borderColor: "rgba(255, 75, 0, 0.8)", 
         data: [36.6,36.4,36.8,36.7,36.8,36.9,36.8]
      }]
   },
   options: {
    radius: 4,
    hoverRadius: 8,
    responsive: true,
    animation: {
        onComplete: () => {
          delayed = true;
        },
        delay: (context) => {
          let delay = 0;
          if (context.type === 'data' && context.mode === 'default' && !delayed) {
            delay = context.dataIndex * 1200;
          }
          return delay;
        },
    },
},
});