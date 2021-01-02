function Transformerr(Rows){
    var rows = Rows;
    var html = '<table id="table">';
    html += '<thead class="thead" id="thead"><tr id="tableH" class="table100-head">';

    var num = 0;
    for( var j in rows[0] ) {
        html += '<th id="Th'+num+'" >' + j + '</th>';
        num+=1;
    }
    html += '</tr></thead><tbody class="tbody" id="tbody">';

    for( var i = 0; i < rows.length; i++) {
      html += `<tr id="Tr${i}">`;
      var TF = false;
      for( var j in rows[i] ) {
        if(rows[i][j].kynde == 'number'){
          html += '<td><input maxlength="2" type="number" value="' + rows[i][j].value + '" min="1" max="99"></td>';
        } else if (rows[i][j].kynde == 'text'){
          html += '<td><input value="' + rows[i][j].value + '" ></td>';
        }
        if(rows[i][j] == true){
            TF = true;
            //html+='<td><input type="checkbox" value="Done" checked></td>';
        } else if(rows[i][j] == false){
            //html+='<td><input type="checkbox" value="Done"></td>';
        }
      }
      if(TF == true){
        html+='<td><input type="checkbox" value="Done" checked></td>';
      } else {
        html+='<td><input type="checkbox" value="Done"></td>';
      }
      html += '</tr>';
    }

    html += '</tbody></table>';
    document.getElementById('tableParent').innerHTML = html;
    console.log('transformerr Donnnne')
}