let dataOld = {
    Sophia: {
        id: 33,
        study: [
            {
                primary:
                    [
                        { school_name: "ABC primary school" },
                        { location: "Peters burg" }
                    ]
            },
            {
                secondary:
                    [
                        {
                            school_name: "ABC secondary school"

                        },

                        { location: "St Lorence" }
                    ]
            },
        ]
    }
}
// console.log(data.Sophia.study[1].secondary[1].location)

let activities = {
    activity1: [
        {
            name: "listen on spotify",

            song_list: {

                song_1: "abc",
                song_2: "bcd"
            },
            id: 1
        },
        {
            name: "listen music through bot",

            song_list: {
                song_1: "wxy",
                song_2: "xyz"
            },
            id: 2
        }
    ]
}
// console.log(activities.activity1[1].song_list.song_2)

let students = {
    2222: {

        name: "Jack",
        section: "C",
        class: "IX",
        address: {

            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }
    },
    3333: {

        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }

    }
}
// console.log(students[3333].name)

let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,
    additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming ercoddogosti"],
        moreDetails: {
            favoriteBasketballTeam: "XYZ",
            isYoungest: true,
            hometown: {
                city: "ABC",
                state: "VW",
            },
            countriesLivedIn: ["Bangladesh", "New York"]
        }
    }
}
// console.log(instructor.additionalData.books[1])
// console.log(instructor.additionalData. moreDetails.hometown.state)

let data = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}
// console.log(data.data[0].bookDetails.name)
console.log(data.data[1].bookCategory)