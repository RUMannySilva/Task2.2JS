console.log(data.results[0].members);

var membersList= data.results[0].members;

var table='';

for (var i=0; i<membersList.length; i++){
      var member=membersList[i];
      var fullName=member.first_name+" "+(member.middle_name||" ")+ " " +member.last_name;

          table= '<tr>';
          table+= '<td>';
          table+= '<a href="'+member.url+' "target=_blank">'+fullName+'</a>';
          table+= '</td>';
          table+= '<td class="party">' + member.party+ '</td>';
          table+= '<td>' + member.state + '</td>';
          table+= '<td>' + member.seniority + '</td>';
          table+= '<td>' + member.votes_with_party_pct +'%'+'</td></tr>';
          table+='</tr>';
;
document.getElementById("senate-data").innerHTML += table;
}



$(".partyselector").click(function() {

      var selectedInputs = $('input.partyselector:checked')

      var allparties = [];

      selectedInputs.each(function() {
            allparties.push($(this).val());
      });

      $('tr').each(function(index, element) { 
            $(element).find("td:contains('R')")
      })

      $('tr td.party').filter(':contains("R")').each(function() {
            var row = $(this).parent();
      });







