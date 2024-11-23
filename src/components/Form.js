import { useState } from 'react';

export default function Form({ moviesearch }) {
  const [formData, setFormData] = useState({ searchterm: "" });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { searchterm } = formData;
    if (searchterm.trim() === "") {
      alert("Please enter a search term!");
      return; 
    }
    moviesearch(searchterm); 
    setFormData({ searchterm: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchterm">Search for a Movie:</label>
      <input
        type="text"
        id="searchterm"
        name="searchterm"
        value={formData.searchterm}
        onChange={handleChange}
        placeholder="Enter movie title..."
      />
      <input type="submit" value="Search" />
    </form>
  );
}