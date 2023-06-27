module example::test {
    fun main(){
        {
            let x= 0;
            x+1;//값이 버려집니다
            x+2;//값이 버려집니다
            b"hello";//값이 버려집니다
        }

        {
        let x = 0;
         Coin { value: x }; // ERROR!
         //  ^^^^^^^^^^^^^^^^^ unused value without the `drop` ability
         x
         }

         // 둘다 동등
         { x = x + 1; 1 / x; }
         { x = x + 1; 1 / x; () }


         // 둘다 동등
         { }
         { () }


         let my_vector:vector<vector<u8>> = {
            let v = vector::empty();
            vector::push_back(&mut v,b"hello");
            vector::push_back(&mut v,b"goodbye");
         }
    }
    
}