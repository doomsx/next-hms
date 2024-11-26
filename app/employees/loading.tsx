import React from "react";
import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[550px]">
      <Loader2 className="animate-spin text-blue-500" size={50} />
    </div>
  );
};

export default Loading;
