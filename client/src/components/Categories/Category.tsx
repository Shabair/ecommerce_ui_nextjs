"use client";

import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "T-shirts",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "Shoes",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Accessories",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  {
    name: "Bags",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "bags",
  },
  {
    name: "Dresses",
    icon: <Venus className="w-4 h-4" />,
    slug: "dresses",
  },
  {
    name: "Jackets",
    icon: <Shirt className="w-4 h-4" />,
    slug: "jackets",
  },
  {
    name: "Gloves",
    icon: <Hand className="w-4 h-4" />,
    slug: "gloves",
  },
];

export const Category = () => {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("cat");

  const router = useRouter();
  const handleCatChange = (slug:string | null):void => {
    router.push(`/?cat=${slug}`)
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 bg-gray-100 p-0.5 round-lg text-sm">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className={`flex items-center justify-center gap-2 cursor-pointer rounded-md hover:bg-white p-2 ${
            selectedCategory == cat.slug && "bg-white"
          }`}
          onClick={()=>handleCatChange(cat.slug)}
        >
          <div>{cat.icon}</div>
          <div>{cat.name}</div>
        </div>
      ))}
    </div>
  );
};
