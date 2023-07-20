import Grid from "@mui/material/Unstable_Grid2";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copy from "../util/copy";
const study_1 = () => {
  const code1 = `  module example::test{
    fun example(){
        let a1: address = @0x1; // 0x00000000000000000000000000000001의 약식표현
        let a2: address = @0x42; //0x00000000000000000000000000000042의 약식표현
        let a3: address = @0xDEADBEEF; // 0x000000000000000000000000DEADBEEF 의 약식표현
        let a4: address = @0x0000000000000000000000000000000A;//0xA
        let a5: address = @std; //std라는 이름의 주소에 있는 값을 a5에 할당합니다.
        let a6: address = @66;
        let a7: address = @0x42;

module 66::some_module {   //표현식 컨텍스트가 아니기 때문에 @ 기호가 필요하지 않습니다.
    use 0x1::other_module; //표현식 컨텍스트가 아니기 때문에 @ 기호가 필요하지 않습니다.
    use std::vector;       //다른 모듈을 사용할 때, 네임드 어드레스를 네임스페이스 항목으로 사용할 수 있습니다.
    ...
}

module std::other_module {  //네임드 어드레스를 네임스페이스 항목으로 사용하여 모듈을 선언할 수 있습니다.
    ...
}


    }
}
`;
  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            주소
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            <span style={{ color: "purple" }}>주소(Address)</span> 는 Move
            언어에서 글로벌 스토리지의 위치(가끔은 계정이라고도 함)를 나타내기
            위해 사용되는 내장된 유형입니다. 주소 값은
            <span style={{ color: "purple" }}>128비트(16바이트)</span>
            식별자입니다. 특정 주소에는
            <span style={{ color: "purple" }}>모듈(Module)</span>과
            <span style={{ color: "purple" }}>리소스(Resource)</span>두 가지
            요소를 저장할 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            실제로 주소는 128비트 정수로 구성되지만, Move 주소는 의도적으로
            불투명한 형태로 구성되어 있습니다. 즉, 정수로부터 주소를 생성할 수
            없으며, 산술 연산을 지원하지 않으며, 수정할 수 없습니다. 포인터
            산술과 유사한 용도로 사용될 수 있는 흥미로운 프로그램이 있을 수
            있지만 (예: C의 포인터 산술), Move는 정적 검증을 지원하기 위해
            처음부터
            <span style={{ color: "purple" }}>
              이러한 동적 동작을 허용하지 않습니다.
            </span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            런타임 주소 값(
            <span style={{ color: "purple" }}>주소 유형의 값</span>)을 사용하여
            해당 주소에 있는 리소스에 접근할 수 있습니다. 주소 값을 통해
            런타임에서 모듈에 액세스할 수는 없습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            문법
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            주소는 <span style={{ color: "purple" }}>명명된(named) 주소</span>와
            <span style={{ color: "purple" }}>숫자형(numerical) 주소</span> 로
            두 가지 형태로 나뉩니다. 명명된 주소의 구문은 Move에서 일반적으로
            사용되는 명명된 식별자의 규칙을 따릅니다. 숫자형 주소의 구문은
            16진수로 인코딩된 값에 제한되지 않으며, 유효한 u128 숫자 값으로 주소
            값으로 사용할 수 있습니다. 예를 들어,
            <span style={{ color: "purple" }}>42, 0xCAFE, 2021</span> 은 모두
            유효한 숫자형 주소 리터럴입니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            주소가 식(expression) 컨텍스트에서 사용되는지 여부를 구분하기 위해
            주소를 사용하는 구문은 사용되는 컨텍스트에 따라 다릅니다:
          </Typography>
          <Typography variant="body1" gutterBottom>
            주소가 식으로 사용될 때는 주소 앞에 @ 문자가 붙어야 합니다. 즉,
            <span style={{ color: "purple" }}> {"@<numerical_value>"}</span>
            또는
            <span style={{ color: "purple" }}>
              {"@<named_address_identifier>"}
            </span>
            형태여야 합니다. 식 컨텍스트 이외의 곳에서는 주소를 @ 문자 없이 쓸
            수 있습니다. 즉,
            <span style={{ color: "purple" }}>{" <numerical_value>"}</span> 또는
            <span style={{ color: "purple" }}>
              {"<named_address_identifier>"}
            </span>
            형태로 쓸 수 있습니다. 일반적으로 @는 주소를 네임스페이스 항목에서
            식 항목으로 전환하는 연산자로 생각할 수 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            명명된 주소
          </Typography>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            명명된 주소(named addresses)는 주소가 사용되는 모든 위치에서 숫자 값
            대신 식별자를 사용할 수 있도록 하는 기능입니다. 명명된 주소는 Move
            패키지의 최상위 요소(모듈 및 스크립트 외부)로 선언되고 바인딩됩니다.
            또한 Move 컴파일러에 인수로 전달될 수도 있습니다. 명명된 주소는 값
            수준뿐만 아니라 주소가 사용되는
            <span style={{ color: "purple" }}>모든 위치</span>에서 사용될 수
            있으며, 소스 언어 수준에서만 존재하며 바이트코드 수준에서는 완전히
            해당 값을 <span style={{ color: "purple" }}>대체</span>합니다.
            따라서 모듈과 모듈 멤버는 모듈의 명명된 주소를 통해 접근해야 하며,
            명명된 주소에 할당된 숫자 값으로 모듈 및 모듈 멤버에 접근해서는 안
            됩니다. 예를 들어,
            <span style={{ color: "purple" }}>my_addr이 0x2로 설정된 상태</span>
            에서 Move 프로그램이 컴파일되더라도
            <span style={{ color: "purple" }}>
              use my_addr::foo는 use 0x2::foo와 동일하지 않습니다
            </span>
            . 이 차이점은 모듈과 스크립트 섹션에서 자세히 논의됩니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            글로벌 스토리지 운영
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            주소 값의 주요 목적은 글로벌 스토리지 작업과 상호 작용하는 데에
            있습니다. 주소 값은
            <span style={{ color: "purple" }}>
              exists, borrow_global, borrow_global_mut, move_from
            </span>
            등의 작업과 함께 사용됩니다. 주소를 사용하지 않는 유일한 글로벌
            스토리지 작업은 <span style={{ color: "purple" }}>move_to</span>
            입니다. move_to 작업은
            <span style={{ color: "purple" }}>signer</span> 를 사용합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <span style={{ color: "purple" }}>
              *exists: 주소 아래에 T가 저장되어 있으면 true를 반환
            </span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <span style={{ color: "purple" }}>
              *borrow_global:address 아래에 저장된 T에 대한 불변 참조를 반환합
            </span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <span style={{ color: "purple" }}>
              * borrow_global_mut:address 아래에 저장된 T에 대한 변경 가능한
              참조를 반환
            </span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <span style={{ color: "purple" }}>
              *move_from:T 주소에서 T를 제거하고 반환
            </span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <span style={{ color: "purple" }}>
              * move_to:signer.address 아래에 T를 게시
            </span>
          </Typography>
        </Box>
        <Box sx={{ width: "100%", marginTop: "30px" }}>
          <Typography variant="h4" gutterBottom>
            소유권
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            언어에 내장된 다른 스칼라 값과 마찬가지로 주소 값도 암시적으로 복사
            가능(copyable)합니다. 이는 "copy"와 같은
            <span style={{ color: "purple" }}>
              명시적인 명령 없이도 주소 값이 복사될 수 있다는 것을 의미
            </span>
            합니다. 주소 값을 새 변수에 할당하거나 함수에 인수로 전달할 때, 주소
            값의 복사본이 생성되며 원본과 복사본 주소 모두 독립적으로 사용할 수
            있습니다.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
