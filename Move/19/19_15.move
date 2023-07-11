module example::test {
    fun example(): vector<u8> {
    let result = {
        use std::vector::{empty, push_back};
        let v = empty();
        push_back(&mut v, 0);
        push_back(&mut v, 10);
        v
    };
    let v2 = empty(); //오류
//           ^^^^^ 바운드되지 않은 함수 'empty'
    result
}
}