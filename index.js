/* question 3 */
let artSubject = "Government, Economics, Literature, History";
let scienceSubjects = "Physics, chemistry, Biology, Technical drawing"
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography"
let generalSubjects = "English, Mathematics";

let department

if (department == "art") {
    return `${artSubject} ${generalSubjects}`
}else if (department == "science") {
    return `${scienceSubjects} ${generalSubjects}`
}else if (department == "socialScience") {
    return `${socialScienceSubjects} ${generalSubjects}`
}else {
    return `${generalSubjects}`
}