import React from "react";
import { AlertCircle } from "lucide-react";
import { NextPageContext } from "next";

interface ErrorProps {
  statusCode?: number;
}

const Error: React.FC<ErrorProps> = ({ statusCode }) => {
  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <header className="py-6 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">REPO Twilight</div>
          <nav>
            <ul className="flex space-x-6">
              {["Home", "Contact", "Dev", "QFind"].map((item) => (
                <li key={item} className="hover:text-gray-300 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-8">The Repo × Twilight</h1>
          <div className="bg-red-900 border border-red-700 rounded-lg p-6 inline-flex items-center">
            <AlertCircle className="mr-4 h-6 w-6" />
            <p className="text-xl">
              {statusCode
                ? `An error ${statusCode} occurred on server`
                : "An error occurred on client"}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export const getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
