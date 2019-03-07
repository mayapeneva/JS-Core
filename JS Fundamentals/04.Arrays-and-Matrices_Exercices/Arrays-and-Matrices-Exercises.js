// 01. Print Array with Given Delimiter 
function delimiter(arr) {
  let delimiter = arr.pop();
  console.log(arr.join(delimiter));
}

// 02. Print every N-th Element from an Array 
function nthElement(arr) {
  let step = Number(arr.pop());
  for (let i = 0; i < arr.length; i+=step) {
    console.log(arr[i]);
  }
}

function nthElement2(arr) {
  let step = Number(arr.pop());
  let result = arr.reduce((acc, elem, index) => {
    if (index % step === 0) {
      acc.push(elem);
    }

    return acc;
  }, []);
}

// 03. Add and Remove Elements 
function addAndRemove(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];
    if (command === "add") {
      result.push(i + 1);
    } else if (command === "remove") {
      if (result.length > 0) {
        result.pop();
      }
    }
  }

  if (result.length > 0) {
    console.log(result.join("\n"));
  } else {
    console.log("Empty");
  }
}

  // 04. Rotate Array 
function rotate(arr) {
  let rotations = arr.pop();
  let count = rotations % arr.length;
  for (let i = 0; i < count; i++) {
    arr.unshift(arr.pop());
  }

  console.log(arr.join(" "));
}

  // 05. Extract Increasing Subsequence from Array 
function extractSubsequence(arr) {
  let previousNumber = Number(arr.shift());
  for (let i = 0; i < arr.length; i++) {
    let currentNumber = arr[i];
    if (currentNumber >= previousNumber) {
      console.log(currentNumber);
      previousNumber = currentNumber;
    }      
  }
}

// 06. Sort Array 
function sort(arr) {
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(arr.join("\n"));
} 

// 07. Magic Matrices 
function magic(matrix) {
  let sum = 0;
  for (let row = 0; row < matrix.length; row++) {
    let rowSum = matrix[row].reduce((total, num) => total + num);

    if (row === 0) {
      sum = rowSum;
    } else if (sum !== rowSum) {
      return false;
    }
  }

  for (let c = 0; c < matrix[0].length; c++) {
    let colSum = 0;
    for (let r = 0; r < matrix.length; r++) {
      colSum += matrix[r][c];
    }

    if (sum !== colSum) {
      return false;
    }
  }

  return true;
}

// 08. Spiral Matrix
function spiralMatrix(row, col){
  let matrix = [];
  for (let index = 0; index < row; index++) {
    matrix[index] = [];
    for (let c = 0; c < col; c++) {
      matrix[index][c] = 0;
    }
  }
  
  let number = 1;
  let turns = Math.ceil(row / 2);
  for (let i = 0; i < turns; i++) {
    let lastCol = col - i - 1;
    for (let j = i; j <= lastCol; j++) {
      matrix[i][j] = number++;   
    }
    
    let lastRow = row - i - 1;
    for (let k = i + 1; k <= lastRow; k++) {
      matrix[k][lastCol] = number++;
    }

    for (let l = lastCol - 1; l >= i; l--) {
      matrix[lastRow][l] = number++;
    }

    for (let m = lastRow - 1; m >= i + 1; m--) {
      matrix[m][i] = number++;
    }    
  }

  for (let r = 0; r < row; r++) {
    console.log(matrix[r].join(" "));
  }
}

// 09. Diagonal Attack
function attack(arr) {
  let matrix = [];
  for (let r = 0; r < arr.length; r++) {
    let tokens = arr[r].split(" ").map(Number);
    matrix[r] = [];
    for (let c = 0; c < tokens.length; c++) {
      matrix[r][c] = tokens[c];
    }
  }

  let firstDiagonalSum = 0;
  let secondDiagonalSum = 0;
  let rows = matrix.length;
  for (let i = 0; i < matrix.length; i++) {
    firstDiagonalSum += matrix[i][i];
    secondDiagonalSum += matrix[i][--rows];
  }

  if (firstDiagonalSum == secondDiagonalSum) {
    for (let k = 0; k < matrix.length; k++) {
      for (let l = 0; l < matrix[k].length; l++) {
        if (k != l && k + l != matrix.length - 1) {
          matrix[k][l] = firstDiagonalSum;
        }
      }
    }
  }

  for (let row of matrix) {
    console.log(row.join(" "));
  }
}

// 10. Orbit
function orbit([rows, cols, row, col]) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = 0;   
    }
  }

  matrix[row][col] = 1;
  for (let k = 1; k < rows; k++) {
    if (row - k >= 0) {
      for (let l = col - k; l <= col + k; l++) {
        if (l >= 0 && l < cols) {
          matrix[row - k][l] = k + 1;
        }
      }
    }

    if (row + k < rows) {
      for (let m = col - k; m <= col + k; m++) {
        if (m >= 0 && m < cols) {
          matrix[row + k][m] = k + 1;
        }
      }
    }

    if (col - k >= 0) {
      for (let n = row - k + 1; n <= row + k - 1 ; n++) {
        if (n >= 0 && n < rows) {
          matrix[n][col - k] = k + 1; 
        }    
      }
    }

    if (col + k < cols) {
      for (let n = row - k + 1; n <= row + k - 1 ; n++) {
        if (n >= 0 && n < rows) {
          matrix[n][col + k] = k + 1; 
        }    
      }
    }
  }

  for (let p = 0; p < matrix.length; p++) {
    console.log(matrix[p].join(" "));
  }
}