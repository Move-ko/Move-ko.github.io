import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Copy from "../util/copy";
const study_1 = () => {
  const code1 = `  [package]
  name = "MyApp"
  version = "0.0.1"
  upgrade_policy = "compatible"
  ...
  
  
`;

  return (
    <Grid container>
      <Grid xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Package Upgrades
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Aptos 블록체인에서 Move 코드 (예: Move 모듈)는 업그레이드할 수
            있습니다. 이는 코드 소유자와 모듈 개발자가 변경하지 않는 단일하고
            안정적인 잘 알려진 계정 주소 아래에서 계약을 업데이트하고 발전시킬
            수 있도록 합니다. 모듈 업그레이드가 발생하면 해당 모듈의 모든
            사용자는 자동으로 최신 버전의 코드를 받게 됩니다 (예: 다음 상호작용
            시간).
          </Typography>
          <Typography variant="body1" gutterBottom>
            Aptos 블록체인은 기본적으로 다양한 업그레이드 정책을 네이티브로
            지원합니다. 이를 통해 Move 개발자는 자신의 Move 코드가 어떻게
            업그레이드될 수 있는지에 대한 제약 조건을 명시적으로 정의할 수
            있습니다. 기본 정책은 하위 호환성을 가지고 있습니다. 이는 코드
            업그레이드가 기존의 자원 저장소나 공개 API(포함하여 공개 함수)에
            영향을 주지 않는 것을 보장하는 경우에만 허용된다는 것을 의미합니다.
            이러한 호환성 확인은 Move의 강력한 타입 지정 바이트코드 세맨틱을
            통해 가능합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            그러나 호환되는 업그레이드조차도 응용 프로그램 및 종속된 Move 코드에
            위험한 영향을 줄 수 있습니다(예: 기본 모듈의 의미론이 수정된 경우).
            따라서, 개발자는 체인상에서 업그레이드할 수 있는 제3자 Move 코드에
            의존할 때 주의해야 합니다. 자세한 내용은 종속성에 대한 보안 고려
            사항을 참조하십시오.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            How it works
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Aptos 블록체인에서의 Move 코드 업그레이드는 Move 패키지 단위로
            이루어집니다. 패키지는 Move.toml 매니페스트에서 업그레이드 정책을
            지정합니다.
          </Typography>
        </Box>
        <Copy code={code1} />
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            How to upgrade{" "}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            이미 게시된 Move 코드를 업그레이드하려면, 해당 코드를 이전에 게시된
            주소와 동일한 주소에 다시 게시하면 됩니다. 이를 위해 Aptos CLI를
            사용하여 코드 컴파일 및 게시 지침을 따르면 됩니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            업그레이드 정책
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            Aptos에서 현재 지원하는 두 가지 다른 업그레이드 정책이 있습니다:
          </Typography>
          <Typography variant="body1" gutterBottom>
            호환 가능 (compatible): 이러한 업그레이드는 반드시 하위 호환성을
            유지해야 합니다. 구체적으로 말하면:
          </Typography>
          <Typography variant="body1" gutterBottom>
            저장소(storage)의 경우, 새 코드에서는 이전 코드와 동일한 구조체
            선언이여야 합니다. 이는 기존 저장소의 상태가 새 코드에 의해 올바르게
            해석되도록 보장합니다. 그러나 새로운 구조체 선언은 추가될 수
            있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            API의 경우, 모든 기존의 공개 함수는 이전과 동일한 시그니처를 가져야
            합니다. 새로운 함수, 공개 함수 및 진입 함수를 포함하여 추가될 수
            있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            불변 (immutable): 이 코드는 업그레이드할 수 없으며 영원히 동일하게
            유지됨이 보장됩니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            이러한 정책들은 호환 가능 (compatible)이 불변 (immutable)보다 약한
            정책으로 순서가 지정되어 있습니다. 즉, 호환 가능은 불변보다
            약합니다. 체인상의 패키지 정책은 더 강력해질 수 있지만 약해질 수는
            없습니다. 또한, 패키지의 모든 종속성의 정책은 해당 패키지의 정책보다
            강력하거나 동일해야 합니다. 예를 들어, 불변 패키지는 호환 가능한
            패키지를 직접적으로 또는 간접적으로 참조할 수 없습니다. 이는
            사용자들에게 예상치 못한 업데이트가 발생하지 않을 것임을
            보장해줍니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            위 규칙에는 한 가지 예외가 있습니다: 주소 0x1부터 0xa에 설치된
            프레임워크 패키지는 종속성 확인에서 제외됩니다. 이는 중요한
            업그레이드와 수정을 허용하기 위해 호환 가능한 정책을 갖는 표준
            라이브러리를 기반으로 불변 패키지를 정의할 수 있도록 필요합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            호환성 규칙은 다음과 같습니다
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            호환 가능한 업그레이드 정책을 사용할 때, 모듈 패키지는 업그레이드될
            수 있습니다. 그러나 이전에 이미 게시된 기존 모듈에 대한 업데이트는
            호환되어야 하며 아래의 규칙을 따라야 합니다:
          </Typography>
          <Typography variant="body1" gutterBottom>
            기존 구조체의 필드는 업데이트할 수 없습니다. 즉, 새로운 필드를
            추가할 수 없으며, 기존 필드를 수정할 수도 없습니다. 구조체의 능력도
            변경할 수 없습니다. (새로운 능력을 추가하거나 기존 능력을 제거할 수
            없습니다.)
          </Typography>
          <Typography variant="body1" gutterBottom>
            모든 공개 함수와 진입 함수는 시그니처(인수 타입, 타입 인자, 반환
            타입)를 변경할 수 없습니다. 그러나 인수의 이름은 변경할 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            공개(friend) 함수는 비공개 함수로 취급되며, 따라서 그 시그니처는
            임의로 변경될 수 있습니다. 이는 안전한 조치입니다. 왜냐하면 동일한
            패키지에 있는 모듈만이 friend 함수를 호출할 수 있으며, 시그니처가
            변경되면 해당 모듈도 업데이트되어야 하기 때문입니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            모듈을 업데이트할 때 호환되지 않는 오류가 발생하는 경우, 위에서
            언급한 규칙을 확인하고 위반 사항을 수정해야 합니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            종속성에 대한 보안 고려 사항은 다음과 같습니다:
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            위에서 언급한대로, 호환되는 업그레이드조차도 업그레이드된 코드에
            의존하는 응용 프로그램에 치명적인 영향을 줄 수 있습니다. 이러한
            영향은 버그로 인해 발생할 수도 있지만, 악의적인 업그레이드의 결과일
            수도 있습니다. 예를 들어, 업그레이드된 종속성이 갑자기 모든 함수를
            중단시키면 Move 코드의 작동이 중단될 수 있습니다. 또는 업그레이드된
            종속성이 모든 함수를 실행하기 위해 이전보다 훨씬 많은 가스를
            소비하도록 변경될 수도 있습니다. 이로 인해 업그레이드 가능한
            패키지에 대한 종속성은 주의 깊게 처리되어야 합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            가장 안전한 종속성은 물론 불변 패키지입니다. 이는 종속성이 절대로
            변경되지 않음을 보장하며, 이에 포함된 간접적인 종속성도 변경되지
            않습니다. 불변 패키지를 업데이트하려면 소유자는 새로운 주요 버전을
            도입해야 하며, 이는 사실상 새로운, 별도 및 독립된 패키지를 배포하는
            것과 같습니다. 이는 주요 버전을 이름으로만 표현할 수 있기 때문에
            가능합니다 (예: feature_v1 모듈과 feature_v2 모듈). 그러나 모든
            패키지 소유자가 코드를 불변으로 게시하기를 원하지는 않을 수도
            있습니다. 왜냐하면 이는 버그를 수정하고 코드를 현장에서 업데이트하는
            능력을 제한하기 때문입니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            모든 공개 함수와 진입 함수는 시그니처(인수 타입, 타입 인자, 반환
            타입)를 변경할 수 없습니다. 그러나 인수의 이름은 변경할 수 있습니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            호환 가능한 패키지에 종속성이 있는 경우, 해당 패키지를 게시하는
            엔티티를 알고 이해하는 것이 매우 권장됩니다. 가장 높은 수준의 보장은
            패키지가 탈중앙화 자율 조직(DAO)에 의해 관리되는 경우입니다. 이
            경우, 단일 사용자가 업그레이드를 시작할 수 없으며 투표나 유사한
            방식으로 진행되어야 합니다. 이는 Aptos 프레임워크의 경우입니다.
          </Typography>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom>
            프로그램적인 업그레이드(Programmatic upgrade)는
          </Typography>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left", marginTop: "30px" }}>
          <Typography variant="body1" gutterBottom>
            일반적으로 Aptos는 Move 모듈 aptos_framework::code를 통해 스마트
            계약 내에서 어디에서든 코드를 게시할 수 있는 방법을 제공합니다.
            그러나 현재 트랜잭션에서 게시된 코드는 해당 트랜잭션이 종료된 후에만
            실행될 수 있습니다. 이는 트랜잭션이 완료되기 전까지는 새로운 코드가
            적용되지 않음을 의미합니다.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Aptos 프레임워크 자체는 온체인 관리 로직을 포함하여 프로그램적인
            업그레이드의 예입니다. 프레임워크는 호환 가능하게 표시되어 있습니다.
            업그레이드는 특정 생성된 거버넌스 스크립트를 통해 이루어집니다.
            자세한 내용은 Aptos 거버넌스를 참조하십시오.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default study_1;
