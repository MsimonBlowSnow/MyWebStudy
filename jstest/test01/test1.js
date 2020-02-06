
function newTable(){
    //获取行号
    var row = parseInt(document.getElementById("row").value) ;
    //获取列号
    var line = parseInt(document.getElementById("line").value);
    //获取列表
    var  table = document.getElementById("table01");
   //通过遍历动态创建列表行数
    for (var i = 0 ;i < row + 1;i ++){ 
        //创建一行
        var  tr = document.createElement('tr');
        //判断列表行数为0，创建表头
        if(i == 0&&line != 0){
             var  th = document.createElement('th');
            table.style.display = "table";
             tr.id = "tr" + i; 
            //添加第一行
             table.appendChild(tr);
             th.id = "th" + i;
             th.setAttribute("colspan",line);
            //追加表头
             tr.appendChild(th);
             th.append("自定义表格");
          }else{
                tr.id = "tr"+i;
                //追加非首行
                table.appendChild(tr);
                //偶数行为白色，奇数行为黑色
                if(i%2 == 0){
                    tr.style.backgroundColor = "white";
                }else{
                    tr.style.backgroundColor = "#ddd";             
                }
                //创建单元格，并追加到行号中。
                for (var j = 0 ; j < line; j ++){
                    var  td = document.createElement('td');
                    tr.appendChild(td);
                    td.append("td" + i + j);      
                } 
            }       
        }
    }