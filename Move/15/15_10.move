module example::test {
    fun main(){
        let foo = Foo {x:3,y:true};
        let foo_ref= &foo;
        let x_ref= &foo_ref.x;
        // 이는 let x_ref = &foo.x와 동일한 효과를 가지고 있습니다.
    }
}