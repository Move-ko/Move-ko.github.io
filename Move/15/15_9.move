module example::test {
    fun main(){
        let foo= Foo{x:3,y:true};
        let bar= Bar{foo};
        
        let x_ref= &bar.foo.x;
    }
}