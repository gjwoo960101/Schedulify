
// 생성자 함수
function User (name,age) {
    this.name = name;
    this.aage = age;
    this.sayname = function (){
        console.log("내이름은 :",this.name)
    }
}

let testUser = new User('lee',20);

testUser.sayname();