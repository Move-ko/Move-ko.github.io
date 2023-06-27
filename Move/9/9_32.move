address 0x42 {
    module example {
        struct X { 
            f:u64
        }
        fun new_x():X {
            X{f:1}
        }
         //이 예제는 사용하지 않는 변수 및 할당에 대해 불평합니다.
        fun example(){
            let (x,_,z)= (0,1,3);
            let (x,y,f,g);

            (X{f},X{f:x})= (new_x(),new_x());
            assert!(f + x==2,42);

            (x,y,z,f,_,g)= (0,0,0,0,0,0);
        }
    }
}