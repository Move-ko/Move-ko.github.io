module example::test {
  fun main(){

    let x= 7;
    let y:&u64= &x;
    let z:&&u64= &y;//컴파일 되지 않습니다.
  }
}