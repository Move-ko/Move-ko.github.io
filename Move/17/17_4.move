module example::test {
    fun foo(){
        let foo = Foo<bool>{x:true};
        let Foo<bool>{x}= foo;
    }
}