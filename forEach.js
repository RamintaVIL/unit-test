function forEach(items, callback) {
    for (const item of items) {
        callback(item);
    }
}

// const num = [1, 2, 3, 5, 8, 13];
// const multi = (x) => {
//     console.log(x * 3);
// }

// forEach(num, multi);

module.exports = forEach;