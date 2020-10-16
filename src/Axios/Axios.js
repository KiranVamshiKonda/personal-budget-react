

import React from 'react';

import axios from 'axios';

import Chart from 'chart.js';


var  dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                'red',
                'green',
                'grey'
        
            ],
        }
    ],
    labels: []
}


export default class Axios extends React.Component {
    
    
    
     

      
    
      componentDidMount() {
        axios.get('http://localhost:3001/budget')
        .then(function (res){
            console.log(res.data);
            for (var i=0; i < res.data.myBudget.length; i++){
                dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
                dataSource.labels[i] = res.data.myBudget[i].title;
            }
            var ctx = document.getElementById("myChart").getContext("2d");
             new Chart(ctx, {
                type: 'pie',
                data: dataSource
            });
            
   
});
}

render() {
    return (
        <article>
        
    </article>
    )
  }

   
     
}
    


 