address 0x42 {
module data {
    struct S {}
    const FLAG: bool = false;
    fun foo() {}
}
module example {
    use 0x42::data::{
        S as s, // 오류!
        FLAG as fLAG, // 오류!
        foo as FOO,  // 유효
        foo as bar, // 유효
    };
}
}