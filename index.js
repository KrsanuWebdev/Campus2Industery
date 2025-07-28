 // Search functionality
  const searchInput = document.getElementById("search-input");
  const mobileSearchInput = document.getElementById("mobile-search-input");
  const searchSuggestions = document.getElementById("search-suggestions");
  const mobileSearchSuggestions = document.getElementById("mobile-search-suggestions");
  
  // Show suggestions when input is focused
  searchInput.addEventListener("focus", () => {
    searchSuggestions.classList.remove("hidden");
  });
  
  mobileSearchInput.addEventListener("focus", () => {
    mobileSearchSuggestions.classList.remove("hidden");
  });
  
  // Hide suggestions when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchForm.contains(e.target)) {
      searchSuggestions.classList.add("hidden");
    }
    if (!mobileSearchForm.contains(e.target)) {
      mobileSearchSuggestions.classList.add("hidden");
    }
  });
  
  // Set search query when suggestion is clicked
  function setSearchQuery(query, isMobile = false) {
    if (isMobile) {
      mobileSearchInput.value = query;
      mobileSearchSuggestions.classList.add("hidden");
    } else {
      searchInput.value = query;
      searchSuggestions.classList.add("hidden");
    }
  }
  
  // Add click handlers for all suggestion items
  document.querySelectorAll("#search-suggestions li").forEach(item => {
    item.addEventListener("click", () => {
      setSearchQuery(item.textContent);
    });
  });
  
  document.querySelectorAll("#mobile-search-suggestions li").forEach(item => {
    item.addEventListener("click", () => {
      setSearchQuery(item.textContent, true);
    });
  });