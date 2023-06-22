module example::test{
     struct Banana{
        ripe:bool
     }

    fun main(){
       let a = vector[];
       let b = vector<bool>[];
       let c = vector[1, 4, 2, 3];
       let d = [1, 3, 4, 2];
       let e = vector[1, true, false, 45];
       let f = vector<bool>[true, false, false];
       let g = b"Hello!";
       let h = b"Hi, dev!\n";
       let i = x"124212AFED";
       let j = x"12";
       let k = x"5";
       let l = x"5abh";
       let m = s"dog cat tree rug";
       let n = vector<Banana>[Banana {true}, Banana {true}, Banana {false}]
    }
}