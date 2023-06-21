module example::test{
    fun example(){
        let a1: address = @0x1; // 0x00000000000000000000000000000001의 약식표현
        let a2: address = @0x42; //0x00000000000000000000000000000042의 약식표현
        let a3: address = @0xDEADBEEF; // 0x000000000000000000000000DEADBEEF 의 약식표현
        let a4: address = @0x0000000000000000000000000000000A;//0xA
        let a5: address = @std; //std라는 이름의 주소에 있는 값을 a5에 할당합니다.
        let a6: address = @66;
        let a7: address = @0x42;

module 66::some_module {   //표현식 컨텍스트가 아니기 때문에 @ 기호가 필요하지 않습니다.
    use 0x1::other_module; //표현식 컨텍스트가 아니기 때문에 @ 기호가 필요하지 않습니다.
    use std::vector;       //다른 모듈을 사용할 때, 네임드 어드레스를 네임스페이스 항목으로 사용할 수 있습니다.
    ...
}

module std::other_module {  //네임드 어드레스를 네임스페이스 항목으로 사용하여 모듈을 선언할 수 있습니다.
    ...
}


    }
}41,400000