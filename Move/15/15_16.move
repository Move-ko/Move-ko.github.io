module example::test {
    fun main(){
        let foo = Foo {x:3,y:true};
        let foo_ref= &mut foo;
        foo_ref.x= foo_ref.x+1;
    }
}