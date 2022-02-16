function diffBetweenTwoStrings(source, target) {
	/**
	@param source: string
	@param target: string
	@return: string[]
	*/


    //It works for 6 cases and fails for 2(total 8 cases).

    //The other case it fails for is:

    //source = "AABACC"
    //target = "BABCAC"

    // Expected => ["-A","-A","B","A","+B","C","+A","C"]
    // Actual =>   ["+B","A","-A","B","+C","A","C","-C"]
    //What am I missing?




	// your code goes here


 let output = [],
    result = getCompareMap(source, target);

  buildTheResult(result, source, target);

  console.log(result);

  constructOutput(source, target, result, output)

  return output;
}

function buildTheResult(result, source, target) {
  for (let row = 0; row < target.length; row++) {
    for (let col = 0; col < source.length; col++) {
      if (source[col] === target[row]) {
        result[row + 1][col + 1] = result[row][col];
      } else {
        result[row + 1][col + 1] = Math.min(result[row + 1][col], result[row][col + 1]) + 1;
      }
    }
  }
}

function constructOutput(source, target, result, output) {
  let rows = target.length,
    cols = source.length;

  while (cols > 0 && rows > 0) {
    // console.log(`source: ${source[cols-1]} target: ${target[rows-1]} result col+1: ${result[rows][cols]} row+1: ${result[rows][cols]}`);
    if ((source[cols - 1] === target[rows - 1]) && ((result[rows - 1][cols - 1] <= result[rows - 1][cols]) && (result[rows - 1][cols - 1] <= result[rows][cols - 1]))) {
      //&& (result[rows - 1][cols - 1] <= result[rows - 1][cols])) {
      output.unshift(source[cols - 1]);
      // console.log("diagonal up with " + source[cols - 1]);
      rows--;
      cols--;
    } else if (result[rows - 1][cols] <= result[rows][cols - 1]) {
      output.unshift("+" + target[rows - 1]);
      // console.log("moving up with " + target[rows - 1]);
      rows--;
    } else if (result[rows][cols - 1] <= result[rows - 1][cols]) {
      output.unshift("-" + source[cols - 1]);
      // console.log("moving left with " + source[cols - 1]);
      cols--;
    }
  }
while (rows > 0) {
    if (result[rows - 1][cols] <= result[rows][cols]) {
      output.unshift("+" + target[rows - 1]);
    } else {
      output.unshift(target[rows - 1]);
    }
    rows--;
  }

  while (cols > 0) {
    if (result[rows][cols - 1] <= result[rows][cols]) {
      output.unshift("-" + source[cols - 1]);
    } else {
      output.unshift(source[cols - 1]);
    }
    cols--;
  }
}
function getCompareMap(source, target) {
  let i, compareMap = [...Array(target.length + 1)].map(x => Array(source.length + 1).fill(0));

  for (i = 0; i <= target.length; i++) {
    compareMap[i][0] = i;
  }
  for (i = 0; i <= source.length; i++) {
    compareMap[0][i] = i;
  }

  return compareMap;
}
