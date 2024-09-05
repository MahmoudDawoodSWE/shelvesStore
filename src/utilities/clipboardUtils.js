
export const copyToClipboard = async (url, t) => {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(url);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = url;
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Fallback copy failed:", err);
    }

    document.body.removeChild(textArea);
  }
};
