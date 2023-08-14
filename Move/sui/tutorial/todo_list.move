
module test_addr::parcel {
    use sui::transfer;
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};
    use sui::table::{Self, Table};
    use std::string::{Self,String};

 
  struct Todolist has key {
        id:UID,
        list:Table<u64,Task>,
     }
     struct Task has store,drop,copy{
        id:u64,
        content:String,
        completed: bool,

     }

 
    fun init(ctx: &mut TxContext) {
        let table = table::new<u64, Task>(ctx);
         transfer::share_object(Todolist {
            id: object::new(ctx),
            list:table
        })
    }

    public entry fun create_task(todo_list:&mut Todolist,id:u64,content:vector<u8>) {
    table::add(&mut todo_list.list, id, Task { id: id, content: string::utf8(content),completed:false });
    }

    public entry fun complete_task(todo_list:&mut Todolist,id:u64){
      let table=   table::borrow_mut(&mut todo_list.list, id);
      table.completed = true;
    }

    public fun get_content(coin: &Todolist,id:u64): String{
        table::borrow(&coin.list, id).content
    }
    public fun get_completed(coin: &Todolist,id:u64): bool{
        table::borrow(&coin.list, id).completed
    }
  #[test]
    fun test_counter() {
        use sui::test_scenario;
        let user1 = @0xA1;

        let scenario_val = test_scenario::begin(user1);
        let scenario = &mut scenario_val;
        {
            init(test_scenario::ctx(scenario));
        };
        test_scenario::next_tx(scenario, user1);
        {
            let todolist_val = test_scenario::take_shared<Todolist>(scenario);
            let todolist = &mut todolist_val;
            create_task(todolist,1,b"eil");
            create_task(todolist,2,b"e");
            
            assert!(get_content(todolist,1) == string::utf8(b"eil"), 0);
            assert!(get_content(todolist,2) == string::utf8(b"e"), 0);
            assert!(get_completed(todolist,2) == false, 0);
            complete_task(todolist,2);
            assert!(get_completed(todolist,2) == true, 0);

            test_scenario::return_shared(todolist_val);

        };
        test_scenario::end(scenario_val);
    }

}

