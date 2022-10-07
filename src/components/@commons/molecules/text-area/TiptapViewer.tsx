import { EditorContent, EditorOptions } from "@tiptap/react";

import "highlight.js/styles/atom-one-dark.css";

import useTiptapViewer from "@Commons/molecules/text-area/hooks/useTiptapViewer";

interface TiptapViewerProps {
  content?: EditorOptions["content"];
}

const TiptapViewer = ({ content = null }: TiptapViewerProps) => {
  const tiptapEditor = useTiptapViewer(content);
  if (!tiptapEditor) return null;

  return <EditorContent className="z-0" editor={tiptapEditor} />;
};

export default TiptapViewer;
