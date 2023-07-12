[package]
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


