module example::test {
     use std::vector::{empty as foo, length as foo}; // ERROR!
//                                             ^^^ 중복된 'foo'


    use std::vector::empty as bar;

    use std::vector::length as bar; // 오류!
    //                         ^^^ 중복된 'bar'

}