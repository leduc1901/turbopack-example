"use client"
import { useRef, useState } from 'react';
import '@/styles/dist.css';
import { copyImage } from '@/lib/utils/copyImage';
import { CodeEditor } from '@/lib/components/CodeEditor';
import { BsSun, BsMoonFill, BsDownload, BsCodeSlash } from 'react-icons/bs';
import { BiCopy } from 'react-icons/bi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  darkThemeStyle,
  DEFAULT_WRAPPER_WIDTH,
  LANGUAGES,
  lightThemeStyle,
  Theme,
} from '@/lib/utils/constant';
import { Header } from '@/lib/components/Header';
import { useMouseMove } from '@/lib/hooks/useMouseMove';
import { downloadImage } from '@/lib/utils/downloadImage';

export default function App() {
  const [theme, setTheme] = useState(Theme.DARK);
  const [wrapperWidth, setWrapperWidth] = useState(DEFAULT_WRAPPER_WIDTH);
  const isDarkTheme = theme === Theme.DARK;
  const wrapperRef = useRef<HTMLDivElement>(null);
  useMouseMove(setWrapperWidth);
  const textAreaBackground = isDarkTheme
    ? darkThemeStyle.backgroundColor
    : lightThemeStyle.backgroundColor;

  return (
    <>
      <ToastContainer />
      <div className="menu-container">
        <div
          className="menu-item"
          onClick={() => setTheme(isDarkTheme ? Theme.LIGHT : Theme.DARK)}
        >
          {isDarkTheme ? <BsMoonFill size={20} /> : <BsSun size={20} />}
          Theme
        </div>
        <div
          className="menu-item"
          onClick={() => copyImage(wrapperRef.current)}
        >
          <BiCopy size={20} />
          Copy
        </div>
        <div
          className="menu-item"
          onClick={() => downloadImage(wrapperRef.current)}
        >
          <BsDownload size={20} />
          Downloadzzz
        </div>
      </div>

      <div className="editor">
        <div
          className="wrapper"
          style={{ width: wrapperWidth }}
          ref={wrapperRef}
        >
          <div id="left-handler"></div>
          <div id="right-handler"></div>
          <div
            className="container"
            style={{
              backgroundImage: textAreaBackground,
            }}
          >
            <Header />
            <CodeEditor isDarkTheme={isDarkTheme} />
          </div>
        </div>
      </div>
    </>
  );
}
