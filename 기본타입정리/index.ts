//Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다. 
//물론 타입도 알아서 지정해보십시오. 이건 쉬우니 답은 없습니다.
let nameform최지은 :string ='최지은';
let age :number = 25;
let birth :string ='태평동';

//Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
//object 안엔 노래 제목과 가수이름이 들어가면 됩니다.
//근데 제목과 가수는 문자만 들어올 수 있어야합니다. 
type Sing = {
    [key:string] :string
};
let likeSong :Sing = {Singer : 'stinq', title : 'Englishman In New York'}


//Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
// let project = {
//     member : ['kim', 'park'],
//     days : 30,
//     started : true,
//   }

let project :{
    member :string[], 
    days :number, 
    started :boolean
} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}