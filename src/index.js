/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for(var i = 0; i < preferences.length; i++){
    index = i - 1; // получаем "реальный" индекс в массиве
    if(preferences[index] == i){
      continue; // пропускаем элементы указывающие сами на себя
    }
    middle = preferences[index]; // промежуточный элемент
    last = preferences[middle - 1];
    if(i == preferences[last - 1]){
      count += 1;
    }
  }
  return Math.floor((count + 1) / 3);
};