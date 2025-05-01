"use client";
import Image from "next/image";
import { TodoForm } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from "@/redux/features/todoSlice";
import { useEffect } from "react";

export default function Home() {
  // dont want this in here  I need this in its own component
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  console.log(todos, " Todos");

  useEffect(() => {
    dispatch(fetchTodos("token"));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-neutral">
        Hello Next JS
      </h1>
      <TodoForm />
      {/*  Seperate this loop into its own Component  */}
      {todos?.map((todo, index) => {
        return <div key={index}>{todo.title}</div>;
      })}
    </div>
  );
}
