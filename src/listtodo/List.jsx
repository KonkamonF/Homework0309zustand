import React from "react";
import { create } from "zustand";



function List(set) {
  const nameList = {
    checklist : [{id: 1, title: "work"}, {id:2,title : "work2"}],
    addChecklist : (newValue) => set((state)=>{
      return ({checklist:[...state.checklist,{id: state.checklist.length +1, title: newValue }],
    })}),
    delChecklist : (id)=> set((state)=>({
        checklist : state.checklist.filter((e)=>e.id !==id)
    })),
}

  return nameList;
}

const useStore = create(List);

export default useStore;
