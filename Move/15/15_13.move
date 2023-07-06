module example::test {
    fun main(){
        let baz= Baz{ foo:Foo{x:3,y:true}};
        let x= baz.foo.x;;//x= 3;
    }
}