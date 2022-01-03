// const d1 = new Date("2015");
// const d2 = new Date("2015-03");
// const d3 = new Date("2015-03-25");

// console.log('d2 - d1', d2 - d1);
// console.log('d3 - d2', d3 - d2);
// console.log('d3 - d1', d3 - d1);

const items = [{
        "volumeInfo": {
            "authors": ["AAA", "BBB", "CCC"],
            "publishedDate": "2015"
        }
    },
    {
        "volumeInfo": {
            "authors": ["AAA"],
            "publishedDate": "2015-03"
        }
    },
    {
        "volumeInfo": {
            "authors": ["BBB"],
            "publishedDate": "2015"
        }
    },
    {
        "volumeInfo": {
            "authors": ["AAA"],
            "publishedDate": ""
        }
    },
    {
        "volumeInfo": {
            "publishedDate": "2014-01-01"
        }
    },
    {
        "volumeInfo": {
            "authors": []
        }
    }

]

let earliestDate = "";
let mostRecentDate = "";

for (let item of items) {
    let publishedDate = item.volumeInfo.publishedDate;
    if (publishedDate && publishedDate !== "") {
        let date = new Date(publishedDate);
        // setting earliest date.
        if (earliestDate !== "") {
            if (date < earliestDate) {
                earliestDate = date;
            }
        } else {
            earliestDate = date;
        }

        // setting most recent date.
        if (mostRecentDate !== "") {
            if (date > mostRecentDate) {
                mostRecentDate = date;
            }
        } else {
            mostRecentDate = date;
        }

    }
}
console.log(earliestDate.toISOString().slice(0, 10))
console.log(mostRecentDate.toISOString().slice(0, 10))

// let authorCounter = new Map();
// let maxAuthor = "";
// let maxCount = 0;

// for (let item of items) {

//     let authorsArr = item.volumeInfo.authors;
//     if (authorsArr && authorsArr.length !== 0) {
//         for (let author of authorsArr) {
//             if (authorCounter.has(author)) {
//                 authorCounter.set(author, authorCounter.get(author) + 1);
//             } else {
//                 authorCounter.set(author, 1);
//             }
//             if (authorCounter.get(author) > maxCount) {
//                 maxAuthor = author;
//             }
//         }
//     }
// }
// console.log(authorCounter.entries())
// console.log(maxAuthor)