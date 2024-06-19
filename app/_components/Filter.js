"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const btns = [
  {
    title: "All cabins",
    filter: "all",
  },
  {
    title: "1-3 guests",
    filter: "small",
  },
  {
    title: "4-7 guests",
    filter: "medium",
  },
  {
    title: "8-12 guests",
    filter: "large",
  },
];

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(selection) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", selection);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      {btns.map((button) => {
        return (
          <Button filter={button.filter} activeFilter={activeFilter} handleFilter={handleFilter}>
            {button.title}
          </Button>
        );
      })}
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
