'use strict'

  $.ajax({
    url: "https://contribute-386d8.firebaseio.com/prod/success/show.json",
    data: {
      zipcode: 97201
    },
    success: function( result ) {
      // $( "#totalAmount" ).html( "<b>Rs " + result + " </b><br/><small> CONTRIBUTED</small>");
      //console.log(result.totalAmount)
      result.percent = (result.totalAmount*100)/150000;
      result.percent = result.percent.toFixed(2);
      result.names = []
      for (var contributor in result.contributors){
        //result.names.append({name:contributor.name,amount:contributor.amount})
        //console.log(contributor)
        result.names.push(result.contributors[contributor])
      }
      //console.log(result.names)
      var template = $('#statsTemplate').html();
      var rendered = Mustache.render(template, {data:result});
      $('#statsTarget').html(rendered);

      var backersTemplate = $('#backersTemplate').html();
      var rendered = Mustache.render(backersTemplate, {data:result});
      $('#backersTarget').html(rendered);
    }
  });
