$.getJSON("https://spreadsheets.google.com/feeds/list/1T3QP7ed5CU1Tdu7cy1lDKGA2n8LLd11Bw4QvEB1aq_k/od6/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      var types=[];
      var tables=[];
      var seedcatalog;
      var td='<td class="mdc-data-table__cell">';
      for (i = 0; i < sheetData.length; i++) {
        var quantity = data.feed.entry[i]['gsx$quantity']['$t'];
        if (quantity > 0) {
          var curtype = data.feed.entry[i]['gsx$type']['$t'];
          var variety = data.feed.entry[i]['gsx$variety']['$t'];
          var description = data.feed.entry[i]['gsx$description']['$t'];
          var plantingtips = data.feed.entry[i]['gsx$plantingtips']['$t'];
          if (!types.includes(curtype)) {
            types.push(curtype);
            //tables.push('<div class="mdc-data-table"><table class="mdc-data-table__table"><thead><tr class="mdc-data-table__header-row"><th class="mdc-data-table__header-cell">Variety</th><th class="mdc-data-table__header-cell">Availability</th><th class="mdc-data-table__header-cell">Description</th><th class="mdc-data-table__header-cell">Tips for Planting</th></tr></thead><tbody>');
            //tables.push('<div class="mdc-data-table"><table class="mdc-data-table__table"><thead><tr class="mdc-data-table__header-row"><th class="mdc-data-table__header-cell">Varieties of '+curtype+'</th></tr></thead><tbody>');
            tables.push('<div class="mdc-data-table"><table class="mdc-data-table__table"><tbody>');
          }
          typenumber=types.indexOf(curtype);
          //tables[typenumber] += ('<tr class="mdc-data-table__row">'+td+variety+'</td>'+td+quantity+'</td>'+td+description+'</td>'+td+plantingtips+'</td>'+'</tr>');
          tables[typenumber] += ('<tr class="mdc-data-table__row">'+td+'<h4>'+variety+'</h4>');
          if (description + plantingtips != ''){
            tables[typenumber] += ('<p>'+description+'</br>'+plantingtips+'</p>');	
          }
          tables[typenumber] += ('</td>'+'</tr>');
        }
      }
      for (i = 0; i < tables.length; i++){
        tables[i] += '</tbody></table></div>';
        curtype = types[i];
        document.getElementById('typeTabs').innerHTML += ('<button class="mdc-tab mdc-tab--active" id="'+curtype+'button" onclick="switchType(event, '+"'"+curtype+"'"+')">'+curtype+'</button>');
        document.getElementById('varietyTables').innerHTML += ('<div class="tabcontent" id='+curtype+'>'+tables[i]+'</div>');
      }
      document.getElementById(types[0]).style.display = "block";
      document.getElementById(types[0]+'button').className += " active";
    });
