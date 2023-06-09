function solution(num_list) {
//    짝수 홀수 넣어줄 변수 선언
    let 짝수 = 0;
    let 홀수 = 0;
    
//     배열 메서드 중 하나인forEach를 활용해서 배열안에 값들을 돌아가면서 x에 담아서 짝수면 짝수변수에 1증가, 아니면 홀수 변수에 1 증가하는 삼항연산자로 표현
    num_list.forEach(x =>{
        (x % 2 === 0) ? 짝수++: 홀수++;
    })
 
//     직접 짝수, 홀수를 배열에 넣어서 리턴
    return [짝수, 홀수];
}