"use client";
import Link from "next/link";
import React, { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CategoryButton = ({ children, className, category }: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <button
      className={className}
      onClick={() => {
        router.push(pathname + "?" + createQueryString("category", category));
      }}
    >
      {children}
    </button>
  );
};

export default CategoryButton;
