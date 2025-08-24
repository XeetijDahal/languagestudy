import React, { useEffect, useState } from "react";
import axios from "axios";
import AddWordModal from "./components/AddWordModal";
import "./App.css";



function App() {
  const [words, setWords] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState(""); // search state

  const fetchWords = async () => {
    const res = await axios.get("https://languagestudyback.onrender.com/api/words", {
                headers: { "Cache-Control": "no-cache" }
              });
    setWords(res.data);
  };

  const addWord = async (word) => {
    const res = await axios.get("https://languagestudyback.onrender.com/api/words", {
                    headers: { "Cache-Control": "no-cache" }
                  });
    setWords([...words, res.data]);
  };

  useEffect(() => {
    fetchWords();
  }, []);

  // Filter words based on search input
  const filteredWords = words.filter(
    (w) =>
      w.english.toLowerCase().includes(search.toLowerCase()) ||
      w.nepali.toLowerCase().includes(search.toLowerCase()) ||
      w.german.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Language Study</h1>
      <button className="add-btn" onClick={() => setShowModal(true)}>
        + Add Content
      </button>
      <AddWordModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onAdd={addWord}
      />

      {/* Search input */}
      <input
        type="text"
        placeholder="Search words..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="table-wrapper">
        <table className="words-table">
          <thead>
            <tr>
              <th>English</th>
              <th>Nepali</th>
              <th>German</th>
            </tr>
          </thead>
          <tbody>
            {filteredWords.map((w) => (
              <tr key={w.id}>
                <td>{w.english}</td>
                <td>{w.nepali}</td>
                <td>{w.german}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
