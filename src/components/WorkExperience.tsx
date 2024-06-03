import { FunctionComponent } from 'react';

const WorkExperience: FunctionComponent = () => {
    return (
        <div className="p-8 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Werkervaring</h1>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Systeembeheerder ISO bij Euro Surplus (05-2017 tot 02-2022)</h2>
                <ul className="list-disc list-inside">
                    <li>Documentatie maken en beheren voor kwaliteit en milieu standaarden.</li>
                    <li>Proactief werken aan continue verbetering.</li>
                    <li>Verzamelen en verdelen van bedrijfskennis.</li>
                    <li>Procedures opstellen, ontwikkelen, opvolgen en bijwerken.</li>
                </ul>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Support Services Manager bij Euro Surplus (01-2016 tot 02-2022)</h2>
                <ul className="list-disc list-inside">
                    <li>Ondersteunen en coachen van werknemers en klanten.</li>
                </ul>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Interne Auditor bij Euro Surplus (07-2015 tot 02-2022)</h2>
                <ul className="list-disc list-inside">
                    <li>Kwaliteitsbewaking door middel van audits.</li>
                    <li>Identificeren en opvolgen van non-conformiteiten en corrigerende maatregelen opstellen.</li>
                </ul>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-semibold">Warehouse Manager bij Euro Surplus (04-2009 tot 01-2016)</h2>
                <ul className="list-disc list-inside">
                    <li>Leidinggeven.</li>
                    <li>Evalueren en motiveren van medewerkers.</li>
                    <li>Plannen en verdelen van dagtaken.</li>
                    <li>Organiseren magazijn.</li>
                </ul>
            </div>
        </div>
    );
};

export default WorkExperience;
