import React from 'react'

export const Contact = () => {
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-gray-600 rounded-lg shadow-md">
        <h2 className="text-3xl text-center text-pink-600 font-bold mb-6">Contact Us</h2>
        <form action="">
            <div className="mb-4">
                <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Nome Completo:</label>
                <input placeholder="Yuran Oscar Nhassengo" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500" required type="text" />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Seu Email:</label>
                <input placeholder="yurannhassengo@gmail.com" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500" required type="text"  />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Assunto:</label>
                <textarea placeholder="Escreva a sua Mensagem...." className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500" required type="text" />
            </div>
        </form>
    </div>
  )
}


