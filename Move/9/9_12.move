let _v1 = vector::empty(); // ERROR!
//        ^^^^^^^^^^^^^^^ Could not infer this type. Try adding an annotation
let v2: vector<u64> = vector::empty(); // no error