module example::test {
    fun foo(){
        let x= id(true);
         //      ^ <bool>가 추론됩니다.
        let foo =Foo {x:true};
           //      ^ <bool>가 추론됩니다.
        let Foo{x}= foo;
      //      ^ <bool>가 추론됩니다.
    }
}