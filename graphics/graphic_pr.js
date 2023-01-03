var ctx = document.getElementById("Graphic_pr").getContext("2d");
var myLineChart = new Chart(ctx, {
   type: 'line',
   label: 'Показания кровяного давления',
   data: {
        labels: ['0','10','20','30','40','50','60'],
      datasets: [{
        label: "Верхнее давление",
        fill: true,
        backgroundColor: "rgba(112, 255, 79, 0.2)",
        borderColor: "rgb(112, 255, 79", 
        data: [130, 127, 131, 135, 140, 141, 150]
      }, {
         label: "Нижнее давление",
         fill: true,
         backgroundColor: "rgba(189, 128, 255, 0.56)",
         borderColor: "rgb(129, 16, 252)",
         data: [80, 84, 82, 87, 86, 84, 90]
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