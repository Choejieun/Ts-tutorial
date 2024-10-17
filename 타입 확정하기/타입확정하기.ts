function 내함수(x:number|string){
    let array : number[]=[];
    if(typeof x === 'number')/*타입이 넘버면 실행해줘*/{
        array[0] = x;
    }
    array[0] = x as number; //assertion 문법(타입 덮어쓰기)
}
내함수(123);

// (숙제1) 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다. 
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
// 모르는 부분은 구글검색해도 봐드림 
function 숙제1(x:(string|number)[]){
    for (let index = 0; index < x.length; index++) {
        if(typeof x[index] === 'string'){
            x[index] = index+1;
        }
    }
    return console.log(x)
}
숙제1([1,'2',3,'4']);

//(숙제2) 다음과 같은 함수를 만들어보십시오.
// '철수쌤' 같은 object 자료를 파라미터로 집어넣으면 
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// 그리고 타입지정도 엄격하게 해보도록 합시다. 
type 선생님들 = {
    subject : string | string[],
};
let 철수쌤:선생님들 = { subject : 'math' }
let 영희쌤:선생님들 = { subject : ['science', 'english'] }
let 민수쌤:선생님들 = { subject : ['science', 'art', 'korean'] }
// let 민수2쌤:선생님들 = { hello : 'hi' }
function 숙제2(x){
    if(typeof x.subject === 'object'){
        return x.subject[x.subject.length-1];
    }else{
        return x.subject;
    }
}
console.log(숙제2(민수쌤));