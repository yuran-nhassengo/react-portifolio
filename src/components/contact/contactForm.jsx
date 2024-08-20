import React from 'react'

export const Contact = () => {
  return (
    <div className=" max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl text-center text-gray-400 font-bold mb-6">Contact Us</h2>
        <form action="">
            <div className="mb-4">
                <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Nome Completo:</label>
                <input placeholder="Yuran Oscar Nhassengo" className="w-full px-3 py-2 border rounded-lg bg-gray-200 focus:border-blue-500" required type="text" />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Seu Email:</label>
                <input placeholder="yurannhassengo@gmail.com" className="w-full px-3 py-2 border rounded-lg bg-gray-200 focus:border-blue-500" required type="text"  />
            </div>
            <div className="mb-4">
                <label className="block text-white text-sm font-semibold mb-2" htmlFor="">Assunto:</label>
                <textarea rows="4" placeholder="Escreva a sua Mensagem...." className="w-full px-3 py-2 border rounded-lg bg-gray-200 focus:border-blue-500" required type="text" />
            </div>
            <div className="flex justify-center">
                <button type="submit" className="bg-gray-400 text-white font-semibold px-4 py-2 rounded-lg hover:pink-600 focus:outline-white">Enviar</button>
            </div>
        </form>
    </div>
  )
}


