/*
 *
 ***
 *****
 *******
 ***
 *****
 *******
 *********
 *****
 *******
 *********
 ***********
 *****
 *****
 *****
 */

/*
* -> space = 6
*** -> space = 5

*/

// k = 聖誕樹高度
// j = 一層聖誕數有幾排
function christmasTree(height) {
  for (let k = 1; k <= height; k++) {
    for (let j = 1; j <= 4; j++) {
      let tree = "";
      for (let i = 1; i <= j + k + 5; i++) {
        if (k === height) {
          if (i >= height && i <= 9) {
            tree = tree + "*";
          } else {
            tree = tree + " ";
          }
        } else {
          if (i >= 9 - j - k) {
            tree = tree + "*";
          } else {
            tree = tree + " ";
          }
        }
      }

      console.log(tree);
    }
  }
}

christmasTree(5, 4);
