var student = {
    name: "Viktor",
    age: 18,
    course: 0,
    isStudy: true,
    helpCount: 0,

    exam: function () {
        if (this.isStudy == false) {
            return "You are not student"
        } else {
            if (this.course < 4) {
                this.course = this.course + 1;
                this.age = this.age + 1;
                return this.name + " you have successfully passed the exam, you are student " + this.course + " course";
            } else {
                return "Go away!"
            }
        }
    },

    deduction: function () {
        this.isStudy = false;
        if (this.age < 27) {
            this.age = this.age + 1;
            return this.name + " you kick out of the university, go to the army";
        } else {
            return this.name + " you kick out of the university, go to work";
        }
    },

    helpAdmin: function () {
        this.helpCount = this.helpCount + 1;
        if (this.isStudy == false) {

            if (this.helpCount > 5) {
                this.helpCount = 0;
                this.isStudy = true;
                return "You are student again";
            } else {
                return "Thank you last: " + (5 - this.helpCount);
            }

        } else {
            this.course = this.course + 1;
            this.age = this.age + 1;
            return "Thank you " + this.name + " you are student " + this.course + " course";
        }
    },

    diploma: function () {
        if (this.isStudy == true && this.course == 4) {
            return this.name + " you have to pass a diploma";
        } else if (this.isStudy == false) {
            return "You are not student";
        } else {
            return "You are ready for diploma";
        }
    },

    inform: function () {
        var result = "Age: " + this.age;
        if (this.isStudy == true) {
            result = result + "; student";
        } else {
            result = result + "; not student";
        }
        result = result + "; help admin: " + this.helpCount;
        result = result + "; course: " + this.course;
        return result;
    }
};

//сдал первый экзамен
student.exam();
console.log(student.inform());
//помог деканату
student.helpAdmin();
console.log(student.inform());
//отчислен
student.deduction();
console.log(student.inform());
//помог деканату Х5
student.helpAdmin();
student.helpAdmin();
student.helpAdmin();
student.helpAdmin();
student.helpAdmin();
console.log(student.inform());
student.exam();
console.log(student.inform());
student.helpAdmin();
console.log(student.inform());
console.log(student.diploma());
console.log(student.inform());