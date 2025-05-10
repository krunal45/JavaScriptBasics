const nums = [1,2,3,4]
const numsAddBy10 = nums.map(num => {return num + 10}) // way 1
console.log(numsAddBy10);
const numsAddBy1 = nums.map(num => num + 1) // way 2
console.log(numsAddBy1);

//chaining
const nums2 = nums.map(num => num + 5).map(num => num - 1).filter(num => num % 2 == 0)
console.log(nums2);

let days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
days = days.map(day=>day.concat('day')).filter(day=>day == 'Sunday')
console.log(days);