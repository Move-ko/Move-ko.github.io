[dependencies]
MoveStdlib = { git = "https://github.com/aptos-labs/aptos-core.git", subdir="aptos-move/framework/move-stdlib", rev = "main", addr_subst = { "std" = "0x1" } }