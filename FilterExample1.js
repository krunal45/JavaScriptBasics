const nums = [1,2,3,4]
const newNums = nums.filter( (num) => num > 2)
console.log(newNums);

const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
const dayStartingWithSLetter = days.filter( day => day.charAt(0) == 'S')
console.log(dayStartingWithSLetter);

const books = [
    {
        "title": "The Great Gatsby",
        "genre": "Fiction",
        "publish": 1925,
        "edition": "2nd"
    },
    {
        "title": "A Brief History of Time",
        "genre": "Science",
        "publish": 1960,
        "edition": "3rd"
    },
    {
        "title": "To Kill a Mockingbird",
        "genre": "Fiction",
        "publish": 1960,
        "edition": "1st"
    },
    {
        "title": "The Art of Computer Programming",
        "genre": "Technology",
        "publish": 1968,
        "edition": "2nd"
    }
]

//filtering 'fiction' books
// const fictionBooks = books.filter(book => book.genre === 'Fiction')
// console.log(fictionBooks);

// const booksPublishedAfter1950 = books.filter(book => book.publish > 1950)
// console.log(booksPublishedAfter1950);

// const secondEditionBooks = books.filter(book => book.edition === '2nd')
// console.log(secondEditionBooks);

const books3 = books.filter(book => book.genre ==='Science' && book.publish <=1960)
console.log(books3);