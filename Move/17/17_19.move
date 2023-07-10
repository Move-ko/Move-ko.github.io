module example::test {
   struct R {}

   fun unsafe_consume<T>(x: T) {
    // 오류! x에는 'drop' 능력이 없습니다.
   }

   fun consume<T: drop>(x: T) {
    // 유효합니다!
    // x는 자동으로 드롭됩니다.
   }

   fun foo() {
    let r = R {};
    consume<R>(r);
    //      ^ 오류! R에는 'drop' 능력이 없습니다.
}