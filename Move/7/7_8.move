address 0x42 {
    module example{
        fun read_and_assign(store:&mut u64,new_value:&u64){
            *store= *new_value
        }

        fun subtype_examples(){
            let x:&u64 = &0;
            let y:&mut u64= &mut 1;

            x= &mut 1;//유효한
            y= &2 //유효하지 않은

            read_and_assign(y,x);//유효한
            read_and_assign(x,y);//유효하지 않은
        }  
    }
}