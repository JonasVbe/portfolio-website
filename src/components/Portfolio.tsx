import { FunctionComponent } from 'react';

const Portfolio: FunctionComponent = () => {
    return (
        <div className="p-8 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Hobby's</h1>
            <ul className="list-disc list-inside">
                <li>Pizza's maken</li>
                <li>Aziatisch eten</li>
                <li>Voetbal kijken (Royal Antwerp FC)</li>
                <li>Freestyle rappen en teksten schrijven</li>
            </ul>
        </div>
    );
};

export default Portfolio;
