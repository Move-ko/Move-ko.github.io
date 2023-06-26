module example ::test {
   fun main(){
    let x:&u64= &0;
    let y:&mut u64= &mut 1;
   
    // (&u64, &mut u64)는 (&u64, &u64)의 하위 유형입니다.
    //&mut u64는 &u64의 하위 유형이므로
    let (a, b): (&u64, &u64) = (x, y);
     

    // (&mut u64, &mut u64)는 (&u64, &u64)의 하위 유형입니다.
    // &mut u64는 &u64의 하위 유형이므로 
    let (c, d): (&u64, &u64) = (y, y);
    

     // 오류! (&u64, &mut u64)는 (&mut u64, &mut u64)의 하위 유형이 아닙니다.
    // &u64는 &mut u64의 하위 유형이 아니므로

    let (e, f): (&mut u64, &mut u64) = (x, y);


    }
}