//sum of differences === differences of sums in this case, 
//so friendsArr[i].scoreSum are the sums from which I take the differences
var friendsArr = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ],
    "scoresSum": 32
},
{
    "name": "John",
    "photo": "https://www.pexels.com/photo/adult-beard-boy-casual-220453/",
    "scores": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2
    ],
    "scoresSum": 11
},
{
    //example
    "name": "George",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2
    ],
    "scoresSum": 20
},
{
    //example
        "name":"Fred",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ],
        "scoresSum": 50
      },
      {
        //example
            "name":"Henry",
            "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores":[
                4,
                4,
                4,
                4,
                4,
                4,
                4,
                4,
                4,
                4
              ],
            "scoresSum": 40
          },
          {
            "name": "Frank",
            "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores": [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
            ],
            "scoresSum": 10
        }

];
module.exports = friendsArr;