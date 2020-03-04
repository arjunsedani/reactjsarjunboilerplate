export function streamToPromise(stream) {
  return new Promise((resolve, reject) => {
    let res;
    stream.subscribe(
      result => {
        res = result;
      },
      err => reject(err),
      () => resolve(res)
    );
  });
}

export function move(array, old_index, new_index) {
  // Copy incoming array, we want to return a new one
  let arr = [...array];

  // if old index is negative, assume we are looking backward in array (see https://h3manth.com/new/blog/2013/negative-array-index-in-javascript/)
  while (old_index < 0) {
    old_index += arr.length;
  }

  // if new index is negative, assume we are looking backward in array (see https://h3manth.com/new/blog/2013/negative-array-index-in-javascript/)
  while (new_index < 0) {
    new_index += arr.length;
  }

  // if new index is larger than array length, populate missing elements with undefined values
  if (new_index >= arr.length) {
    var k = new_index - arr.length;
    while (k-- + 1) {
      arr.push(undefined);
    }
  }

  // Insert at new_index the old_index value that we deleted (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
  arr.splice(
    new_index /* insert value at new_index */,
    0,
    arr.splice(old_index, 1)[0] /* delete value at old_index and return it */
  );
  return arr;
}
