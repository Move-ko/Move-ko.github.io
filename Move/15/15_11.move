module example::test {
    fun main(){
        let foo = Foo {x:3,y:true};
        let bar = Bar {foo:copy foo};
        let x:u64 = *foo.x;
        let y:bool = *&foo.y;
        let foo2:Foo= *&bar.foo;
    }
}