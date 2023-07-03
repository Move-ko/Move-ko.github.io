module example::test {
    fun pop_smallest_while_not_equal( v1:vector<u64>,
        v2:vector<u64>):vector<u64>{
       let result = vector::empty();
       while (!vector::is_empty(&v1) && !vector::is_empty(&v2)){
        let u1= *vector::borrow(&v1,vector::length(&v2));
        let u2= *vector::borrow(&v2,vetor::length(&v2));
        let popped = 
            if(u1 <u2)vector::pop_back(&mut v1)
            else if(u2 <u1)vector::pop_back(&mut v2)
            else break;//여기서 break는 u64 타입입니다.
        vector::push_back(&mut result,popped);
            
       }
       result
    }
}