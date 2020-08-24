import React from "react";

import Star from 'src/components/Star'

export default function HappyStudent({ data }) {
  return (
    <div className="mt-8">
    <Star value={data?.rating ?? 0} width={26} height={26}></Star>
      <p className="text-gray-600 mt-1">{data?.note ?? "Student's response"}</p>
      <div className="flex items-center mt-4">
        <div className=" rounded-full overflow-hidden">
          <img
            src={data?.users?.avatar ?? ""}
            alt={data?.users?.name ?? "Students's Name"}
            className="object-cover w-16 h-16"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg text-gray-900">
            {data?.users?.name ?? "Student's Name"}
          </h2>
          <h3 className="text-lg text-gray-600">
            {data?.users?.role ?? "Student's role"}
          </h3>
        </div>
      </div>
    </div>
  );
}