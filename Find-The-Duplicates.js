function findDuplicates(arr1, arr2) {
  
  duplicates = []
   i = 0
   j = 0

   while (i < arr1.length && j < arr2.length) {
      if (arr1[i] == arr2[j]){
         duplicates.push(arr1[i])
         i = i + 1
         j = j + 1
      }
      else if (arr1[i] < arr2[j]){
         i = i + 1
      }
      else{
         j = j + 1
      }
   }
   return duplicates
}