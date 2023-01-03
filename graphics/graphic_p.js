var pulse = document.getElementById("Graphic_p").getContext("2d");
let delayed;
var myLineChart = new Chart(pulse, {
   type: 'line',
   data: {
      labels: ['0','10','20','30','40','50','60'],
      datasets: [{
         label: "Показания пульса",
         fill: true,
         borderColor: "#6434eb", 
         backgroundColor: "rgba(102, 102, 239, 0.32)",
         data: [58,77,95,120,137,155,170],
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
