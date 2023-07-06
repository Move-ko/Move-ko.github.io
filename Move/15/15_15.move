module example::test {
    fun main(){
       let foo = Foo { x: 3, y: true };
       foo.x = 42;     // foo = Foo { x: 42, y: true }
       foo.y = !foo.y; // foo = Foo { x: 42, y: false }
       let bar = Bar { foo };            // bar = Bar { foo: Foo { x: 42, y: false } }
       bar.foo.x = 52;                   // bar = Bar { foo: Foo { x: 52, y: false } }
       bar.foo = Foo { x: 62, y: true }; // bar = Bar { foo: Foo { x: 62, y: true } }
    }
}