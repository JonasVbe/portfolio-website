import { FunctionComponent, useState } from 'react';

const Contact: FunctionComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Hier zou je de logica toevoegen om de gegevens te verzenden, bijvoorbeeld via een API
        console.log('Form submitted:', { name, email, message });
    };

    return (
        <div className="p-8 bg-white">
            <h1 className="text-3xl font-bold mb-4">Contact</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-lg font-medium">Naam</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                    <label className="block text-lg font-medium">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
                </div>
                <div>
                    <label className="block text-lg font-medium">Bericht</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
                <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Verstuur</button>
            </form>
        </div>
    );
};

export default Contact;
