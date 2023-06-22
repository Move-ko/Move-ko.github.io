module example::test {
fun example(){
    let x = vector::singleton<u64>(10);
    let y = copy x; // 사본이 없는 컴파일러 오류!
}
}