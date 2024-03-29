import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copy from "../util/copy";
const study_1 = () => {
  const code1 = `  a_move_package
  ├── Move.toml      (required)
  ├── sources        (required)
  ├── examples       (optional, test & dev mode)
  ├── scripts        (optional)
  ├── doc_templates  (optional)
  └── tests          (optional, test mode)
  
  
`;
  const code2 = `  [package]
  name = <string> # 예: "MoveStdlib"
  version = "<uint>.<uint>.<uint>" # 예: "0.1.1"
  license* = <string> # 예: "MIT", "GPL", "Apache 2.0"
  authors* = [<string>] # 예: ["Joe Smith (joesmith@noemail.com)", "Jane Smith (janesmith@noemail.com)"]
  
  [addresses]  # (선택적 섹션) 이 패키지에서 명명된 주소를 선언하고 패키지 그래프 내에서 명명된 주소를 인스턴스화합니다.
  # 다음 형식으로 명명된 주소를 선언하는 하나 이상의 줄
  <addr_name> = "_" | "<hex_address>" # e.g., std = "_" or my_addr = "0xC0FFEECAFE"
  
  [dependencies]  # (선택적 섹션) [addresses] 섹션과 동일하지만 "dev" 및 "test" 모드에서만 포함됩니다.
  # 다음 형식으로 의존성을 선언하는 하나 이상의 줄
  <string> = { local = <string>, addr_subst* = { (<string> = (<string> | "<hex_address>"))+ } } # local dependencies
  <string> = { git = <URL ending in .git>, subdir=<path to dir containing Move.toml inside git repo>, rev=<git commit hash>, addr_subst* = { (<string> = (<string> | "<hex_address>"))+ } } # git dependencies
  
  [dev-addresses] # (선택적 섹션) [dependencies] 섹션과 동일하지만 "dev" 및 "test" 모드에서만 포함됩니다.
  # 다음 형식으로 개발용 명명된 주소를 선언하는 하나 이상의 줄
  <addr_name> = "_" | "<hex_address>" # e.g., std = "_" or my_addr = "0xC0FFEECAFE"
  
  [dev-dependencies] # (Optional section) Same as [dependencies] section, but only included in "dev" and "test" modes
  # 다음 형식으로 개발용 의존성을 선언하는 하나 이상의 줄
  <string> = { local = <string>, addr_subst* = { (<string> = (<string> | <address>))+ } }
  
  
  
`;
  const code3 = `  [package]
  name = "AName"
  version = "0.0.0"
  
  
`;
  const code4 = ` [package]
  name = "AName"
  version = "0.0.0"
  license = "Apache 2.0"
  
  [addresses]
  address_to_be_filled_in = "_"
  specified_address = "0xB0B"
  
  [dependencies]
  # Local dependency
  LocalDep = { local = "projects/move-awesomeness", addr_subst = { "std" = "0x1" } }
  # Git dependency
  MoveStdlib = { git = "https://github.com/diem/diem.git", subdir="language/move-stdlib", rev = "56ab033cc403b489e891424a629e76f643d4fb6b" }
  
  [dev-addresses] # For use when developing this module
  address_to_be_filled_in = "0x101010101"
`;
  const code5 = `  module named_addr::A {
    public fun x(): address { @named_addr }
}
`;
  const code6 = `  [package]
  name = "ExamplePkg"
  ...
  [addresses]
  named_addr = "_"
`;
  const code7 = `  [package]
  name = "ExamplePkg"
  ...
  [addresses]
  named_addr = "0xCAFE"
`;
  const code8 = `  [package]
  name = "P"
  ...
  [dependencies]
  P1 = { local = "some_path_to_P1", addr_subst = { "P1N" = "N" } }
  P2 = { local = "some_path_to_P2"  }
`;
  const code9 = `  module N::A {
    public fun x(): address { @P1N }
}
`;
  const code10 = `  [package]
  name = "ExamplePkg"
  ...
  [addresses]
  named_addr = "_"
  
  [dev-addresses]
  named_addr = "0xC0FFEE"
`;
  const code11 = `  a_move_package
  ├── Move.toml
  ...
  └── build
      ├── <dep_pkg_name>
      │   ├── BuildInfo.yaml
      │   ├── bytecode_modules
      │   │   └── *.mv
      │   ├── source_maps
      │   │   └── *.mvsm
      │   ├── bytecode_scripts
      │   │   └── *.mv
      │   ├── abis
      │   │   ├── *.abi
      │   │   └── <module_name>/*.abi
      │   └── sources
      │       └── *.move
      ...
      └── <dep_pkg_name>
          ├── BuildInfo.yaml
          ...
          └── sources
`;
  const code12 = `  ./A
  ├── Move.toml
  ├── sources
    ├ AModule.move
`;
  const code13 = `  module A::AModule {
    use B::Bar;
    use C::Foo;
    public fun foo(): u64 {
        Bar::foo() + Foo::bar()
    }
}
`;
  const code14 = `  [package]
  name = "Foo"
  version = "0.0.0"
  [addresses]
  C = "0x3"
`;
  const code15 = `  ./B
  ├── Move.toml
  ├── sources
  ├── build
   ├ Bar.mv
`;
  const code16 = `  ./C
  ├── Move.toml
  ├── sources
  ├── build
    ├── Foo
     ├──bytecode_modules
       ├ Foo.mv
`;
  const code17 = `  [package]
  name = "A"
  version = "0.0.0"
  [addresses]
  A = "0x2"
  [dependencies]
  Bar = { local = "../B" }
  Foo = { local = "../C" }
`;

  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Packages{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            패키지를 사용하면 Move 프로그래머가 코드를 쉽게 재사용하고 프로젝트
            간에 공유할 수 있습니다. Move 패키지 시스템을 사용하면 프로그래머가
            다음을 쉽게 수행할 수 있습니다:
          </Typography>
          <Typography variant="body1" gutterBottom>
            - Move 코드를 포함하는 패키지 정의하기
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 이름이 지정된 주소에 의해 패키지 매개변수화하기
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 다른 Move 코드에서 패키지를 가져오고 사용하기 및 이름이 지정된
            주소를 인스턴스화하기
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 패키지 빌드하고 패키지에서 관련 컴파일 아티팩트 생성하기
          </Typography>
          <Typography variant="body1" gutterBottom>
            - 컴파일된 Move 아티팩트 주위에서 공통 인터페이스로 작업하기
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            패키지 레이아웃과 매니페스트 구문
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move 패키지 소스 디렉토리는 Move.toml 패키지 매니페스트 파일과 하위
            디렉토리 세트를 포함합니다.
          </Typography>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            필수로 표시된 디렉토리는 디렉토리가 Move 패키지로 간주되고
            컴파일되기 위해 반드시 존재해야 합니다. 선택적인 디렉토리는 존재할
            수 있으며, 그렇다면 컴파일 과정에 포함될 것입니다. 패키지가 빌드되는
            모드에 따라 (테스트 또는 개발 모드), 테스트와 예제 디렉토리도
            포함됩니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            sources 디렉토리에는 Move 모듈과 Move 스크립트 (트랜잭션 스크립트 및
            스크립트 함수를 포함하는 모듈)를 모두 포함할 수 있습니다. examples
            디렉토리는 컴파일 시에는 포함되지 않지만 개발 및/또는 튜토리얼
            목적으로만 사용되는 추가 코드를 저장할 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            scripts 디렉토리는 패키지 작성자가 원하는 경우 트랜잭션 스크립트를
            모듈에서 분리할 수 있도록 지원됩니다. scripts 디렉토리는 항상
            컴파일에 포함되며, doc_templates 디렉토리에 있는 문서 템플릿을
            사용하여 문서를 작성할 수 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            Move.toml
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move 패키지 매니페스트는 Move.toml 파일 내에 정의되며 다음과 같은
            구문을 따릅니다. 선택적 필드는 *로 표시되고, +는 하나 이상의 요소를
            나타냅니다:
          </Typography>
        </Box>
        <Copy code={code2} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            다음은 로컬 의존성 하나와 git 의존성 하나가 포함된 최소한의 패키지
            매니페스트의 예입니다.
          </Typography>
        </Box>
        <Copy code={code3} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            다음은 더 표준적인 패키지 매니페스트의 예시입니다. 이 예시에는 Move
            표준 라이브러리가 포함되어 있으며, 주소 값이 0x1인 'Std'로부터 해당
            주소 값을 인스턴스화합니다.
          </Typography>
        </Box>
        <Copy code={code4} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            패키지 매니페스트의 대부분 섹션은 자명한 것이지만, named addresses는
            약간 이해하기 어려울 수 있으므로 더 자세히 살펴볼 가치가 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            컴파일 중의 명명된 주소(Named Addresses)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move 언어는 명명된 주소(named addresses)를 가지며, 명명된 주소는
            Move에서 선언할 수 없습니다. 따라서 지금까지는 명명된 주소와 그
            값들을 컴파일러에게 명령줄 인자로 전달해야 했습니다. 그러나 Move
            패키지 시스템을 사용하면 이제 이러한 과정이 필요하지 않으며, 패키지
            내에서 명명된 주소를 선언하고, 스코프 내에서 다른 명명된 주소를
            생성하고, Move 패키지 시스템 매니페스트 파일에서 다른 패키지의
            명명된 주소를 이름 변경할 수 있습니다. 이를 개별적으로
            살펴보겠습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            선언(Declaration)
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            예를 들어, example_pkg/sources/A.move 파일에 다음과 같은 Move 모듈이
            있다고 가정해 봅시다.
          </Typography>
        </Box>
        <Copy code={code5} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            예시로, example_pkg/Move.toml 파일에서 명명된 주소인 named_addr을 두
            가지 다른 방식으로 선언할 수 있습니다. 첫 번째 방식은 다음과
            같습니다:
          </Typography>
        </Box>
        <Copy code={code6} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            named_addr을 ExamplePkg 패키지의 명명된 주소로 선언하고, 이 주소는
            유효한 어떤 주소 값이든 될 수 있다고 선언합니다. 따라서 가져오는
            패키지는 named_addr의 값을 원하는 주소로 선택할 수 있습니다.
            직관적으로 이를 ExamplePkg 패키지를 명명된 주소 named_addr로
            매개변수화한다고 생각할 수 있으며, 이후 가져오는 패키지에 의해 해당
            패키지가 나중에 인스턴스화될 수 있습니다. named_addr은 다음과 같이
            선언될 수도 있습니다:
          </Typography>
        </Box>
        <Copy code={code7} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이렇게 되면 named_addr이 정확히 0xCAFE인 명명된 주소로 선언되며,
            변경할 수 없습니다. 이렇게 하면 다른 가져오는 패키지가 해당 명명된
            주소를 사용할 때 정확한 값에 대해 걱정하지 않아도 됩니다. 이 두 가지
            다른 선언 방법으로 인해 명명된 주소에 대한 정보가 패키지 그래프를
            통해 흐를 수 있는 두 가지 방법이 있습니다:
          </Typography>
          <Typography variant="body1" gutterBottom>
            첫 번째 방법인 "할당되지 않은 명명된 주소(unassigned named
            addresses)"는 명명된 주소 값이 가져오는 위치에서 선언 위치로 흐를 수
            있도록 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            두 번째 방법인 "할당된 명명된 주소(assigned named addresses)"는
            명명된 주소 값이 선언 위치에서 패키지 그래프를 통해 상위 사용 위치로
            흐를 수 있도록 합니다
          </Typography>
          <Typography variant="body1" gutterBottom>
            패키지 그래프를 통해 명명된 주소 정보를 흐르게하는 이러한 두 가지
            방법을 통해 스코핑과 명명(named addresses)에 대한 규칙이
            중요해집니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            명명된 주소의 스코핑과 이름 변경
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            패키지 P에서 명명된 주소 N이 다음과 같은 경우에 스코프에 있습니다:
          </Typography>
          <Typography variant="body1" gutterBottom>
            - N이 명명된 주소를 선언한 경우 또는
          </Typography>
          <Typography variant="body1" gutterBottom>
            - P의 전이 의존성(transitive dependencies) 중 하나의 패키지가 N을
            선언하고 P와 N을 선언하는 패키지 사이에 패키지 그래프 상의 의존성
            경로가 있고 N을 재명명하지 않은 경우.
          </Typography>
          <Typography variant="body1" gutterBottom>
            또한, 패키지 내의 모든 명명된 주소는 내보내집니다. 이로 인해 위의
            스코핑 규칙과 함께 각 패키지는 가져올 때 스코프로 가져올 명명된 주소
            세트가 있는 것으로 간주할 수 있습니다. 예를 들어, ExamplePkg
            패키지를 가져온다면, 그 가져오기는 named_addr이라는 명명된 주소를
            스코프로 가져올 것입니다. 이로 인해 P가 두 개의 패키지 P1과 P2를
            가져오는 경우, P에서 N을 참조할 때 어떤 "N"을 의미하는지에 대한
            모호성이 발생합니다. P1과 P2 모두에서 N을 선언하는 경우, 어느
            패키지에서 N이 가져와지는지 애매해집니다. 이러한 명명된 주소가 어느
            패키지에서 가져와지는지에 대한 모호성을 방지하기 위해 패키지의 모든
            종속성이 소개하는 스코프 세트가 서로 겹치지 않도록 강제하고, 해당
            패키지가 가져올 때 명명된 주소의 이름을 변경하는 방법을 제공합니다.
            P, P1 및 P2의 예에서 가져올 때 명명된 주소의 이름을 변경하는 방법은
            다음과 같이 수행할 수 있습니다:
          </Typography>
        </Box>{" "}
        <Copy code={code8} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이러한 경우 N을 P2에서 가져오는 N으로 변경하고, P1N은 P1에서
            가져오는 N을 가리킵니다:
          </Typography>
        </Box>
        <Copy code={code9} />
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이러한 경우 N을 P2에서 가져오는 N으로 변경하고, P1N은 P1에서
            가져오는 N을 가리킵니다:
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            명명된 주소의 스코핑과 이름 변경
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            중요한 점은 명명된 주소의 이름 변경은 로컬하지 않다는 것입니다: 한
            번 패키지 P에서 명명된 주소 N을 N2로 이름을 변경하면 P를 가져오는
            모든 패키지는 N 대신에 N2만 볼 수 있으며, P 외부에서 N을 다시
            도입하지 않는 한 N을 볼 수 없습니다. 이것이 스코핑 규칙(이 섹션의
            시작 부분에 있는 규칙 (2))에서 "P와 N의 선언 패키지 사이의 패키지
            그래프에서의 종속성 경로이며 N을 재명명하지 않은 상태"라고 명시하는
            이유입니다
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            인스턴스화{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move 패키지는 모든 명명된 주소가 값을 가리켜야만 컴파일할 수
            있습니다. 이는 패키지가 초기화되지 않은 명명된 주소를 노출하려는
            경우에 문제가 됩니다. 이것이 [dev-addresses] 섹션의 역할입니다. 이
            섹션은 명명된 주소에 값을 설정할 수 있지만, 새로운 명명된 주소를
            도입할 수는 없습니다. 또한, 개발 모드에서는 루트 패키지의
            [dev-addresses]만 포함됩니다. 예를 들어, 다음 매니페스트를 가진 루트
            패키지는 named_addr이 초기화되지 않았기 때문에 개발 모드 이외에서는
            컴파일되지 않습니다:
          </Typography>
        </Box>
        <Copy code={code10} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            사용법, 아티팩트 및 데이터 구조
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move 패키지 시스템은 Move CLI의 일부인 move
            {" <flags> <command> <command_flags>"} 형식의 명령 줄 옵션을
            제공합니다. 특정 경로가 제공되지 않으면 모든 패키지 명령은 현재 작업
            디렉토리에서 실행됩니다. Move CLI의 모든 명령과 플래그의 전체 목록은
            move --help를 실행하여 확인할 수 있습니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            사용법
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            패키지는 Move CLI 명령 또는 Rust의 라이브러리 명령인 compile_package
            함수를 통해 컴파일할 수 있습니다. 이를 통해 컴파일된 바이트코드와
            소스 맵, 문서, ABI 등의 다른 컴파일 아티팩트가 메모리에 있는
            CompiledPackage가 생성됩니다. 이 CompiledPackage는 OnDiskPackage로
            변환하거나 그 반대로 변환할 수 있습니다. 후자는 CompiledPackage의
            데이터를 파일 시스템에 다음과 같은 형식으로 배치한 것입니다:
          </Typography>
        </Box>{" "}
        <Copy code={code11} />{" "}
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            See the move-package crate for more information on these data
            structures and how to use the Move package system as a Rust library.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Using Bytecode for Dependencies{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Move bytecode can be used as dependencies when the Move source code
            for those dependencies are not available locally. To use this
            feature, you will need co-locate the files in directories at the
            same level and then specify their paths in the corresponding
            Move.toml files.
          </Typography>
        </Box>{" "}
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Requirements and limitations
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Using local bytecode as dependencies requires bytecode files to be
            downloaded locally, and the actual address for each named address
            must be specified in either Move.toml or through --named-addresses.
            Note, both aptos move prove and aptos move test commands, currently,
            do not support bytecode as dependencies.
          </Typography>
        </Box>{" "}
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Recommended structure
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            We use an example to illustrate the dev flow of using this feature.
            Suppose we want to compile the package A. The package layout is:
          </Typography>
        </Box>{" "}
        <Copy code={code12} />{" "}
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            A.move is defined below, depending on the modules Bar and Foo:
          </Typography>
        </Box>{" "}
        <Copy code={code13} />{" "}
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Suppose the source of Bar and Foo are not available but the
            corresponding bytecode Bar.mv and Foo.mv are available locally. To
            use them as dependencies, we would:
          </Typography>
          <Typography variant="body1" gutterBottom>
            Specify Move.toml for Bar and Foo. Note that named addresses are
            already instantiated with the actual address in the bytecode. In our
            example, the actual address for C is already bound to 0x3. As a
            result, [addresses] must be specified C as 0x3, as shown below:
          </Typography>
        </Box>{" "}
        <Copy code={code14} />{" "}
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Place the bytecode file and the corresponding Move.toml file in the
            same directory with the bytecode in a build subdirectory. Note an
            empty sources directory is required. For instance, the layout of the
            folder B (for the package Bar) and C (for the package Foo) would
            resemble:
          </Typography>
        </Box>{" "}
        <Copy code={code15} />
        <Copy code={code16} />{" "}
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Specify [dependencies] in the Move.toml of the target (first)
            package with the location of the dependent (secondary) packages. For
            instance, assuming all three package directories are at the same
            level, Move.toml of A would resemble:
          </Typography>
        </Box>{" "}
        <Copy code={code17} />{" "}
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Note that if both the bytecode and the source code of the same
            package exist in the search paths, the compiler will complain that
            the declaration is duplicated.
          </Typography>
        </Box>{" "}
      </Grid>
    </Grid>
  );
};

export default study_1;
