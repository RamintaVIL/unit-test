function distinctAverages(nums) {
    nums.sort((a, b) => a - b);
    const averages = new Set();
    for (let i = 0; i < nums.length / 2; i++) {
        const min = nums[i];
        const max = nums[nums.length - 1 - i];
        const average = (min + max) / 2;
        averages.add(average);
    }
    return averages.size;
}

console.log(distinctAverages([1, 2, 3, 4]))
console.log(distinctAverages([2, 4, 6, 8]))
console.log(distinctAverages([-2, 4, 6, 300]))
console.log(distinctAverages([-2, -4, -6, 300]))