module example::test {
    fun main(){
        let foo =Foo{x:3,y:true};
        let bar= Bar {foo};
        let foo2:Foo= *&bar.foo;
        let foo3:Foo= bar.foo;// 오류! *&를 사용하여 명시적으로 복사를 추가해야 합니다.
    }
}