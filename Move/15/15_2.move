module example::test {
    struct Foo {x:Foo}
   //              ^ 오류! Foo는 Foo를 포함할 수 없습니다.
}