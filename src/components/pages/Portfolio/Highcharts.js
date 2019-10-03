export default function () {
  return {
      title: {
          text: 'ETH'
      },
  
      yAxis: {
        title: {
          text: 'Price'
        }
      },
      xAxis: {type: 'datetime'},
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
  
      plotOptions: {
        series: {
          label: {
            connectorAllowed: false
          },
          pointStart: 2010
        }
      },
  
      series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }],
      
      // series:historical
  
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom'
            }
          }
        }]
      }
      
}}
