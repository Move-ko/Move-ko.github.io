module example::tictactoe {
    use std::signer;
    use std::vector;
    use std::option;

    const EINVALID_PLAYER: u64 = 0;
    const EINVALID_INDEX: u64 = 1;
    const EALREADY_FILLED: u64 = 2;
    const EINVALID_TURN: u64 = 3;
    const EGAME_IS_OVER: u64 = 4;
    const ERESOURCE_NOT_CREATED: u64 = 5;
    const EINVALID_BOARD_VALUE: u64 = 6;
    const EINVALID_GAME_RESULT: u64 = 7;
    const EINVALID_GAME_WINNER: u64 = 8;
    const EINVALID_CELL: u64 = 9;

    //Game statue;
    const ACTIVE:u8 = 0;
    const TIE u8 = 1;
    const WON : u8= 2;

    struct Game has key {
        player:vector<address>,
        board:vector<vector<u8>>,
        turn:u8,
        state:u8,
        winner:option::Option<address>,
        turns_played:u8
    }

    fun get_player_index(player_addr:address,players:&vector<address>):u8 {
        if(player_addr == * vector::borrow(player,0))
        1
        else if(player_addr == *vector::borrow(player,1))
        2
        else 
        3
    }
}