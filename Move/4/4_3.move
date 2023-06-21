module 42::some_module {
    use std::vector;

    const ADDR1:address= 0x12345;
}


module @0x1337::some_other_module {
    use 0x1::vector;

    const ADDR1:address= @2021;
    const ADDR2:address= @overmind;
}

module overmind::yet_another_module {
    use 1::vector;
    

    const ADDR1:address =std;
    const ADDR2:address= 0x28;

}