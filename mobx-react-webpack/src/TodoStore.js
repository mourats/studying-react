import { observable, autorun } from "mobx";
import React, { Component } from 'react';

class TodoStore {
    @observable todos = ["buy milk", "buy eggs"];
    @observable filter = "";
}

var store = window.store = new TodoStore;

export default store;


autorun(() => {
    console.log(store.filter);
    console.log(store.todos[0]);
}) 