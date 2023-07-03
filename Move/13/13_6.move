module example::test {
    fun pick(indexes:vector:<u64>,
    v1:&vector<address>,
    v2:&vector<address>
    ):vector<address>{
        let len1= vector::length(v1);
        let len2= vector::length(v2);
        let result= vector::empty();
        while (!vector::is_empty(&indexes)){
            let index = vector::pop_back(&mut indexes);
            let chosen_vector= 
               if (index <len1)v1
               else if (index <len2 )v2 
            else continue;//continue는 &vector<address> 타입입니다

        vector::push_back(&mut result,*vector::borrow(chosen_vector,index))
        };
        result


    }
}