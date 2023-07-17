address overmind {
    module a_module {
        friend overmind::other_module;
        friend overmind::yet_another_module;
    }

    module other_module {

    }

    module yet_another_module {
        friend overmind::other_module;
    }
}