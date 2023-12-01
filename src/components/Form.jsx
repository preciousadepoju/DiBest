import React from 'react';

const Form = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        action="mailto:preciousdamilare56@gmail.com"
        method="post"
        encType="text/plain"
        className="bg-white p-8 rounded shadow-md max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>

        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
