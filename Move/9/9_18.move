address 0x42 {
    module example {
        struct X { 
            f: u64
        }
        struct Y {
            x1:X,
            x2:X
        }

        fun example(){
            let Y {x1:X {f},x2}= Y {x1:new_x(),x2:new_x()};
            assert!(f + x2.f == 2, 42);

            let Y {x1:X {f:f1},x2: X {f:f2}}= Y {x1:new_x(),x2:new_x()};

            assert!(f1 + f2 ==2 ,42);
        }
    }
}