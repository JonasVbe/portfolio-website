import { FunctionComponent } from 'react';
import detailedKnowledgeData from '../../data/skills.json'; // Pas dit aan naar de juiste locatie van je JSON-bestand

const DetailedKnowledgeList: FunctionComponent = () => {
    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">Uitgebreide kennis</h2>
            <p className="text-lg mb-8">{detailedKnowledgeData.aboutText}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {detailedKnowledgeData.detailedKnowledge.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <i className="fas fa-check-circle text-tertiary mr-2"></i>
                        <span className="text-lg">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailedKnowledgeList;
