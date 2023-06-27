address 0x42 {
    module example {
        struct S {
            s:u64,
            g:u64
        }
        fun annotated(){
            let u: u8 = 0;
            let b: vector<u8>= b"hello";
            let a:address = @0x0;
            let (x,y):(&u4,&mut u64)= (&0, &mut 1);
            let S {f,g:f2}:S = S {f:0,g:1};
        }
    }
}