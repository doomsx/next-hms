import React from "react";
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Loader2 className="animate-spin text-black" size={50} />
    </div>
  );
};

export default Loading;
