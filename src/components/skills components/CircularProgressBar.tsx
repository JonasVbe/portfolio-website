import { FunctionComponent, useEffect, useRef, useState } from 'react';

interface CircularProgressBarProps {
    skill: {
        name: string;
        percentage: number;
        years: number;
    };
}

const CircularProgressBar: FunctionComponent<CircularProgressBarProps> = ({ skill }) => {
    const [hover, setHover] = useState(false);
    const [inView, setInView] = useState(false);
    const radius = 100; // doubled the radius
    const stroke = 6;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

    const circleRef = useRef<SVGCircleElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    setInView(false);
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is in view
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (circleRef.current && inView) {
            // Ensure the initial render starts with full circle
            circleRef.current.style.strokeDashoffset = String(circumference);
            // Trigger reflow for transition to apply
            circleRef.current.getBoundingClientRect();
            // Apply transition and set the correct offset
            circleRef.current.style.transition = 'stroke-dashoffset 2s ease-in-out';
            circleRef.current.style.strokeDashoffset = String(strokeDashoffset);
        }
    }, [circumference, strokeDashoffset, inView]);

    return (
        <div
            ref={containerRef}
            className="relative flex flex-col items-center m-4"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <svg height={radius * 2} width={radius * 2} className="relative">
                <circle
                    stroke="gray"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <circle
                    ref={circleRef}
                    className="text-tertiary"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ stroke: 'currentColor' }}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    className="text-lg font-bold"
                >
                    {skill.years} jaar
                </text>
            </svg>
            <p className="mt-4 text-lg font-bold">{skill.name}</p>
            {hover && (
                <div className="absolute top-0 left-0 mt-12 p-2 bg-gray-700 text-white text-sm rounded shadow-lg">
                    {skill.percentage}% onder de knie
                </div>
            )}
        </div>
    );
};

export default CircularProgressBar;
