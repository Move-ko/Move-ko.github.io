module example::test {
    fun main(){
        let foo = Foo{x:3,y:true};
        let foo_ref:&Foo = &foo;
        let y= bool= foo_ref.y; // 구조체에 대한 참조를 통해 필드를 읽는 중입니다.
        let x_ref:&u64 = &foo.x;

        let x_ref_mut:&mut u64= &mut foo.x;
        *x_ref_mut= 42;// 가변 참조를 통해 필드를 수정 중입니다.
    }
}