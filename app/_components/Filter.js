"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const btnStyle = "px-5 py-2 hover:bg-primary-700";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleFilter(selection) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", selection);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <button className={btnStyle} onClick={() => handleFilter("all")}>
        All cabins
      </button>
      <button className={btnStyle} onClick={() => handleFilter("small")}>
        1-3 guests
      </button>
      <button className={btnStyle} onClick={() => handleFilter("medium")}>
        4-7 guests
      </button>
      <button className={btnStyle} onClick={() => handleFilter("large")}>
        8-12 guests
      </button>
    </div>
  );
}
