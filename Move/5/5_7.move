module example::test {
fun example(){
    let x = vector::singleton<u64>(10);
    let y = copy x; // compiler error without the copy!
}
}