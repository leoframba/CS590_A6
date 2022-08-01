import path from 'path';
const __dirname = path.resolve();

export const home = (req, res) => {
    res.sendFile(__dirname + "../pages/home.html")
}

export const getTodayDate = (req, res) => {
    var dateObj = new Date();
    var month = dateObj.getUTCFullYear() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var newDate = day + "/" + month + "/" + year;

    res.json({today: newDate});
}

export const getMonthsName = (req, res) => {
    res.json({
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    });
}

export const getPeople = (req, res) => {
    res.json([
        {
            FirstName: 'Yann',
            LastName: 'Mulonda',
            title: 'Software Engineer',
            LinkedIn: 'https://www.linkedin.com/in/yannmjl/'
        },
        {
            FirstName: 'Bernard',
            LastName: 'Ng',
            title: 'Software Developer',
            LinkedIn: 'https://www.linkedin.com/in/bernard-ngandu/'
        },
        {
            FirstName: 'Clerc',
            LastName: 'Kapema',
            title: 'Web Developer',
            LinkedIn: 'https://www.linkedin.com/in/clerc-ngonga-b1253b174/'
        },
        {
            FirstName: 'Gloire',
            LastName: 'Kafwalubi',
            title: 'Web Developer',
            LinkedIn: 'https://www.linkedin.com/in/gloire-kafwalubi-3152871a0/'
        }
    ]);
}
