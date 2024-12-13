"use client";
import { ChevronDown, Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { modules } from "@/lib/course";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
<<<<<<< HEAD
  const pathArray = path!.split("/");
=======
  const pathArray = path.split("/");
>>>>>>> d35e6adba966ea2d9f3fe0433028e30e1f4c4435

  console.log(pathArray);
  return (
    <section className="p-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/learn">Learn</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                Modules
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {modules.map((module, index) => (
<<<<<<< HEAD
                  <Link key={index} href={module.href}>
=======
                  <Link href={module.href}>
>>>>>>> d35e6adba966ea2d9f3fe0433028e30e1f4c4435
                    <DropdownMenuItem key={index}>
                      <h1 className={cn("block p-2")}>{module.title}</h1>
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
<<<<<<< HEAD
          {
            pathArray.length > 3 && (
              <>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/learn/module/${pathArray[3]}`}>
                    {modules[parseInt(pathArray[3]) - 1 ].title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )
          }
=======
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
>>>>>>> d35e6adba966ea2d9f3fe0433028e30e1f4c4435
        </BreadcrumbList>
      </Breadcrumb>
      {children}
    </section>
  );
}
