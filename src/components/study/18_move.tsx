import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copy from "../util/copy";
const study_1 = () => {
  const code1 = `  module example::test {
    struct Ignorable has drop {f:u64 }
    struct Pair has copy, drop, store { x: u64, y: u64 }
}
`;
  const code2 = `  module exampe::test {
    // 능력을 갖지 않는 구조체
     struct NoAbilities {}
     struct WantsCopy hsa copy {
         f:NoAbilities,, // 오류: 'NoAbilities'은 'copy'를 갖지 않습니다.
     }
 }
`;
  const code3 = `  module example::test {
    // 능력을 갖지 않는 구조체
    struct NoAbilities {}

    struct MyResource has key {
        f: NoAbilities, // 오류: 'NoAbilities'은 'store'를 갖지 않습니다.
    }
}
`;
  const code4 = `  module example::test {
    struct Cup<T> has copy, drop, store, key { item: T }
}
`;
  const code5 = `  module example::test {
    fun main(){
        vector<T> has copy, drop, store;
    }
}
`;
  const code6 = `  module example::test {
    struct NoAbilities {}
    struct S has copy,drop {f:bool}
    struct Cup<T> has copy,drop,store {item:T}

    fun example(c_x:Cup<u64>,c_:Cup<S>) {
        // 유효함, 'Cup<u64>'은 'u64'이 'copy'를 가지기 때문에 'copy'를 가집니다.
        let c_x2 = copy c_x;
       // 유효함, 'Cup<S>'는 'S'가 'copy'를 가지기 때문에 'copy'를 가집니다.
        let c_s2 = copy c_s;
    }

    fun invalid(c_account:Cup<signer>,c_n:Cup<NoAbilities>){
       // 유효하지 않음, 'Cup<signer>'은 'copy'를 가지지 않습니다.
       // 'Cup'은 'copy'로 선언되었지만, 인스턴스는 'copy'를 가지지 않습니다.
       // 이는 'signer'가 'copy'를 가지지 않기 때문입니다.
       let c_account2= copy c_account;
       // 유효하지 않음, 'Cup<NoAbilities>'은 'copy'를 가지지 않습니다.
       // 'NoAbilities'가 'copy'를 가지지 않기 때문입니다
       let c_n2= copy c_n;
    }
}
`;
  const code7 = `  module exmaple::test {
    struct NoAbilities {}
    struct S has copy,drop {f:bool}
    struct Cup<T>has copy,drop,store {item:T}

    fun unused (){
        Cup<bool>{item:true}//유효함, 'Cup<bool>'은 'drop'을 가집니다.
        Cup<S> { item: S { f: false }};// 유효함, 'Cup<S>'는 'drop'을 가집니다.
    }

    fun left_in_local(c_account:Cup<signer>):u64 {
        let c_b= Cup<bool>{item:true};
        let c_s= Cup<S>{item:S{f:false}};
       // 유효한 반환: 'c_account', 'c_b', 'c_s'는 값을 가지고 있으며
       // 'Cup<signer>', 'Cup<bool>', 'Cup<S>'는 'drop'을 가집니다.
        0
    }

    fun invalid_unused(){
        // 유효하지 않음, 'Cup<NoAbilities>'을 무시할 수 없습니다. 'NoAbilities'는 'drop'을 가지지 않기 때문입니다.
        // 'Cup'은 'drop'으로 선언되었지만, 인스턴스는 'drop'을 가지지 않습니다. 이는 'NoAbilities'가 'drop'을 가지지 않기 때문입니다.
        Cup<NoAbilities>{item:NoAbilities{}};

    }

    fun invalid_left_in_local():u64 {
        let n= Cup<NoAbilities>{item:NoAbilities{}};
        // 유효하지 않은 반환: 'c_n'은 값이 있고 'Cup<NoAbilities>'는 'drop'을 가지지 않습니다.
        0 
    }

}
`;
  const code8 = `  module example::test {
    struct Cup<T> has copy,drop,store{item:T}
// 'MyInnerResource'는 'store'로 선언되어 있으므로 모든 필드가 'store'를 가져야 합니다.
    struct MyInnerResource has store {
        yes:Cup<u64>,// 유효함, 'Cup<u64>'은 'store'를 가집니다.
// no: Cup<signer>, 유효하지 않음, 'Cup<signer>'는 'store'를 가지지 않습니다.
    }

    // 'MyResource'는 'key'로 선언되어 있으므로 모든 필드가 'store'를 가져야 합니다.
    struct MyResource has key {
        yes:Cup<u64>, // 유효함, 'Cup<u64>'은 'store'를 가집니다.
        inner:Cup<MyInnerResource>
// no: Cup<signer>, 유효하지 않음, 'Cup<signer>'는 'store'를 가지지 않습니다.

    }
}
`;
  const code9 = `  module example::test {
    struct NoAbilities {}
    struct MyResource<T> has key {f:T}

    fun valid(account:&signer) acquires MyResource {
        let addr= signer::address_of(account);

        let has_resource = exists<MyResource<u64>>(addr);
        if(!has_resource){
            move_to(account,MyResource<u64>{f:0})
        };
        let r= borrow_global_mut<MyResource<u64>>(addr)
        r.f= r.f+1;

    }


    fun invalid(account: &signer) {
    // 유효하지 않음, 'MyResource<NoAbilities>'은 'key'를 가지지 않습니다.
    let has_it = exists<MyResource<NoAbilities>>(addr);
    // 유효하지 않음, 'MyResource<NoAbilities>'은 'key'를 가지지 않습니다.
    let NoAbilities {} = move_from<NoAbilities>(addr);
    // 유효하지 않음, 'MyResource<NoAbilities>'은 'key'를 가지지 않습니다.
    move_to(account, NoAbilities {});
    // 유효하지 않음, 'MyResource<NoAbilities>'은 'key'를 가지지 않습니다.
    borrow_global<NoAbilities>(addr);
   }
}
`;

  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            능력(Abilities)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            "Abilities"는 Move에서의 유형(type)에 따라 값들이 수행할 수 있는
            동작을 제어하는 타이핑 기능입니다. 이 시스템은 값들의 "선형(linear)"
            타이핑 동작과 값들이 전역 저장소에서 어떻게 사용되는지에 대한 세밀한
            제어를 제공합니다. 이를 위해 특정 바이트코드 명령어에 대한 액세스를
            제한하여 해당 바이트코드 명령어를 사용하기 위해서는 해당
            기능(ability)이 필요합니다 (모든 명령어가 기능에 의해 제한되는 것은
            아닙니다).
          </Typography>
          <Typography variant="body1" gutterBottom>
            예를 들어, "Ability A allows a value to be stored in global
            storage"라는 문장은 "기능 A는 값이 전역 저장소에 저장될 수 있도록
            허용합니다"라고 번역될 수 있습니다. 이는 Move에서 값을 전역 저장소에
            저장하려면 특정 기능이 필요하다는 것을 의미합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            따라서, "Abilities"는 Move에서 값들의 허용 가능한 동작을 제어하는
            기능이며, 해당 값이 어떤 동작을 수행할 수 있는지를 선별적으로
            조절합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            네 가지 능력
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            copy 이 능력을 갖는 유형의 값들이 복사될 수 있도록 허용합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            drop 이 능력을 갖는 유형의 값들이 제거/버려질 수 있도록 허용합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            store 이 능력을 갖는 유형의 값들이 전역 저장소 내의 구조체에 존재할
            수 있도록 허용합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            key 이 유형이 전역 저장소 작업에서 키(key)로서 사용될 수 있도록
            허용합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            copy{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            복사 능력(copy ability)은 해당 능력을 갖는 유형의 값들이 복사될 수
            있도록 허용합니다. 이는 복사 연산자를 사용하여 지역 변수에서 값을
            복사하거나 참조를 통해 값들을 복사하는 작업에 대한 액세스를
            제어합니다. 만약 한 값이 복사 능력을 갖는다면, 그 값 안에 포함된
            모든 값들도 복사 능력을 가집니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            일단 정의되면, 타입 매개변수 T는 매개변수 유형(parameter types),
            반환 유형(return types), 그리고 함수 본문 내에서 사용할 수 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            drop{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            제거 능력(drop ability)은 해당 능력을 갖는 유형의 값들이 제거될 수
            있도록 허용합니다. 여기서 "제거(dropped)"란 값이 전달되지 않고 Move
            프로그램이 실행되는 동안 사실상 파괴되는 것을 의미합니다. 따라서 이
            능력은 다음과 같은 여러 위치에서 값을 무시하는 능력을 제어합니다:
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 로컬 변수나 매개변수에서 값 사용하지 않기
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 시퀀스 내에서 값 사용하지 않기 (예: ;를 통한 구분)
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 할당문에서 변수의 값 덮어쓰기
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 참조를 통해 값을 기록할 때 값 덮어쓰기 (*e1 = e2)
          </Typography>
          <Typography variant="body1" gutterBottom>
            한 값이 제거 능력을 갖는다면, 그 값 안에 포함된 모든 값들도 제거
            능력을 가집니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            store{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            저장 능력(store ability)은 해당 능력을 갖는 유형의 값들이 전역
            저장소 내의 구조체(리소스) 안에 존재할 수 있도록 허용하지만, 반드시
            전역 저장소의 최상위 리소스로 존재할 필요는 없습니다. 이 능력은
            직접적으로 작업을 제어하지 않습니다. 대신 키(key)와 함께 사용될 때
            전역 저장소 내의 존재 여부를 제어합니다. 한 값이 저장 능력을
            갖는다면, 그 값 안에 포함된 모든 값들도 저장 능력을 가집니다.
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            key{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            키(key) 능력은 해당 유형이 전역 저장소 작업에서 키로 사용될 수
            있도록 허용합니다. 이 능력은 모든 전역 저장소 작업을 제어하므로,
            move_to, borrow_global, move_from 등의 작업에서 유형을 사용하려면
            해당 유형은 키 능력을 가져야 합니다. 이때 주의할 점은 작업은 키
            유형이 정의된 모듈에서 사용되어야 한다는 것입니다 (어떤 의미에서는
            작업은 정의하는 모듈에게만 공개된다고 볼 수 있습니다). 한 값이 키
            능력을 가지면, 그 값 안에 포함된 모든 값들도 저장 능력을 갖게
            됩니다. 이러한 비대칭성이 있는 유일한 능력입니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            내장된 타입들(Builtin Types){" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            대부분의 기본 내장 타입은 copy, drop, 그리고 store를 갖고 있습니다.
            단, signer 타입은 drop만을 갖습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            bool, u8, u16, u32, u64, u128, u256, 그리고 address 타입은 copy,
            drop, 그리고 store를 갖고 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            signer 타입은 drop만을 갖습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            signer 타입은 복사되거나 전역 저장소에 넣을 수 없습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            {"vector<T>"} 타입은 T의 능력에 따라 copy, drop, 그리고 store를 갖을
            수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            불변 참조 &와 가변 참조 &mut는 copy와 drop을 갖고 있습니다. 이는
            참조 자체를 복사하고 제거하는 것을 의미하며, 참조 대상에 대한 복사와
            제거가 아닙니다. 참조는 전역 저장소에 나타날 수 없으므로 store를
            갖지 않습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            기본 내장 타입 중 어느 것도 key를 갖지 않으며, 이는 이들이
            직접적으로 전역 저장소 작업과 함께 사용될 수 없음을 의미합니다.
          </Typography>
        </Box>
        <Copy code={code5} />
        <Copy code={code6} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            구조체 능력
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            구조체가 특정 능력을 갖는다고 선언하려면, 구조체 이름 뒤에 필드들
            앞에 {"has <ability>"} 형식으로 선언합니다. 예를 들어:
          </Typography>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이 경우에는 "Ignorable"은 drop 능력을 갖고 있고, "Pair"는 copy,
            drop, 그리고 store 능력을 갖고 있습니다. 이러한 능력들은 해당하는
            작업에 대해 강력한 보장을 제공합니다. 해당 능력을 갖는 값에 대해서만
            해당 작업을 수행할 수 있으며, 값이 다른 컬렉션의 깊은 내부에
            중첩되어 있더라도 해당됩니다!
          </Typography>
          <Typography variant="body1" gutterBottom>
            따라서 구조체의 능력을 선언할 때, 필드에 특정 요구 사항이 있습니다.
            모든 필드는 이러한 제약 조건을 만족해야 합니다. 이 규칙은 구조체가
            위에서 설명한 능력에 대한 도달성 규칙을 충족하도록 필요합니다.
            구조체가 다음 능력과 함께 선언된 경우...
          </Typography>
          <Typography variant="body1" gutterBottom>
            copy: 모든 필드는 copy를 가져야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            drop: 모든 필드는 drop을 가져야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            store: 모든 필드는 store를 가져야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            key: 모든 필드는 store를 가져야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            key는 현재 자기 자신을 필요로하지 않는 유일한 능력입니다.
          </Typography>
        </Box>
        <Copy code={code2} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            반대로, 예를 들어:
          </Typography>
        </Box>
        <Copy code={code3} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            조건부 능력 및 제네릭 유형
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            제네릭 타입에 능력이 주석 처리되면 해당 타입의 모든 인스턴스가 그
            능력을 갖는 것이 보장되는 것은 아닙니다. 다음과 같은 구조체 선언을
            고려해 봅시다:
          </Typography>
        </Box>
        <Copy code={code4} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Cup이 능력과 상관없이 모든 유형을 보유할 수 있는 기능이 있다면 매우
            유용할 것입니다. 타입 시스템은 타입 매개변수를 볼 수 있으므로, 해당
            능력에 대한 보장을 위반하는 유형 매개변수를 발견하면 Cup에서 능력을
            제거할 수 있어야 합니다. 이 동작은 처음에는 약간 혼란스러울 수
            있지만, 컬렉션 유형에 대해 생각해보면 이해하기 쉬울 수 있습니다.
            내장된 vector 타입의 다음과 같은 타입 선언을 고려해 볼 수 있습니다:
          </Typography>
        </Box>
        <Copy code={code5} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            우리는 벡터가 모든 유형과 함께 작동하도록 원합니다. 서로 다른 능력에
            대해 별도의 벡터 타입을 원하지 않습니다. 그렇기 때문에 우리가 원하는
            규칙은 무엇일까요? 바로 앞에서 설명한 필드 규칙과 동일한 규칙입니다.
            따라서, 내부 요소가 복사될 수 있는 경우에만 벡터 값 복사가 안전하고,
            내부 요소가 무시/제거될 수 있는 경우에만 벡터 값 무시가 안전하며,
            내부 요소가 전역 저장소에 존재할 수 있는 경우에만 벡터를 전역
            저장소에 넣는 것이 안전합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            이 추가적인 표현성을 가지기 위해, 특정 타입은 해당 타입의
            인스턴스화에 따라 선언된 능력을 모두 갖지 않을 수 있습니다. 대신,
            타입이 갖게 될 능력은 선언과 타입 인자 모두에 따라 결정됩니다. 어떤
            타입이든 타입 매개변수는 구조체 내에서 사용될 것으로 예상되므로,
            능력은 타입 매개변수가 필드에 대한 요구 사항을 충족하는 경우에만
            부여됩니다. 위에서 언급한 Cup을 예로 들면:
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Cup은 T가 copy를 갖는 경우에만 copy 능력을 갖습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - T가 drop를 갖는 경우에만 drop 능력을 갖습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - T가 store를 갖는 경우에만 store 능력을 갖습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            - T가 store를 갖는 경우에만 key 능력을 갖습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            각 능력에 대한 이 조건부 시스템의 예시를 살펴보겠습니다:
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            예시: 조건부 복사 (conditional copy)
          </Typography>
        </Box>
        <Copy code={code6} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            예시: 조건부 제거 (conditional drop)
          </Typography>
        </Box>
        <Copy code={code7} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            예시: 조건부 저장 (conditional store)
          </Typography>
        </Box>
        <Copy code={code8} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            예시: 조건부 키 (conditional key)
          </Typography>
        </Box>
        <Copy code={code9} />
      </Grid>
    </Grid>
  );
};

export default study_1;
