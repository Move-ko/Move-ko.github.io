[package]
name = "A"
version = "0.0.0"
[addresses]
A = "0x2"
[dependencies]
Bar = { local = "../B" }
Foo = { local = "../C" }