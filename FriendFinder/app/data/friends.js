//sum of differences === differences of sums in this case, 
//so friendsArr[i].scoreSum are the sums from which I take the differences
var friendsArr = [{
    "name": "Larry",
    "photo": "https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
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
    "photo": "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
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
    "photo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
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
        "photo":"https://images.unsplash.com/photo-1489435652509-6e995b871f24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1065&q=80",
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
            "photo":"https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
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
            "photo": "https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
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