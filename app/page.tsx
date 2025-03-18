import AddTodo from "@/Components/add-todo";
import { LuClipboardList } from "react-icons/lu";

export default function Home() {
  return (
    <div className="py-16 max-w-[900px] mx-auto">
      <h2 className="text-3xl font-bold text-slate-800 flex justify-center gap-5 items-center"><LuClipboardList className="text-4xl text-green-500"/> TODO NEXT + TYPESCRIPT <LuClipboardList className="text-4xl text-green-500"/></h2>
      <AddTodo />
    </div>
  );
}
