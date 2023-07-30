module test::example {
    /*택배리스트*/
    struct ParcelList {
        parcel_list: Table<u64, Parcel>,
    }
    /*택배*/
    struct Parcel {
        parcel_id: u64,
        address: address,
        content: String,
        completed: bool,
    }
    
     fun create_list(account: &signer){
        let tasks_holder = TodoList {
            tasks: table::new(),
            set_task_event: account::new_event_handle<Task>(account),
            task_counter: 0
        };
        move_to(account, tasks_holder);
    } 
      /*새로운 택배 리스트를 만들고요*/
       public entry fun create_task(account: &signer, content: String) acquires TodoList {
        let signer_address = signer::address_of(account);
        let todo_list = borrow_global_mut<TodoList>(signer_address);
        let counter = todo_list.task_counter + 1;
        let new_task = Task {
            task_id: counter,
            address: signer_address,
            content,
            completed: false
        };
        table::upsert(&mut todo_list.tasks, counter, new_task);
        todo_list.task_counter = counter;
        event::emit_event<Task>(
            &mut borrow_global_mut<TodoList>(signer_address).set_task_event,
            new_task,
        );
        assert!(exists<TodoList>(signer_address), E_NOT_INITIALIZED);
    }

   /*업데이트 용*/
    public entry fun update_list(account: &signer, task_id: u64) acquires TodoList {
        let signer_address = signer::address_of(account);
        assert!(exists<TodoList>(signer_address), E_NOT_INITIALIZED);
        let todo_list = borrow_global_mut<TodoList>(signer_address);
        assert!(table::contains(&todo_list.tasks, task_id), ETASK_DOESNT_EXIST);
        let task_record = table::borrow_mut(&mut todo_list.tasks, task_id);
        assert!(task_record.completed == false, ETASK_IS_COMPLETED);
        task_record.completed = true;
    }

    
}