
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}


const wrapAdjective = function(wrap="*") {
    return function(adj) {
        return `You are ${wrap}${adj}${wrap}!`
    }
}