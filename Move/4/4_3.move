module 42::some_module { //o
    use std::vector; //o
    
    const ADDR1:address= 0x12345; //x
}


module @0x1337::some_other_module {//x
    use 0x1::vector;//o

    const ADDR1:address= @2021;//o
    const ADDR2:address= @overmind;//o
}

module overmind::yet_another_module {//o
    use 1::vector;//o
    

    const ADDR1:address =std;//x
    const ADDR2:address= 0x28;//x

}