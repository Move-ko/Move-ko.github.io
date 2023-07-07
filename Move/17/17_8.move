module example::test {
    using std::vector;

    fun foo(){
       // let v = vector::new();
       //                   ^ 컴파일러가 원소의 형식을 결정할 수 없습니다.
          let v = vector::new<u64>();
          //                ^~~~~ 수동으로 주석을 추가해야 합니다.
    }
}