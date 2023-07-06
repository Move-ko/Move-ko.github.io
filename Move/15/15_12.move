module example::test {
    fun main(){
        let foo =Foo{x:3,y:true};
        let x= foo.x; //x==3
        let y= foo.y; //y ==true;
    }
}