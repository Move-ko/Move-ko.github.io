module example::test {
    {
    let x = 0;
    use std::vector; // 오류!
    let v = vector::empty();
}
}