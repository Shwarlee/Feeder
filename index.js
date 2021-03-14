    
    function alllink(){
      var regex = /https:\/\/www\.linkedin\.com\/in\//;
      var secregex = /https:\/\/www\.linkedin\.com\/in\/AC/;
      var fin = [];
      var secfin= [];
      var trouve;
      var arr = [], l = document.links;
      for(var i=0; i<l.length; i++) {
        arr.push(l[i].href);
        
      }
      
      function uniq_fast(a) {
          var seen = {};
          var out = [];
          var len = a.length;
          var j = 0;
          for(var i = 0; i < len; i++) {
               var item = a[i];
               if(seen[item] !== 1) {
                     seen[item] = 1;
                     out[j++] = item;
               }
          }
          return out;
      }
      
      arr = uniq_fast(arr);
      
      
      for(var i=0; i<arr.length;i++){
      var str = arr[i];
      
      var trouve = regex.test(str);
      

      if(trouve != false){
      fin.push(str);}
      
      
      }

      for(var i=0; i<fin.length;i++){
      var secstr = fin[i];
      
      var sectrouve = secregex.test(secstr);
      

      if(sectrouve != true){
      secfin.push(secstr);}
      
      
      }
      var arrayToString = JSON.stringify(Object.assign({}, secfin));  // convert array to string
      var myJSON = JSON.parse(arrayToString);
      return myJSON;
      
      }

      (function(console){

        console.save = function(data, filename){
    
            if(!data) {
                console.error('Console.save: No data')
                return;
            }
    
            if(!filename) filename = 'console.json'
    
            if(typeof data === "object"){
                data = JSON.stringify(data, undefined, 4)
            }
    
            var blob = new Blob([data], {type: 'text/json'}),
                e    = document.createEvent('MouseEvents'),
                a    = document.createElement('a')
    
            a.download = filename
            a.href = window.URL.createObjectURL(blob)
            a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
            e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
            a.dispatchEvent(e)
        }
    })(console)

    console.save(alllink());
    
