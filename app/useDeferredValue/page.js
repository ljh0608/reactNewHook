"use client";

import { Suspense, useDeferredValue, useState } from "react";

import SearchResults from "../components/SearchResult";

const DeferredValue = () => {
  const [query, setQuery] = useState("");

  return (
    <>
      <label>
        Search albums:
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
      </label>

      <SearchResults query={query} />
    </>
  );
};

export default DeferredValue;

// const allAlbums = [{
//   id: 13,
//   title: 'Let It Be',
//   year: 1970
// }, {
//   id: 12,
//   title: 'Abbey Road',
//   year: 1969
// }, {
//   id: 11,
//   title: 'Yellow Submarine',
//   year: 1969
// }, {
//   id: 10,
//   title: 'The Beatles',
//   year: 1968
// }, {
//   id: 9,
//   title: 'Magical Mystery Tour',
//   year: 1967
// }, {
//   id: 8,
//   title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
//   year: 1967
// }, {
//   id: 7,
//   title: 'Revolver',
//   year: 1966
// }, {
//   id: 6,
//   title: 'Rubber Soul',
//   year: 1965
// }, {
//   id: 5,
//   title: 'Help!',
//   year: 1965
// }, {
//   id: 4,
//   title: 'Beatles For Sale',
//   year: 1964
// }, {
//   id: 3,
//   title: 'A Hard Day\'s Night',
//   year: 1964
// }, {
//   id: 2,
//   title: 'With The Beatles',
//   year: 1963
// }, {
//   id: 1,
//   title: 'Please Please Me',
//   year: 1963
