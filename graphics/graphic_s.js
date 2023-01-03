
var sat = document.getElementById("Graphic_s").getContext("2d");
var myLineChart = new Chart(sat, {
   type: 'line',
   data: {
      labels: ['0','10','20','30','40','50','60'],
      datasets: [{
         label: "Сатурация",
         fill: true,
         backgroundColor: "rgba(255, 17, 17, 0.205)",
         borderColor: "rgba(255, 75, 0, 0.8)", 
         data: [100,100,99,98,97,96,97,95]
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