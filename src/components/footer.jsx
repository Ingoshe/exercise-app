import React from "react";

function footer() {
  return (
    <footer className="bg-gray-900 py-12 mt-96">
      <div className="container mx-auto px-2 text-white">
        <div className="flex justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Explore</h2>
            <ul className="flex space-x-4 text-6xl">
              <li>
                <a href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Learn more</h2>
            <ul className="ml=6">
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold italic font-serif mb-4">OmeCweetOme</h2>
            <p>© Copyright 2024 by OmeCweetOme</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
