var 어레이: (number|string)[] = [1,'2',3]
var 오브젝트: {data : number|string} = { data : '123' }

//(숙제1) 다음 변수 4개에 타입을 지정해봅시다.
//(조건) age 변수엔 undefined 말고 숫자도 들어올 수 있습니다. 
let user:string = 'kim';
let age:undefined|Number = undefined;
let married:boolean = false; 
let 철수:(string|Number|boolean|undefined)[] = [user, age, married];

//(숙제2) 학교라는 변수에 타입지정해보십시오.
//에러안나게 학교라는 변수에 타입좀 지정해줍시다. 
let 학교:{ 
    score:(number|boolean)[], 
    teacher:string ,
    friend: string | string[]
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]