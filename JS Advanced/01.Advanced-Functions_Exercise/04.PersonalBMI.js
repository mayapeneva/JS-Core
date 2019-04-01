function createPerson(name, age, weight, height) {
    let heightInM = +height / 100;
    let BMI = Math.round(+weight / (heightInM * heightInM));
    let person = {
        name,
        "personalInfo": {
            age,
            weight,
            height
        },
        BMI,
        "status": getStatus(BMI)       
    };

    if (person.status === "obese") {
        person["recommendation"] = "admission required";
    }

    function getStatus(BMI) {
        if (BMI < 18.5) {
            return "underweight";
        } else if (BMI < 25){
            return "normal";
        } else if (BMI < 30) {
            return "overweight";
        } else {
            return "obese";
        }
    }

    return person;
}