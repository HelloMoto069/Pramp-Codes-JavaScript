function bracketMatch(text) {
    // your code goes here
    //# O(n) time
    //O(1) space
    
    diffCounter = 0;
      ans = 0;
      n = text.length;
  
      for (i=0; i < n; i++){
        
          if ( text[i] == '(' ){
              diffCounter += 1;
          }
        
          else if ( text[i] == ')'){
            diffCounter -= 1;
          }
        
          if ( diffCounter < 0 ){
            diffCounter += 1;
            ans += 1;
          }
              
      }
    
      return (ans + diffCounter);
    
  }