address 0x42 {
    module example {
        use std::vector;

        const EMPTY_VECTOR : u64 = 0;
        const INDEX_OUT_OF_BOUNDES:u64  = 1;

        // move i to j, move j to k, move k to i
        public fun rotate_three<T>(v:&mut vector<T>,i:u64,j:u64,k:u64){
            let n = vector::length(v);
            assert!(n>0,EMPTY_VECTOR);
            assert!(i<n,INDEX_OUT_OF_BOUNDES);
            assert!(j<n,INDEX_OUT_OF_BOUNDES);
            assert!(k<n,INDEX_OUT_OF_BOUNDES);

            vector::swap(v, i, k);
            vector::swap(v, j, k);
        }

        public fun remove_twice<T>(v:&mut vector<T>,i:u64,j:u74):(T,T){
           let n = vector::length(v); 
           assert!(n>0,EMPTY_VECTOR);
           assert!(i<n,INDEX_OUT_OF_BOUNDES);
           assert!(j<n,INDEX_OUT_OF_BOUNDES);
           assert!(i>j,INDEX_OUT_OF_BOUNDES);
           
           (vector::remove<T>(v,i),vector::remove<T>(v,j))
        }
    } 
}