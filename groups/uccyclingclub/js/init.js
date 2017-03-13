(function ($) {
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
      $("#footer").load("footer.html"); 
      $("#menunav").load("menunav.html");
$("#menu").load("menu.html");
  }); // end of document ready
})(jQuery); // end of jQuery name space

  $(document).ready(function(){
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  });

 $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

google.charts.load('current', {'packages':['line', 'corechart']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var chartDiv = document.getElementById('chart_div');

      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Test Date');
      data.addColumn('number', "Max Heart Rate");
      data.addColumn('number', "Power at LT");

      data.addRows([
        [new Date(2014, 0),  160,  170],
        [new Date(2014, 8),   161,  185],
        [new Date(2015, 1),   163,   195],
        [new Date(2015, 6),  166, 210],
        [new Date(2016, 2),  168, 225]
      ]);

      var materialOptions = {
        chart: {
          title: 'Power at LT + Max Heart Rate'
        },
        width: 1000,
        height: 600,

        axes: {
          // Adds labels to each axis; they don't have to match the axis names.
          y: {
            Temps: {label: 'Power at LT'},
            Daylight: {label: 'Max Heart Rate'}
          }
        }
      };



      function drawMaterialChart() {
        var materialChart = new google.charts.Line(chartDiv);
        materialChart.draw(data, materialOptions);
      }

      drawMaterialChart();

    }