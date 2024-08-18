import React, { useState, useEffect } from 'react';
import axios from './api'; // Adjusted to match the import path
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import Footer from './components/Footer';

const App = () => {
  const [cards, setCards] = useState([]); // Ensure initial state is an empty array
  const [searchTerm, setSearchTerm] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false); // New state for form visibility

  // Fetch cards from the backend
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get('/cards');
        if (Array.isArray(response.data)) {
          setCards(response.data); // Ensure the response data is an array
          // Show form if no cards exist
          if (response.data.length === 0) {
            setIsFormVisible(true);
          }
        } else {
          console.error('Unexpected response data:', response.data);
        }
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  // Handle form submission to create a new card
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCard = { title, description };
      const response = await axios.post('/cards', newCard);
      setCards([...cards, response.data]); // Add the new card to the state array
      setTitle('');
      setDescription('');
      setIsFormVisible(false); // Hide the form after submission
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };

  // Filter cards based on search term
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle form visibility
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onButtonClick={toggleFormVisibility} />
      <main className="flex-grow overflow-auto">
        <div className="w-full h-52 bg-[#dadbf0] sticky top-0 z-10">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="container sm:w-full lg:max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-xl mx-auto p-4">
          {isFormVisible && (
            <div className="p-4 mb-4 bg-white shadow rounded">
              <h2 className="text-xl font-semibold">Add New Card</h2>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-4">
                <input
                  type="text"
                  placeholder="Title"
                  className="border p-2"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <textarea
                  placeholder="Description"
                  className="border p-2"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                  Add Card
                </button>
              </form>
            </div>
          )}
          <div className="grid grid-cols-2 gap-4 lg:max-w-screen-lg mx-auto">
            {filteredCards.map(card => (
              <Card key={card.id} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
