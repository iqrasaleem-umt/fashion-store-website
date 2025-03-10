"use client";  // ✅ Add this at the top

import { useParams } from "next/navigation";

export default function ProductPage() {
  const params = useParams();  // ✅ Get params dynamically

  if (!params || !params.id) return <div>Loading...</div>;  // ✅ Prevent error

  return (
    <div className="px-6 mt-10 text-2xl font-semibold">
      Product ID: {params.id}
    </div>
  );
}
