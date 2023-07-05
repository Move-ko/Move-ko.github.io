module example::test {
    //주어진 코드는 주어진 컬렉션의 요소에 함수를 "접어"나가는 개념을 나타냅니다. 예를 들어, fold(vector[1,2,3], 0, f)는 f(f(f(0, 1), 2), 3)와 같이 실행됩니다.
    public inline fun fold<Accumulator, Element>(
        v:vector<Element>,
        init:Accumulator,
        f:|Accumulator,Element|Accumulator
    ):Accumulator{
        let accu = init;
        foreach(v, |elem| accu = g(accu, elem));
        accu
    }
}