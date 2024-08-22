function forEach(items, callback) {
    for (const item of items) {
        callback(item);
    }
}

// function add42(x) {
//     return 42 + x
// }
// module.exports = add42


// const num = [1, 2, 3, 5, 8, 13];
// const multi = (x) => {
//     console.log(x * 3);
// }

// forEach(num, multi);

module.exports = forEach;

