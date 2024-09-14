// scripit.js
const countries = [
    { name: "United States", capital: "Washington, D.C." },
    { name: "Canada", capital: "Ottawa" },
    { name: "Germany", capital: "Berlin" },
    { name: "France", capital: "Paris" },
    { name: "Japan", capital: "Tokyo" },
    { name: "India", capital: "New Delhi" },
    { name: "Australia", capital: "Canberra" },
    { name: "Brazil", capital: "Brasilia" },
    { name: "Russia", capital: "Moscow" },
    { name: "China", capital: "Beijing" }
    // Add more countries and capitals as needed
  ];
  
  const searchInput = document.getElementById('country-search');
  const autocompleteList = document.getElementById('autocomplete-list');
  
  // Function to filter and display matching results
  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    autocompleteList.innerHTML = '';
  
    if (!query) return;
  
    // Filter countries based on name or capital
    const matches = countries.filter(country => 
      country.name.toLowerCase().includes(query) || 
      country.capital.toLowerCase().includes(query)
    );
  
    // Display suggestions
    matches.forEach(match => {
      const listItem = document.createElement('li');
      listItem.textContent = `${match.name} - ${match.capital}`;
      
      // Set the input value to the selected country on click
      listItem.addEventListener('click', () => {
        searchInput.value = match.name;
        autocompleteList.innerHTML = '';
      });
      
      autocompleteList.appendChild(listItem);
    });
  });
  