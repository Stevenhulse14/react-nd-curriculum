"use client";

import { useState } from "react";
import { Title, Button } from ".";

export default function TodoForm() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // eventually we will comeback here and finish our Async functionality
    // to submit the form to the db and store the new todo

    //reset the state
    setTitle("");
  };

  return (
    <div className="bg-neutral-dark min-h-[200px] p-6 rounded-2xl text-neutral-light max-w-md mx-auto mt-8">
      <Title title={"Add a Todo"} />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className=" text-sm font-medium text-secondary-light">
          Title :
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" p-2 rounded-md bg-secondary-medium text-neutral-light focus:outline-dashed focus:ring-2 focus:ring-primary "
          placeholder=" Enter your Task"
        ></input>
        <Button type="cancelx" />
      </form>
    </div>
  );
}
