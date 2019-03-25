function grade(examPoints, homeworkCompleted, maxHomeworkPoints) {
    let maxTotalPoints = 100;
    let maxExamPoints = 400;

    let maxExamPercentige = 90;
    let maxHomeworkPercentige = 10;

    let studentExamPoints = (examPoints * maxExamPercentige) / maxExamPoints;
    if (examPoints === maxExamPoints) {
        console.log("6.00");        
    } else {
        let studentHomeworkPoints = (homeworkCompleted * maxHomeworkPercentige) / maxHomeworkPoints;
        let studentTotalPoints = studentExamPoints + studentHomeworkPoints;
        let studentGrade = 3 + 2 *(studentTotalPoints - maxTotalPoints/5) / (maxTotalPoints / 2);
        if (studentGrade < 3) {
            studentGrade = 2;
        } else if (studentGrade > 6){
            studentGrade = 6;
        }
        
        console.log(studentGrade.toFixed(2));   
    }     
}