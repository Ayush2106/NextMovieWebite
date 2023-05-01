import Link from "next/link";
import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0974d51bcfmshbbf25626f2479a5p14c92fjsna7bdef611d3b",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
  } catch (error) {
    console.error(error);
  }

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <div>
      {" "}
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series and MOvies Page </h1>
          <div className={styles.card_section}>
            {main_data.map((currElem) => {
              return <MovieCard key={currElem.id} {...currElem} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
