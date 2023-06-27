address 0x42 {
    module example {
        struct X {
            f:u64
        }
        struct Y {
            x1:X,
            x2:X
        }

        fun new_x():X{
            X {
                f:1
            }
        }

        fun example(){
            let y= Y {x1:new_x(),x2:new_x()};

            let Y{x1:X{f},x2}= &y;
            assert!(*f + x2.f ==2,42);

            let Y{x1:X{f:f1},x2:X{f:f2}}= &mut y;
            *f1=*f1+1;
            *f2=*f2+1;
            assert!(*f1+*f2==4,42);
        }
    }
}