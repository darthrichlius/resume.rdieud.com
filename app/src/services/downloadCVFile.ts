import toast from "react-hot-toast";

import AppConfig from "@@/config/app";

const resumeFilename = AppConfig.assets.file.resume;

const downloadCVFile = async () => {
  toast.loading("The file is being downloaded, available in few seconds", {
    duration: 3000,
    icon: "🔄",
  });

  const response = await fetch("api/file/resume");
  if (response.ok) {
    const blob = await response.blob();

    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const url = (window as any).URL.createObjectURL(blob);
      const link = (document as any).createElement("a");
      link.href = url;
      link.download = resumeFilename;
      link.click();
      (window as any).URL.revokeObjectURL(url);
    }
    return true;
  } else {
    toast.error(
      "Unable to download the file. \nPlease contact the administrator",
      {
        duration: 4000,
        icon: "❌",
      }
    );
  }
  return false;
};

export default downloadCVFile;
