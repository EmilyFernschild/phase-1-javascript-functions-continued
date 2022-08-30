
 function saturdayFun(activitys = "roller-skate"){
    return(`This Saturday, I want to ${activitys}!`);
 }

 const mondayWork = function (location = "go to the office"){
    return (`This Monday, I will ${location}.`)
 }

 function wrapAdjective(highlight = "*"){
    //const encouraging = wrapAdjective(highlight)(adjective)
    return function (adjective = 'special') {
        return (`You are ${highlight}${adjective}${highlight}!`)
    }
 }