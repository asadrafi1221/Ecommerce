import React from 'react'

function Layout() {
  return (
    <div class="bg-white text-navy min-h-screen">
  <header class="bg-navy text-white p-4">
    <nav class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">Brand Name</h1>
      <ul class="flex space-x-6">
        <li><a href="#" class="hover:text-orange">Home</a></li>
        <li><a href="#" class="hover:text-orange">About</a></li>
        <li><a href="#" class="hover:text-orange">Services</a></li>
        <li><a href="#" class="hover:text-orange">Contact</a></li>
      </ul>
      <button class="bg-orange text-white px-4 py-2 rounded-md hover:bg-opacity-90">Get Started</button>
    </nav>
  </header>

  <section class="bg-navy text-white py-20">
    <div class="container mx-auto text-center">
      <h2 class="text-4xl font-bold mb-4">Welcome to Our Website</h2>
      <p class="text-lg mb-6">Discover our amazing services and offers tailored for you.</p>
      <button class="bg-orange px-6 py-3 text-lg font-semibold rounded-md hover:bg-opacity-90">Learn More</button>
    </div>
  </section>

  <section class="py-20">
    <div class="container mx-auto text-center">
      <h3 class="text-3xl font-bold text-navy mb-6">Our Features</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 bg-white shadow-md rounded-md border">
          <h4 class="text-xl font-semibold text-navy mb-2">Feature One</h4>
          <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="p-6 bg-white shadow-md rounded-md border">
          <h4 class="text-xl font-semibold text-navy mb-2">Feature Two</h4>
          <p class="text-gray-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="p-6 bg-white shadow-md rounded-md border">
          <h4 class="text-xl font-semibold text-navy mb-2">Feature Three</h4>
          <p class="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-orange text-white py-20">
    <div class="container mx-auto text-center">
      <h3 class="text-3xl font-bold mb-4">Special Promotion</h3>
      <p class="text-lg mb-6">Get 20% off on your first purchase. Don't miss out!</p>
      <button class="bg-navy px-6 py-3 text-lg font-semibold rounded-md hover:bg-opacity-90">Shop Now</button>
    </div>
  </section>

  
  <footer class="bg-navy text-white py-6">
    <div class="container mx-auto text-center">
      <p>&copy; 2024 Brand Name. All rights reserved.</p>
    </div>
  </footer>
</div>

  )
}

export default Layout