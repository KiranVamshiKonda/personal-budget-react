import React from 'react';

function HomePage() {
  return (
<main className="center" id="main">

<div className="page-area">

    <article>
        <h1>Stay on track</h1>
        <p>
            Do you know where you are spending your money? If you really stop to track it down,
            you would get surprised! Proper budget management depends on real data... and this
            app will help you with that!
        </p>
    </article>

    <article>
        <h1>Alerts</h1>
        <p>
            What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
        </p>
    </article>

    <article>
        <h1>Results</h1>
        <p>
            People who stick to a financial plan, budgeting every expense, get out of debt faster!
            Also, they to live happier lives... since they expend without guilt or fear... 
            because they know it is all good and accounted for.
        </p>
    </article>

    <article>
        <h1>Free</h1>
        <p>
            This app is free!!! And you are the only one holding your data!
        </p>
    </article>

    <article>
        <h1>Stay on track</h1>
        <p>
            Do you know where you are spending your money? If you really stop to track it down,
            you would get surprised! Proper budget management depends on real data... and this
            app will help you with that!
        </p>
    </article>

    <article>
        <h1>Alerts</h1>
        <p>
            What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
        </p>
    </article>

    <article>
        <h1>Results</h1>
        <p>
            People who stick to a financial plan, budgeting every expense, get out of debt faster!
            Also, they to live happier lives... since they expend without guilt or fear... 
            because they know it is all good and accounted for.
        </p>
    </article>

    <article>
        <h1>Chart</h1>
        <p>
            <canvas id="myChart" width="400" height="400"></canvas>
        </p>
    </article>
    <figure>

            <img src="/pic.jpg" alt=" depicts the coins being added into a jar" style={{width:'30%'}} />
 
            <figcaption>Fig.1 - Manage your Budget.</figcaption>
          
          </figure>
    <form>
  <label htmlFor="Enter your name" >Your Name:</label><br />
  <input id="Enter your name" type="text" name="Enter your name" /><br /><br />
  <label htmlFor="Enter your Email Id" > Email Id:</label><br />
  <input id="Enter your Email Id" type="text" name="Enter your Email Id" /><br /><br />

  <input type="button" value="Submit" />
  </form>

 


</div>

</main>
  );
}

export default HomePage;