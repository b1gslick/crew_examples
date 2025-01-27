import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ElemList from "@/components/elem_list";
import { ElemProps } from "@/components/elem";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const elem_list: ElemProps[] = [];
  const [elems, setRows] = useState(elem_list);
  const addNewElem = (e: any) => {
    e.preventDefault();
    const newElem = {
      id: Date.now(),
    };
    createRow(newElem);
  };

  const createRow = (newPost: ElemProps) => {
    setRows([...elems, newPost]);
  };
  return (
    <>
      <Head>
        <title>Example for testing</title>
        <meta name="description" content="add elements by press button" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <button className="add_button" onClick={addNewElem}>
            Press to add
          </button>
          <ElemList elems={elems}></ElemList>
        </main>
      </div>
    </>
  );
}
