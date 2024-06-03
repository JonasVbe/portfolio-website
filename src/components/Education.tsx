import { FunctionComponent } from 'react';

const Education: FunctionComponent = () => {
    return (
        <div className="p-8 bg-white">
            <h1 className="text-3xl font-bold mb-4">Opleiding</h1>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Graduaat Toegepaste Informatica: Programmeren</h2>
                <p className="text-lg">Thomas More, Turnhout</p>
                <p className="text-lg">Vaardigheden: C# netcore 3.1, ASP.NET, SQL, JavaScript/TypeScript, Angular, React, Java</p>
            </div>
        </div>
    );
};

export default Education;
