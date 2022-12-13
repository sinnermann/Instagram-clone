import React from "react";
import { modalState } from "../atom/modalAtom";
import { useRecoilState } from "recoil";

const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return <h1>UploadModal</h1>;
};

export default UploadModal;
